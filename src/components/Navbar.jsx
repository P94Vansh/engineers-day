  'use client'
  import React from 'react'
  import Link from 'next/link';
  import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
  } from "@/components/ui/resizable-navbar";
  import { useState } from "react";

  function NavbarComp({id}) {
    console.log(id)
    const navItems=[
      {
        name:"Technical Events",
        link:"/technical-events"
      },
      {
        name:"Non-Technical Events",
        link:"/non-technical-events"
      }
    ]
    const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false)
    return (
      <div className='relative w-full'>
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center justify-center gap-4">
              <NavbarButton variant="primary" onClick={() => {
            document.getElementById(id).scrollIntoView({
              behavior: "smooth",
            });
          }}>Contact Us</NavbarButton>
            </div>
          </NavBody>
  
          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>
  
            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => {setIsMobileMenuOpen(false) 
                  document.getElementById(id).scrollIntoView({
                  behavior: "smooth"
                })}}
                  variant="primary"
                  className="w-full"
                >
                Contact Us
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    )
  }

  export default NavbarComp
