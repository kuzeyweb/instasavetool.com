import '../../styles/globals.css'
import '../assets/css/lib/swiper.min.css'
import '../assets/css/lib/lity.css'
import '../assets/css/lib/jquery.fancybox.css'
import '../assets/css/lib/animate.css'
import '../assets/css/lib/bootstrap.min.css'
import '../assets/css/style.css'
import { Footer } from '../layout/footer/Footer'
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Component {...pageProps} />
    <GoogleAnalytics trackPageViews />
    <Footer />
    </>
  )
  
}

export default MyApp
