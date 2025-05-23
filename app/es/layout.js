import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function LayoutES({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
