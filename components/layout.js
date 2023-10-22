import Footer from './footer';
import Header from './header';
import { Providers } from './provider';

export default function Layout({children}) {
    return (
      <html suppressHydrationWarning>
        <div>
          <Providers>
            <Header/>prott
            {children}
            <Footer/>
          </Providers>
        </div>
      </html>
    )
  }
  