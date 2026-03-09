export const useAppLocale = () => {
  const locale = useState<'en' | 'km' | 'zh'>('locale', () => 'en')
  const setLocale = (l: 'en' | 'km' | 'zh') => { locale.value = l }
  return { locale, setLocale }
}
