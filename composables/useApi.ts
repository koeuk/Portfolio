export const useApi = () => {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase as string
  const { locale } = useAppLocale()

  const apiFetch = <T>(endpoint: string, params?: Record<string, any>) => {
    const allParams = { ...params, locale: locale.value }
    return $fetch<T>(`${apiBase}${endpoint}`, { params: allParams })
  }

  const getPersonalInfo = () =>
    useAsyncData('personal-info', () => apiFetch('/personal-info'), { watch: [locale] })

  const getProjects = (featured?: boolean) =>
    useAsyncData('projects', () => apiFetch('/projects', featured ? { featured: true } : {}), { watch: [locale] })

  const getSkills = () =>
    useAsyncData('skills', () => apiFetch('/skills'), { watch: [locale] })

  const getExperiences = () =>
    useAsyncData('experiences', () => apiFetch('/experiences'), { watch: [locale] })

  const getExperience = (id: string) =>
    useAsyncData(`experience-${id}`, () => apiFetch(`/experiences/${id}`), { watch: [locale] })

  const getBadges = () =>
    useAsyncData('badges', () => apiFetch('/badges'), { watch: [locale] })

  const getBlogTabs = () =>
    useAsyncData('blog-tabs', () => apiFetch('/blog/tabs'), { watch: [locale] })

  const getBlogPosts = (params?: Ref<{ tab?: string; page?: number; per_page?: number }> | { tab?: string; page?: number; per_page?: number }) =>
    useAsyncData('blog-posts', () => {
      const p = isRef(params) ? params.value : params
      return apiFetch('/blog/posts', p || {})
    }, { watch: [locale, ...(isRef(params) ? [params] : [])] })

  const getBlogPost = (slug: string) =>
    useAsyncData(`blog-post-${slug}`, () => apiFetch(`/blog/posts/${slug}`), { watch: [locale] })

  const getBlogTags = () =>
    useAsyncData('blog-tags', () => apiFetch('/blog/tags'), { watch: [locale] })

  return {
    apiBase,
    apiFetch,
    getPersonalInfo,
    getProjects,
    getSkills,
    getExperiences,
    getExperience,
    getBadges,
    getBlogTabs,
    getBlogPosts,
    getBlogPost,
    getBlogTags
  }
}
