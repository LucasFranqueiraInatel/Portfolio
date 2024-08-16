"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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


const Nav = () => {
    const pathname = usePathname()

    return (
        <nav className='flex gap-8'>
            {links.map((link, index) => {
                return (
                    <Link href={`#${link.id}`} key={index} className={`
                    capitalize font-medium hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}


export default Nav