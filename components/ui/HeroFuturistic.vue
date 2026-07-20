<template>
  <section class="hero-stage">
    <!-- Floating editorial card -->
    <div class="hero-inner">
      <!-- Top row: availability + CTA -->
      <div class="hero-top">
        <span class="status-pill" :style="{ animationDelay: '0.05s' }">
          <span class="status-dot"></span>
          Available for New Project
        </span>

        <NuxtLink to="/#contact" class="talk-btn" :style="{ animationDelay: '0.12s' }">
          Let's Talk
        </NuxtLink>
      </div>

      <!-- Display name: outline + solid split -->
      <h1 class="hero-name" aria-label="Koeuk KOS">
        <span class="name-outline" :style="{ animationDelay: '0.18s' }">{{ firstName }}</span>
        <span class="name-solid" :style="{ animationDelay: '0.26s' }">{{ lastName }}</span>
      </h1>

      <!-- Portrait, overlapping the name -->
      <div class="hero-portrait" :style="{ animationDelay: '0.34s' }">
        <img
          src="/images/koeuk-profile.png"
          :alt="personalInfo.name"
          class="portrait-img"
        />
      </div>

      <!-- Bottom-left: role + blurb + CTA -->
      <div class="hero-intro" :style="{ animationDelay: '0.44s' }">
        <h2 class="intro-role">{{ personalInfo.role }}</h2>
        <p class="intro-blurb">{{ personalInfo.bio }}</p>
        <NuxtLink to="/#contact" class="collab-btn">
          Let's collaborate
          <svg viewBox="0 0 16 16" class="collab-arrow" aria-hidden="true">
            <path d="M4 12L12 4M12 4H6M12 4V10" fill="none" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </NuxtLink>
      </div>

      <!-- Bottom-right: social pills -->
      <nav class="hero-socials" aria-label="Social links">
        <a
          v-for="(social, index) in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="social-pill"
          :style="{ animationDelay: `${0.5 + index * 0.06}s` }"
        >
          <span class="social-icon" v-html="social.icon"></span>
          <span>{{ social.label }}</span>
        </a>
      </nav>
    </div>
  </section>
</template>

<script setup lang="ts">
const { personalInfo } = useData()

const nameParts = computed(() => personalInfo.name.trim().split(' '))
const firstName = computed(() => nameParts.value[0] ?? '')
const lastName = computed(() => nameParts.value.slice(1).join(' ') || nameParts.value[0])

const icons = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>`,
}

const socials = [
  { label: 'GitHub', href: personalInfo.github, icon: icons.github },
  { label: 'LinkedIn', href: personalInfo.linkedin, icon: icons.linkedin },
  { label: 'Telegram', href: personalInfo.telegram, icon: icons.telegram },
  { label: 'Facebook', href: personalInfo.facebook, icon: icons.facebook },
]
</script>

<style scoped>
/* ───────────────────────────────────────────────
   Editorial hero — Swiss/minimal: a floating card
   on the page surface, split outline/solid display
   name, cut-out portrait breaking the type.
   ─────────────────────────────────────────────── */
.hero-stage {
  min-height: 100svh;
  display: flex;
}

/* Full-bleed section — no card frame */
.hero-inner {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1.75rem 1.25rem 1.5rem;
  background: #fff;
}

:global(.dark) .hero-inner {
  background: #0a0a0a;
}

/* ── Top row ── */
.hero-top {
  position: relative;
  z-index: 3;
  /* Sit below the floating navbar rather than colliding with it */
  margin-top: clamp(3.5rem, 6vw, 5.5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.status-pill,
.talk-btn,
.collab-btn,
.social-pill {
  font-family: 'Instrument Sans', sans-serif;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 500;
  color: #0d0d0d;
  background: #fff;
  border: 1px solid rgba(13, 13, 13, 0.1);
  box-shadow: 0 6px 18px -10px rgba(13, 13, 13, 0.4);
}

:global(.dark) .status-pill {
  color: #f4f4f5;
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.12);
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background: #22c55e;
  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6);
  animation: dot-pulse 2.4s ease-out infinite;
}

@keyframes dot-pulse {
  0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.55); }
  70% { box-shadow: 0 0 0 7px rgba(34, 197, 94, 0); }
  100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

.talk-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.35rem;
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #fff;
  background: #0d0d0d;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), background 0.35s ease;
}

.talk-btn:hover { transform: translateY(-2px); background: #22c55e; }

:global(.dark) .talk-btn { color: #0d0d0d; background: #fafafa; }
:global(.dark) .talk-btn:hover { background: #22c55e; color: #05210f; }

/* ── Display name ── */
.hero-name {
  position: relative;
  z-index: 1;
  margin-top: clamp(1.25rem, 3.5vw, 3rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 0.14em;
  font-family: 'Archivo', sans-serif;
  font-weight: 800;
  font-stretch: 112%;
  letter-spacing: -0.03em;
  line-height: 0.86;
  text-transform: uppercase;
  font-size: clamp(3.4rem, 16.5vw, 13.5rem);
  white-space: nowrap;
}

.name-outline {
  color: transparent;
  -webkit-text-stroke: 2px #0d0d0d;
}

.name-solid { color: #0d0d0d; }

:global(.dark) .name-outline { -webkit-text-stroke-color: #fafafa; }
:global(.dark) .name-solid { color: #fafafa; }

@media (min-width: 1024px) {
  .name-outline { -webkit-text-stroke-width: 3px; }
}

/* ── Portrait ── */
.hero-portrait {
  position: relative;
  z-index: 2;
  margin: -0.32em auto 0;
  width: min(78vw, 30rem);
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;
}

.portrait-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom center;
  user-select: none;
  -webkit-mask-image: linear-gradient(180deg, #000 82%, transparent 100%);
  mask-image: linear-gradient(180deg, #000 82%, transparent 100%);
}

/* ── Bottom-left intro ── */
.hero-intro {
  position: relative;
  z-index: 3;
  max-width: 22rem;
  margin-top: 1.25rem;
}

.intro-role {
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  font-size: clamp(1.35rem, 2.4vw, 1.9rem);
  letter-spacing: -0.02em;
  color: #0d0d0d;
}

.intro-blurb {
  font-family: 'Instrument Sans', sans-serif;
  margin-top: 0.5rem;
  font-size: 0.86rem;
  line-height: 1.55;
  color: rgba(13, 13, 13, 0.55);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

:global(.dark) .intro-role { color: #fafafa; }
:global(.dark) .intro-blurb { color: rgba(250, 250, 250, 0.55); }

.collab-btn {
  margin-top: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.4rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  background: #0d0d0d;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), background 0.35s ease;
}

.collab-btn:hover { transform: translateY(-2px); background: #22c55e; }
.collab-arrow { width: 15px; height: 15px; transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1); }
.collab-btn:hover .collab-arrow { transform: translate(2px, -2px); }

:global(.dark) .collab-btn { color: #0d0d0d; background: #fafafa; }
:global(.dark) .collab-btn:hover { background: #22c55e; color: #05210f; }

/* ── Social pills ── */
.hero-socials {
  position: relative;
  z-index: 3;
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.social-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.05rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #0d0d0d;
  border: 1px solid rgba(13, 13, 13, 0.12);
  background: #fff;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease, color 0.35s ease;
}

.social-pill:hover { transform: translateY(-2px); border-color: #22c55e; color: #16a34a; }

.social-icon { display: inline-flex; width: 14px; height: 14px; }
.social-icon :deep(svg) { width: 100%; height: 100%; }

:global(.dark) .social-pill {
  color: #f4f4f5;
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.12);
}
:global(.dark) .social-pill:hover { color: #86efac; border-color: #22c55e; }

/* ── Desktop composition: intro left, socials right, portrait centered ── */
@media (min-width: 1024px) {
  .hero-inner { padding: 1.75rem 2.25rem 2.25rem; }

  .hero-portrait {
    position: absolute;
    inset: auto 0 0;
    margin: 0 auto;
    width: min(38vw, 32rem);
    height: 74%;
  }

  .hero-intro {
    position: absolute;
    left: 2.25rem;
    bottom: 2.25rem;
    margin-top: 0;
  }

  .hero-socials {
    position: absolute;
    right: 2.25rem;
    bottom: 2.25rem;
    margin-top: 0;
    flex-direction: column;
    align-items: flex-end;
  }
}

/* ── Entrance ── */
@keyframes hero-rise {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

.status-pill,
.talk-btn,
.name-outline,
.name-solid,
.hero-portrait,
.hero-intro,
.social-pill {
  animation: hero-rise 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@media (prefers-reduced-motion: reduce) {
  .status-pill,
  .talk-btn,
  .name-outline,
  .name-solid,
  .hero-portrait,
  .hero-intro,
  .social-pill,
  .status-dot {
    animation: none;
  }
  .talk-btn:hover,
  .collab-btn:hover,
  .social-pill:hover { transform: none; }
}
</style>
