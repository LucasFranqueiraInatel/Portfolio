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
            <div>Logo</div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav