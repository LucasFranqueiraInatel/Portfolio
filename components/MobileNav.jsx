"use client";

import { Sheet, SheetContent, SheetTrigger } from '/components/ui/sheet'
import { usePathname } from "next/navigation"
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

const links = [
  {
    name: 'home',
    path: '/',
    id: 'home'
  },
  {
    name: 'resume',
    path: '/resume',
    id: 'resume'
  },
  {
    name: 'works',
    path: '/works',
    id: 'works'
  },
  {
    name: 'contact',
    path: '/contact',
    id: 'contact'
  }
]

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        {/* Logo */}
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link href='/'>
            <h1 className='text-4xl font-semibold'>
              Lucas<span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>
        {/* Nav */}
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link, index) => {
            return (
              <Link href={`#${link.id}`} key={index} className={`
                    capitalize font-medium hover:text-accent transition-all`}>
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav