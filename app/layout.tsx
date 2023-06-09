'use client'
import { RecoilRoot } from 'recoil'
import { AppFooter } from '../cmps/app-footer'
import { AppHeader } from '../cmps/app-header'
import SideBar from '../cmps/side-bar/side-bar'
import '../styles/globals.css'

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body>
          <div className='flex h-screen'>
            <SideBar />
            <div className='flex-1 overflow-y-scroll bg-[#121212] relative'>
              <AppHeader />
              <div className='bg-[#121212]'>{children}</div>
            </div>
            <AppFooter />
          </div>
        </body>
      </html>
    </RecoilRoot>
  )
}
