'use client'
import React from 'react';
import { PiArrowDownRightBold } from "react-icons/pi";
import { VscArrowUp } from "react-icons/vsc";
import { Media, Navigation } from '@/data/Data';
import Link from 'next/link';

const ContactInfo = () => (
    <div className="flex flex-col gap-2">
      <p className="flex w-fit hover:text-gray duration-200 ease-in-out cursor-pointer gap-1.5 text-[17px] font-semibold font-montreal items-center">
        <PiArrowDownRightBold className="opacity-95" size={18} />
        Contact
      </p>
      <div className="flex w-fit leading-[1.2] text-[21px] font-medium tracking-[-.2px] font-montreal flex-col gap-px">
        <Link 
          target="_blank" 
          href="mailto:contact@gmail.com" 
          className="hover:underline duration-200 ease-in-out"
        >
          contact@batika.ma
        </Link>
        <Link 
          target="_blank" 
          href="tel:+212522213683" 
          className="hover:underline duration-200 ease-in-out"
        >
          +212 5 2221 3683
        </Link>
      </div>
      </div>
  );
  
  const NavigationSection = () => (
    <div className="flex flex-col gap-3">
      <p className="text-[16px] w-fit hover:text-gray duration-200 ease-in-out cursor-pointer">
        Navigation
      </p>
      <div className="flex flex-col  leading-[1.15] text-[27px] font-semibold">
        {Navigation.map(({ label, href }, index) => (
          <Link 
            key={index}
            href={href}
            className="hover:text-orange group flex items-center gap-1.5 w-fit duration-200 ease-in-out cursor-pointer"
          >
            {label}
            <VscArrowUp className="rotate-45 opacity-0 group-hover:opacity-100 relative top-px duration-200 ease-in-out scale-85" />
          </Link>
        ))}
      </div>
      </div>
  );
  
  const ConnectSection = () => (
    <div className="flex flex-col gap-3">
      <p className="text-[16px] hover:text-gray duration-200 ease-in-out cursor-pointer w-fit">
        Connect
      </p>
      <div className="flex flex-col leading-[1.15] text-[27px] font-semibold">
        {Media.map(({ label, href }, index) => (
          <Link 
            key={index}
            href={href}
            className="flex hover:text-orange duration-200 ease-in-out group w-fit gap-1.5 items-center"
          >
            {label}
            <VscArrowUp className="rotate-45 relative top-[2px] duration-200 ease-in-out scale-85" />
          </Link>
        ))}
      </div>
      </div>
  );
  
  const FooterBottom = ({ currentYear }) => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    
    return (
      <div className="container-size snap-end flex flex-col md:grid lg:grid-cols-2 gap-5 xs:gap-9">
        <p className="text-[16px]">
          © {currentYear} &nbsp;
          <span className="font-semibold inline-flex">BATIKA</span> — 
          Entreprise Générale de Bâtiment
        </p>

        <div className="grid gap-2 xs:gap-6 sm:grid-cols-2 w-full">
          <div className="flex cursor-pointer font-semibold gap-3">
            <p className="hover:text-gray">Privacy Policy,</p>
            <p 
              onClick={scrollToTop}   
              className="font-semibold text-gray cursor-pointer hover:text-darkk"
            >
              Back to top
            </p>
          </div>
          <div className="flex w-full lg:justify-end gap-2 text-[16px]">
            <p className="text-[16px]">
              Website by <Link target='_blank' href={'https://mounir-lagzoulii.vercel.app/'} className="font-semibold underline">ML</Link>
            </p>
          </div>
        </div>
      </div>
      );
  };
  
  const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
    <footer className="min-h-157.5 h-auto flex flex-col lg:gap-0 gap-10 justify-between pb-2 pt-10 bg-[#fefefe] w-full">
      <div className="container-size grid lg:grid-cols-2 gap-10 lg:gap-8">
        {/* Left Column - Contact & Mission */}
        <div className="flex w-full flex-col gap-11">
          <h1 className="text-[22px] font-semibold leading-[1.1] max-w-[320px]">
            Nous concevons et réalisons des projets solides, durables et maîtrisés, 
            de l'étude à la livraison.
          </h1>
          <ContactInfo />
        </div>

        {/* Right Column - Navigation & Connect */}
        <div className="w-full grid sm:gap-0 gap-9 sm:grid-cols-2">
          <NavigationSection />
          <ConnectSection />
        </div>
      </div>

      <FooterBottom currentYear={currentYear} />
    </footer>
  );
};

export default Footer;