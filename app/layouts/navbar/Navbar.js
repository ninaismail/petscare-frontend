'use client'

import Image from "next/image";
import Link from "next/link"
import NavItem from "./NavItem";
import { useEffect, useState } from "react";
import Phone from "../../components/icons/Phone";

const Navbar = () => {
    const [active, setActive] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState(false);

    const navLinks = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About Us', link: '#aboutus' },
        { id: 3, name: 'Services', link: '#services' },
        { id: 4, name: 'Plans', link: '#plans' },
        { id: 4, name: 'Calendar', link: '#calendar' },
        { id: 4, name: 'Blogs', link: '#blogs' },
    ]

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }


    const changeColor = () => {
        console.log("Scroll position:", window.pageYOffset); // Logs scroll position
        if (window.pageYOffset > 0) {
          console.log("Setting color to true");
          setColor(true);
        } else {
          console.log("Setting color to false");
          setColor(false);
        }
      };
    
      useEffect(() => {
        // Add event listener for scroll
        window.addEventListener("scroll", changeColor);
    
        // Clean up event listener on unmount
        return () => {
          window.removeEventListener("scroll", changeColor);
        };
      }, []);
    
    return (
        <header className={`fixed left-1/2 transform -translate-x-1/2 top-0 h-[67px] z-[9] sm:w-10/12 w-11/12 lg:flex justify-between items-center mx-auto pt-4 mt-10 tansition-height duration-600 ${
            color === true ? "bg-white shadow border-none pb-0" : "pb-12 border-b border-secondary"}
            ${isOpen ? "h-fit rounded-[18px] bg-white shadow" : ""}`}>
            <Link id="Home" aria-label="go to home" href="/">
            <Image
                src="/logo.webp"
                alt="Pet Pup"
                width={156}
                height={58}
                priority
                responsive
                className="max-lg:ps-4"
                />
            </Link>
            {/* Desktop */}
            <ul className="items-center justify-center hidden w-8/12 h-full 2xl:gap-10 lg:gap-6 lg:flex">
                {Array.isArray(navLinks) &&
                    navLinks.map((item, index) => (
                    <li key={index}
                        onClick={() => {
                            setActive(true);
                        }}>
                        <NavItem text={item.name} link={item.link} active={active}/>
                    </li>
                ))}
            </ul> 
            <div className="lg:flex justify-end w-2/12 hidden">
            <Link id="call-us" aria-label="call us" href="tel:+96171043224" prefetch={false} scroll={false} className="flex gap-2 cursor-pointer font-[montserrat] text-center text-primary hover:brightness-125 transition-all duration-400">
                <span><Phone styles="w-5 aspect-square"/></span>
                +0123 456 789</Link>
            </div>
            {/* Mobile */}
            <button aria-label="open menu" class="absolute flex items-center justify-center w-8 h-8 right-4 lg:hidden top-5"
                onClick={toggleOpen}>
                {isOpen ? (
                    <h1 class="text-2xl text-secondary">X</h1>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" fill="#2F3784" viewBox="0 0 50 50">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
                    </svg>
               )}
            </button>
            {isOpen ? (<ul className="w-full p-4 space-y-3 lg:hidden">
                {Array.isArray(navLinks) &&
                    navLinks.map((item, index) => (
                        <li key={index}
                            onClick={() => {
                                setActive(true);
                            }}>
                            <NavItem text={item.name} link={item.link} active={active} />
                        </li>
                    ))}
                <li>
                    <Link id="call-us" aria-label="call us" href="tel:+96171043224" prefetch={false} scroll={false} className="flex gap-2 cursor-pointer font-[montserrat] text-center text-primary hover:brightness-125 transition-all duration-400">
                        <span><Phone styles="w-5 aspect-square" /></span>
                        +0123 456 789</Link>
                </li>
            </ul>) : "" }
        </header>
    );
}

export default Navbar;
