import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUsPopup from '../components/ContactUsPopup';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Rajasthan Auto Distributor',
  description: 'Automobile distributor homepage',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/images/Logo1.png',
    shortcut: '/images/Logo1.png',
    apple: '/images/Logo1.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Logo1.png" />
        <link rel="shortcut icon" href="/images/Logo1.png" />
        <link rel="apple-touch-icon" href="/images/Logo1.png" />
      </head>
      <body className={`bg-white dark:bg-[#2A2929] min-h-screen transition-colors duration-300 overflow-x-hidden ${roboto.className}`}>
        <ThemeProvider>
        <Header />
          <main>
        {children}
          </main>
        <Footer />
        <ContactUsPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
