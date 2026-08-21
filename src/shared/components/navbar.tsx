'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

const Navbar: React.FC = () => {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'TRANG CHỦ' },
        { href: '/format', label: 'THỂ THỨC' },
        { href: '/pool', label: 'POOL' },
        { href: '/schedule', label: 'LỊCH TRÌNH' },
        { href: '/staff', label: 'NHÂN SỰ' },
    ];

    return (
        <nav className='fixed flex items-center justify-between bg-navbar rounded-xl px-3 py-6 left-12 right-12 my-8 shadow-xl'>
            {/* Left Elements */}
            <div className='mx-6'>
                <ul className='flex gap-9 font-bold text-xl items-center'>
                    {/* TODO: replace with tournament logo */}
                    <div 
                        className='bg-gray-300 w-43 h-18 flex items-center justify-center'
                    >
                        PlaceHolder
                    </div>

                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href} className='relative'>
                                <Link href={link.href} className={`relative pb-1 block`}>
                                    {link.label}
                                    {isActive && (
                                        <motion.span
                                            layoutId='underline'
                                            className='absolute left-[10%] right-[10%] bottom-0 h-0.5 bg-white'
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Right Elements */}
            <div className='mx-6'>
                <ul className='flex gap-9 font-bold text-xl'>
                    <li>
                        <Link href={'/register'}>ĐĂNG KÝ</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
