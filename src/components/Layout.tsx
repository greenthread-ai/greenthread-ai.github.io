import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import AnimatedBackground from './AnimatedBackground'

export default function Layout() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
