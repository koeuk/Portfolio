export const useScrollAnimation = () => {
  const isVisible = ref(false)
  const elementRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }

    onUnmounted(() => {
      observer.disconnect()
    })
  })

  return {
    isVisible,
    elementRef
  }
}
