import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import { twMerge } from 'tailwind-merge';
import './globals.css'
import db from '@/lib/supabase/db'
import { ThemeProvider } from '@/lib/providers/next-theme-provider';
import AppStateProvider from '@/lib/providers/state-provider';



const inter = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StreamNote',
  description: 'StreamNote is a tool which let you collabrate with other developers ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log(db)
  return (
    <html lang="en">
       <body className={twMerge('bg-background', inter.className)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem>
              <AppStateProvider>
                {children}
               </AppStateProvider>
           </ThemeProvider>
        </body>
    </html>
  )
}
