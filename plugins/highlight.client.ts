import hljs from 'highlight.js'
import 'highlight.js/styles/github.css' // Switch to light theme to match the image

export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.client) {
    // @ts-ignore
    window.hljs = hljs
    
    // @ts-ignore
    await import('highlightjs-line-numbers.js').catch(() => {})

    const injectHeader = (block: HTMLElement) => {
      const pre = block.parentElement
      if (!pre || pre.parentElement?.classList.contains('code-block-container')) return

      // Wrap pre in a container
      const container = document.createElement('div')
      container.className = 'code-block-container'
      pre.parentNode?.insertBefore(container, pre)
      container.appendChild(pre)
      
      // Create Header
      const header = document.createElement('div')
      header.className = 'code-header-minimal'
      
      // Get filename from block attributes or parent
      const filename = block.getAttribute('data-filename') || 'code'
      
      header.innerHTML = `
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
          <span class="text-sm font-medium text-gray-700 font-mono">${filename}</span>
        </div>
        <button class="copy-btn-minimal" title="Copy code">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-check hidden text-green-500"><polyline points="20 6 9 17 4 12"/></svg>
        </button>
      `
      
      const copyBtn = header.querySelector('.copy-btn-minimal') as HTMLButtonElement
      const iconCopy = copyBtn.querySelector('.icon-copy') as SVGElement
      const iconCheck = copyBtn.querySelector('.icon-check') as SVGElement

      copyBtn.onclick = () => {
        const code = block.innerText
        navigator.clipboard.writeText(code).then(() => {
          iconCopy.classList.add('hidden')
          iconCheck.classList.remove('hidden')
          setTimeout(() => {
            iconCopy.classList.remove('hidden')
            iconCheck.classList.add('hidden')
          }, 2000)
        })
      }
      
      container.prepend(header)
    }

    return {
      provide: {
        highlight: (el: HTMLElement) => {
          el.querySelectorAll('pre code').forEach((block) => {
            if (!block.classList.contains('hljs')) {
              hljs.highlightElement(block as HTMLElement)
              // @ts-ignore
              if (window.hljs && typeof window.hljs.lineNumbersBlock === 'function') {
                // @ts-ignore
                window.hljs.lineNumbersBlock(block)
              }
              injectHeader(block as HTMLElement)
            }
          })
        }
      }
    }
  }
})
