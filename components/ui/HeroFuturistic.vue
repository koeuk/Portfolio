<template>
  <section class="hero-stage">
    <div class="hero-card">
      <!-- Fine film grain + soft gold wash -->
      <div class="hero-grain" aria-hidden="true"></div>
      <div class="hero-wash" aria-hidden="true"></div>

      <!-- ── Left: copy ── -->
      <div class="hero-copy">
        <span class="status-pill" :style="{ animationDelay: '0.1s' }">
          <span class="status-dot"></span>
          {{ t('hero.available') }}
          <span class="status-sep" aria-hidden="true"></span>
          <span class="status-location">{{ t('hero.location') }}</span>
        </span>

        <h1 class="hero-name" :aria-label="personalInfo.name">
          <span
            v-for="(char, index) in nameLetters"
            :key="index"
            class="letter"
            :class="{ 'letter-space': char === ' ' }"
            :style="{ animationDelay: `${0.18 + index * 0.045}s` }"
            aria-hidden="true"
          >{{ char === ' ' ? ' ' : char }}</span>
        </h1>

        <p class="hero-tagline" :style="{ animationDelay: '0.5s' }">{{ t('hero.role') }}</p>

        <p class="hero-blurb" :style="{ animationDelay: '0.58s' }">{{ t('hero.blurb') }}</p>

        <!-- ── Role + tech stack strip (the CTA slot) ── -->
        <div class="hero-strip" :style="{ animationDelay: '0.66s' }">
          <!-- Cycling role — solid gold block -->
          <div class="strip-role" aria-live="polite">
            <span class="strip-eyebrow">{{ t('hero.rolesEyebrow') }}</span>
            <span class="strip-role-stack">
              <!-- Invisible sizers: reserve the width of the longest role -->
              <span
                v-for="role in roles"
                :key="role"
                class="strip-role-text strip-role-sizer"
                aria-hidden="true"
              >{{ role }}</span>
              <Transition name="role-swap" mode="out-in">
                <span :key="roleIndex" class="strip-role-text">{{ roles[roleIndex] }}</span>
              </Transition>
            </span>
            <span class="roles-track" aria-hidden="true">
              <span
                v-for="(_, i) in roles"
                :key="i"
                class="roles-tick"
                :class="{ 'is-active': i === roleIndex }"
              ></span>
            </span>
          </div>

          <!-- Tech stack — outlined block with a rolling marquee of chips -->
          <a href="/#skills" class="strip-skills">
            <span class="strip-eyebrow">
              {{ t('hero.skillsEyebrow') }}
              <span class="strip-more">+{{ remainingSkillCount }} {{ t('hero.skillsMore') }} →</span>
            </span>
            <div class="skills-marquee" aria-hidden="true">
              <div class="skills-track">
                <span
                  v-for="(skill, i) in marqueeSkills"
                  :key="`${skill.name}-${i}`"
                  class="skill-chip"
                >
                  <span class="skill-chip-icon" v-html="getIcon(skill.name)"></span>
                  <span class="skill-chip-name">{{ skill.name }}</span>
                </span>
              </div>
            </div>
            <span class="sr-only">{{ mainSkills.map((s) => s.name).join(', ') }}</span>
          </a>
        </div>

        <!-- Socials -->
        <nav class="hero-socials" aria-label="Social links">
          <a
            v-for="(social, index) in socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            :aria-label="social.label"
            :title="social.label"
            :style="{ animationDelay: `${0.78 + index * 0.06}s` }"
          >
            <span class="social-icon" v-html="social.icon"></span>
          </a>
        </nav>
      </div>

      <!-- ── Right: portrait ── -->
      <div class="hero-portrait" :style="{ animationDelay: '0.3s' }">
        <span class="portrait-glow" aria-hidden="true"></span>
        <span class="portrait-ring" aria-hidden="true"></span>
        <img
          src="/images/koeuk-profile.png"
          :alt="personalInfo.name"
          class="portrait-img"
        />
        <span class="portrait-fade" aria-hidden="true"></span>
      </div>

      <!-- Scroll cue -->
      <a href="/#skills" class="scroll-cue" aria-label="Scroll to explore">
        <span class="scroll-cue-label">Scroll</span>
        <span class="scroll-cue-track"><span class="scroll-cue-dot"></span></span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { personalInfo, skills } = useData()
const { t } = useI18n()
const { getIcon } = useSkillIcons()

// Main stack shown in the hero strip; the full wall lives in #skills
const mainSkillNames = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript',
  'Vue.js', 'Nuxt.js', 'Tailwind CSS',
  'PHP', 'Laravel', 'Inertia.js', 'MySQL', 'Git',
]
const mainSkills = computed(() =>
  mainSkillNames
    .map((name) => skills.find((skill) => skill.name === name))
    .filter((skill): skill is NonNullable<typeof skill> => Boolean(skill)),
)
// Duplicated so the marquee loops seamlessly at -50%
const marqueeSkills = computed(() => [...mainSkills.value, ...mainSkills.value])
const remainingSkillCount = computed(() => Math.max(skills.length - mainSkills.value.length, 0))

// Roles shown one at a time in the gold block
const roleKeys = [
  'hero.roleTitle',
  'hero.roles.webDesign',
  'hero.roles.frontend',
  'hero.roles.backend',
  'hero.roles.fullstack',
]
const roles = computed(() => roleKeys.map((key) => t(key)))
const roleIndex = ref(0)
let roleTimer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  roleTimer = setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % roleKeys.length
  }, 2600)
})
onUnmounted(() => {
  if (roleTimer) clearInterval(roleTimer)
})

const nameLetters = computed(() => [...personalInfo.name.trim()])

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
   Dark editorial hero — a charcoal card with a warm
   gold accent. Copy on the left, cut-out portrait on
   the right; the CTA slot carries role + tech stack.
   ─────────────────────────────────────────────── */
.hero-stage {
  --gold: #d3b078;
  --gold-deep: #b8925a;
  --ink: #f5f1ea;
  --ink-muted: rgba(245, 241, 234, 0.62);
  --ink-faint: rgba(245, 241, 234, 0.38);
  --line: rgba(245, 241, 234, 0.12);
  --card: #0b0b0c;

  padding: 0.75rem;
  min-height: 100svh;
  display: flex;
}

.hero-card {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1.75rem;
  padding: 6.25rem 1.5rem 0;
  color: var(--ink);
  background:
    radial-gradient(120% 80% at 100% 100%, #1a1814 0%, rgba(26, 24, 20, 0) 55%),
    linear-gradient(160deg, #141415 0%, var(--card) 60%);
  box-shadow:
    0 30px 80px -40px rgba(0, 0, 0, 0.7),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

/* ── Overlays ── */
.hero-grain {
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
  opacity: 0.08;
  mix-blend-mode: screen;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.hero-wash {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(60% 50% at 18% 20%, rgba(211, 176, 120, 0.09) 0%, rgba(211, 176, 120, 0) 70%);
}

/* ── Copy column ── */
.hero-copy {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 36rem;
}

/* Availability pill */
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.9rem;
  border-radius: 9999px;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.74rem;
  font-weight: 500;
  color: var(--ink);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  animation: hero-rise 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background: #22c55e;
  animation: dot-pulse 2.4s ease-out infinite;
}

@keyframes dot-pulse {
  0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.55); }
  70% { box-shadow: 0 0 0 7px rgba(34, 197, 94, 0); }
  100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

.status-sep {
  width: 3px;
  height: 3px;
  border-radius: 9999px;
  background: rgba(245, 241, 234, 0.35);
}

.status-location { color: var(--ink-muted); }

/* Display name */
.hero-name {
  margin-top: 1.5rem;
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  font-stretch: 105%;
  font-size: clamp(2.6rem, 7.2vw, 5.4rem);
  line-height: 0.98;
  letter-spacing: -0.035em;
  color: var(--ink);
  display: flex;
  flex-wrap: wrap;
}

.letter {
  display: inline-block;
  will-change: transform, opacity, filter;
  animation: letter-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.letter-space { width: 0.28em; }

@keyframes letter-in {
  from {
    opacity: 0;
    transform: translateY(0.35em) scale(0.96);
    filter: blur(8px);
  }
  60% { filter: blur(0); }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

/* Tagline — gold */
.hero-tagline {
  margin-top: 0.9rem;
  font-family: 'Instrument Sans', sans-serif;
  font-weight: 500;
  font-size: clamp(1rem, 1.6vw, 1.2rem);
  letter-spacing: 0.01em;
  color: var(--gold);
  animation: hero-rise 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* Blurb */
.hero-blurb {
  margin-top: 1.6rem;
  max-width: 30rem;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--ink-muted);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  animation: hero-rise 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* ── Role + tech stack strip (CTA slot) ── */
.hero-strip {
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  animation: hero-rise 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.strip-eyebrow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  white-space: nowrap;
}

/* Gold block — cycling role */
.strip-role {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 0.85rem 1.1rem 0.8rem;
  border-radius: 0.85rem;
  color: #17130c;
  background: linear-gradient(135deg, #e2c48f 0%, var(--gold) 55%, var(--gold-deep) 100%);
  box-shadow:
    0 18px 40px -22px rgba(211, 176, 120, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
  overflow: hidden;
}

.strip-role .strip-eyebrow { color: rgba(23, 19, 12, 0.6); }

.strip-role-stack {
  display: grid;
}

.strip-role-stack > * {
  grid-area: 1 / 1;
}

.strip-role-sizer {
  visibility: hidden;
  pointer-events: none;
}

.strip-role-text {
  display: block;
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  font-size: clamp(1.05rem, 1.7vw, 1.3rem);
  letter-spacing: -0.02em;
  line-height: 1.1;
  white-space: nowrap;
}

.roles-track {
  display: inline-flex;
  gap: 0.28rem;
}

.roles-tick {
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 999px;
  background: rgba(23, 19, 12, 0.25);
  transition: background 0.3s ease, width 0.3s ease;
}

.roles-tick.is-active {
  width: 1rem;
  background: #17130c;
}

/* Role swap */
.role-swap-enter-active,
.role-swap-leave-active {
  transition: opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.35s ease;
}
.role-swap-enter-from {
  opacity: 0;
  transform: translateY(0.5em);
  filter: blur(6px);
}
.role-swap-leave-to {
  opacity: 0;
  transform: translateY(-0.5em);
  filter: blur(6px);
}

/* Outlined block — tech stack marquee */
.strip-skills {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0.85rem 0 0.8rem;
  border-radius: 0.85rem;
  border: 1px solid rgba(211, 176, 120, 0.35);
  background: rgba(255, 255, 255, 0.025);
  text-decoration: none;
  color: var(--ink);
  min-width: 0;
  transition: border-color 0.3s ease, background 0.3s ease;
}

.strip-skills:hover {
  border-color: rgba(211, 176, 120, 0.7);
  background: rgba(211, 176, 120, 0.06);
}

.strip-skills .strip-eyebrow {
  padding: 0 1.1rem;
  color: var(--gold);
}

.strip-more {
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: none;
  color: var(--ink-faint);
  transition: color 0.2s ease;
}

.strip-skills:hover .strip-more { color: var(--ink); }

.skills-marquee {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
}

.skills-track {
  display: flex;
  gap: 0.5rem;
  width: max-content;
  padding: 0 0.25rem;
  animation: marquee 34s linear infinite;
}

.strip-skills:hover .skills-track { animation-play-state: paused; }

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.skill-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.75rem 0.35rem 0.5rem;
  border-radius: 9999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.04);
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.76rem;
  font-weight: 600;
  white-space: nowrap;
}

.skill-chip-icon {
  display: inline-flex;
  width: 1.05rem;
  height: 1.05rem;
  flex-shrink: 0;
}

.skill-chip-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

/* ── Socials ── */
.hero-socials {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 9999px;
  border: 1px solid var(--line);
  color: var(--ink-muted);
  background: rgba(255, 255, 255, 0.03);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
  animation: hero-rise 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.social-link:hover {
  transform: translateY(-2px);
  color: #17130c;
  background: var(--gold);
  border-color: var(--gold);
}

.social-icon { display: inline-flex; width: 15px; height: 15px; }
.social-icon :deep(svg) { width: 100%; height: 100%; }

/* ── Portrait ── */
.hero-portrait {
  position: relative;
  z-index: 2;
  margin: 2rem auto 0;
  width: min(80vw, 26rem);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;
  animation: hero-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.portrait-glow {
  position: absolute;
  left: 50%;
  bottom: 6%;
  width: 92%;
  aspect-ratio: 1;
  transform: translateX(-50%);
  border-radius: 9999px;
  background: radial-gradient(
    circle,
    rgba(211, 176, 120, 0.32) 0%,
    rgba(211, 176, 120, 0.14) 40%,
    rgba(211, 176, 120, 0) 70%
  );
  filter: blur(40px);
  z-index: -1;
  animation: portrait-breathe 7s ease-in-out infinite;
}

@keyframes portrait-breathe {
  0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(0.94); }
  50% { opacity: 1; transform: translateX(-50%) scale(1.06); }
}

/* Thin gold arc behind the head */
.portrait-ring {
  position: absolute;
  left: 50%;
  top: 4%;
  width: 78%;
  aspect-ratio: 1;
  transform: translateX(-50%);
  border-radius: 9999px;
  border: 1px solid rgba(211, 176, 120, 0.28);
  z-index: -1;
  mask-image: linear-gradient(180deg, #000 0%, #000 55%, transparent 80%);
  -webkit-mask-image: linear-gradient(180deg, #000 0%, #000 55%, transparent 80%);
}

.portrait-img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: bottom center;
  user-select: none;
  filter: drop-shadow(0 30px 40px rgba(0, 0, 0, 0.55));
}

/* Blend the cut-off bottom of the portrait into the card */
.portrait-fade {
  position: absolute;
  left: -10%;
  right: -10%;
  bottom: 0;
  height: 22%;
  z-index: 2;
  background: linear-gradient(180deg, rgba(11, 11, 12, 0) 0%, rgba(11, 11, 12, 0.92) 100%);
}

/* ── Scroll cue ── */
.scroll-cue {
  position: absolute;
  left: 3.25rem;
  bottom: 1.1rem;
  z-index: 3;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
  text-decoration: none;
  animation: hero-rise 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.9s both;
}

.scroll-cue-label {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.scroll-cue-track {
  position: relative;
  width: 1px;
  height: 34px;
  background: var(--line);
  overflow: hidden;
}

.scroll-cue-dot {
  position: absolute;
  left: -1.5px;
  top: 0;
  width: 4px;
  height: 8px;
  border-radius: 9999px;
  background: var(--gold);
  animation: scroll-dot 1.9s cubic-bezier(0.6, 0, 0.4, 1) infinite;
}

@keyframes scroll-dot {
  0% { transform: translateY(-10px); opacity: 0; }
  35% { opacity: 1; }
  100% { transform: translateY(34px); opacity: 0; }
}

/* ── Tablet: side-by-side strip ── */
@media (min-width: 640px) {
  .hero-strip { grid-template-columns: auto minmax(0, 1fr); }
  .strip-role { min-width: 13rem; }
}

/* ── Desktop composition: copy left, portrait right ── */
@media (min-width: 1024px) {
  .hero-stage { padding: 0.9rem; }

  .hero-card {
    flex-direction: row;
    align-items: flex-end;
    padding: 6.5rem 3.25rem 0;
    min-height: calc(100svh - 1.8rem);
  }

  .hero-copy {
    flex: 0 1 50%;
    max-width: 38rem;
    padding-bottom: 4.75rem;
  }

  .hero-blurb {
    -webkit-line-clamp: unset;
    display: block;
    overflow: visible;
  }

  .hero-portrait {
    position: absolute;
    right: 3%;
    bottom: 0;
    margin: 0;
    width: min(42vw, 40rem);
    height: 88%;
  }

  .portrait-img { height: 100%; width: auto; max-width: 100%; }

  .scroll-cue { display: flex; }
}

@media (min-width: 1440px) {
  .hero-card { padding-left: 4.5rem; }
  .scroll-cue { left: 4.5rem; }
  .hero-portrait { right: 6%; }
}

/* ── Entrance ── */
@keyframes hero-rise {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .status-pill,
  .letter,
  .hero-tagline,
  .hero-blurb,
  .hero-strip,
  .hero-portrait,
  .social-link,
  .status-dot,
  .portrait-glow,
  .scroll-cue,
  .scroll-cue-dot,
  .skills-track {
    animation: none;
  }
  .skills-track { flex-wrap: wrap; width: auto; padding: 0 1.1rem; }
  .skills-marquee { mask-image: none; -webkit-mask-image: none; }
  .social-link:hover { transform: none; }
  .role-swap-enter-active,
  .role-swap-leave-active { transition: opacity 0.2s ease; }
  .role-swap-enter-from,
  .role-swap-leave-to { transform: none; filter: none; }
}
</style>
