'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Batika from '@/public/Logo/Batika_logo.svg';
import { motion } from 'framer-motion';

const NavBar = () => {
    const pathname = usePathname();
    const [currentTime, setCurrentTime] = useState('');
    const [blink, setBlink] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
            setCurrentTime(timeString);
        };

        updateTime();
        const timeInterval = setInterval(updateTime, 60000);

        const blinkInterval = setInterval(() => {
            setBlink(prev => !prev);
        }, 500);

        return () => {
            clearInterval(timeInterval);
            clearInterval(blinkInterval);
        };
    }, []);

    const navItems = [
        { label: 'À propos,', href: '#' },
        { label: 'Expertises,', href: '#' },
        { label: 'Réalisations', href: '#' }
    ];

    const mobileItems = [
        {label: 'Accueil', href: '/'},
        {label: 'À propos', href: '#'},
        {label: 'Expertises', href: '#'},
        {label: 'Réalisations', href: '/realisations'},
        {label: 'Contact', href: '/contact'},
    ]

    const socials = [
        {label: 'Linkedin,', href: 'https://www.linkedin.com/company/batika-construction/'},
        {label: 'Instagram,', href: 'https://www.instagram.com/batika.construction/'},
        {label: 'Linktree,', href: 'https://www.tiktok.com/@batika_construction'},
        {label: 'Email', href: 'mailto:contact@batika.ma'},
    ]

    const formatTime = (timeStr) => {
        if (!timeStr) return '-- : --';
        
        const [time, period] = timeStr.split(' ');
        const [hours, minutes] = time.split(':');
        
        return (
            <div className='tracking-wide time font-[600] '>
                <span>{hours}</span>
                <span className={`transition-opacity duration-300 ${blink ? 'opacity-100' : 'opacity-30'}`}>:</span>
                <span>{minutes}</span>
                <span> {period}</span>
            </div>
        );
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Helper function to check if nav item is active
    const isActive = (href) => {
        if (href === '/') {
            return pathname === '/';
        }
        // For other paths, check if current path starts with the href
        return pathname.startsWith(href);
    };

    return (
        <>
            {
                isMenuOpen && (
                    <motion.div initial={{ opacity: 0, filter: 'blur(5px)' }} animate={{ opacity: 1, filter: 'blur(0px)'  }} transition={{duration:.3, ease:'easeInOut' }}  className="fixed inset-0  pb-7 px-7 xl:hidden z-20 grid grid-rows-[1fr_auto] place-content-between bg-[#fefefe]  min-h-dvh h-svh w-screen">
                        <div className="w-full  flex flex-col gap-4 justify-center">
                            {
                                mobileItems.map((item, index) => (
                                    <Link 
                                        key={index}
                                        href={item.href}
                                        className={`group font-semibold  text-[52px] leading-none sm:leading-[1] tracking-[.015em] sm:text-7xl hover:text-gray relative duration-200 ease-in-out saturate-[1.05] ${
                                            isActive(item.href) ? 'text-gray' : 'text-[#26333e]'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))
                            }
                        </div>

                        <div className="flex gap-2">
                            {
                                socials.map((social, index) => (
                                    <Link href={social.href} key={index} className='w-fit overflow-hidden h-[25px] relative '>
                                        <motion.div intial={{y:20}} animate={{y:0}} transition={{duration:.5, delay:.5, ease:'easeInOut' }}
                                            className=" relative  hover:text-gray text-[18px] font-[600] relative duration-200 ease-in-out -[#0d1c28]/85"
                                        >
                                            {social.label}
                                        </motion.div>
                                    </Link>
                                ))
                            }
                        </div>
                    </motion.div>
                )
            }

            <nav className='container-size   z-40 fixed mx-auto top-0 left-0 right-0 flex justify-between items-center '>
                {/* Left Section - Logo & Navigation */}
                <div className="flex gap-4 space-x-24 items-center">
                    <Link href={'/'}>
                        <Image 
                            className="md:w-37.5 w-34 img saturate-[1]" 
                            src={Batika} 
                            alt="Batika Logo" 
                            width={150}
                            height={50}
                        />
                    </Link>

                    <div className="group xl:flex hidden font-[600]  text-darkk relative top-1.75 gap-4 text-[17px] items-center">
                        {navItems.map((item, index) => (
                            <Link 
                                key={index}
                                href={item.href}
                                className={`group-hover:text-gray relative duration-200 ease-in-out hover:text-orange ${
                                    isActive(item.href) 
                                        ? 'text-gray' 
                                        : 'text-[#0d1c28]/85'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Section - Time & CTA */}
                <div className="xl:flex hidden gap-4 space-x-20 relative top-2.25 items-center">
                    <div className="text-gray timee flex gap-5 font-bold text-[17px]">
                        {formatTime(currentTime)}
                        <p className="font-bold text-[17px] text-[#0d1c28]/85">Casablanca, MA</p>
                    </div>
                    <Link 
                        href={'/contact'} 
                        className={`flex tracking-tight group hover:text-orange duration-300 ease-in-out items-center cursor-pointer gap-2 text-[17px] font-[650] ${
                            isActive('/contact') 
                                ? 'text-gray' 
                                : 'text-[#0d1c28]/85'
                        }`}
                    >
                        <div className={`size-[10.5px] group-hover:-rotate-[140deg] duration-300 ease-in-out rotate-45 gap-[1px] grid grid-rows-2 grid-cols-2 ${
                            isActive('/contact') ? 'group-hover:bg-gray' : ''
                        }`}>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <span 
                                    key={index} 
                                    className={`size-full group-hover:bg-orange duration-200 ease-in-out ${
                                        isActive('/contact') 
                                            ? 'bg-gray group-hover:bg-gray' 
                                            : 'bg-[#0d1c28]/85'
                                    }`}
                                />
                            ))}
                        </div>
                        Construisons Ensemble
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex xl:hidden gap-2 space-x-16 relative top-1.5 md:top-2.25 items-center">
                    <div className="text-gray hidden timee md:flex gap-5 font-bold text-[17px]">
                        {formatTime(currentTime)}
                        <p className="font-bold text-[17px] text-[#0d1c28]/85">Casablanca, MA</p>
                    </div>
                    
                    <button 
                        onClick={toggleMenu}
                        className='hover:text-gray text-[#0d1c28]/85 group flex gap-2 items-center cursor-pointer duration-300 ease-in-out text-[17px] font-[650]'
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {/* Hamburger/X Icon Container */}
                        <div className={`relative flex flex-col items-center justify-center  h-7.5 ${isMenuOpen ? 'w-5.5' : 'w-6'}`}>
                            {/* Top Line */}
                            <span 
                                className={`absolute h-[1.5px] md:h-[1.3px] w-full bg-[#0d1c28]/85 group-hover:bg-gray transition-all duration-200 ease-in-out ${
                                    isMenuOpen 
                                        ? 'top-1/2 -translate-y-1/2 rotate-45 ' 
                                        : 'top-3 rotate-0'
                                }`}
                            />
                            
                            {/* Bottom Line */}
                            <span 
                                className={`absolute h-[1.2px] group-hover:bg-gray w-full bg-[#0d1c28]/85 transition-all duration-200 ease-in-out ${
                                    isMenuOpen 
                                        ? 'top-1/2 -translate-y-1/2 -rotate-45' 
                                        : 'bottom-3 rotate-0'
                                }`}
                            />
                        </div>
                        
                        {/* Menu/Close Text */}
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </nav>
        </>
    );
}

export default NavBar;