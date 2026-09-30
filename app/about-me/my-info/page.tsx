import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Container } from '@/components/ui/Container'
import { useData } from '@/lib/data'
import { MyInfo, MyInfoTabs, MyInfoTabsFallback } from './MyInfo'

const { personalInfo } = useData()

export const metadata: Metadata = {
  title: 'My Info | Koeuk Dev',
  description: personalInfo.bio,
}

export default function MyInfoPage() {
  return (
    <Container>
      <MyInfo />
      {/* The open tab comes from ?section=, which is only known in the browser */}
      <Suspense fallback={<MyInfoTabsFallback />}>
        <MyInfoTabs />
      </Suspense>
    </Container>
  )
}
