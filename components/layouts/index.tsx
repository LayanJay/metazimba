import { ReactNode } from 'react'
import Footer from '../footer'
import Header from '../header'

type Props = {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <main className='layout'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout
