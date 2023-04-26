import Image from 'next/image'
import { Inter } from 'next/font/google'
import Slider from '@/components/slider'
import Paragraph from '@/components/pargraph'
import Jaipurmap from '@/components/map'
import Near from '@/components/near'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <Slider />
  <Paragraph/>
  <Jaipurmap />
  <Near />
  </>
  )
}
