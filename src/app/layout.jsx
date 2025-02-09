'use client'

import { Provider } from 'react-redux'
import { store } from './store';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang="en">
      <head>
        <link rel="icon" href="/logo-favicon.png" />
      </head>
      <body className='bg-black'>
        {/* allow redux access */}
        <Provider store={store}>
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
