
import Slider from '@/components/slider'
import Paragraph from '@/components/pargraph'
import Jaipurmap from '@/components/map'
import Near from '@/components/near'
import { useSession } from 'next-auth/react';

export default function Home() {
  
  // const { data: session } = useSession();
  return (
    <><section>
    <Slider />
  <Paragraph/>
  <Jaipurmap />
  <Near />
  </section>
  </>
  )
}
