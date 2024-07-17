"use client"
import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import Link from 'next/link';
import MobileDrawer from './MobileDrawer';
import { usePathname } from 'next/navigation'


function Navbar() {

  const pathname = usePathname()

  return (
    <main className="w-full h-[10vmax] bg-nav-color lg:h-[5rem] xl:h-[5rem] 3xl:h-[8vh] lg:px-20 xl:px-44 3xl:px-60 4xl:px-72 text-black py-2 pb-2 flex-col-center-between">
      <nav className='w-full h-20 flex-row-center-between lg:hidden px-5'>
        <Link href={'/'} className='w-[55%] h-full relative'>
          <Image fill={true} src={logo} alt="app logo" className='object-contain h-full w-full' />
        </Link>
        <div className='w-max h-full flex-row-center-center gap-5'>
          <div className='h-full flex-row-center-center'>
            <MobileDrawer />
          </div>
        </div>
      </nav>
      <nav className='w-full hidden lg:flex-row-center-between'>
        <Link href={'/'} className='w-[13rem] h-10 3xl:h-16 relative'>
          <Image fill={true} src={logo} alt="app logo" className='object-contain h-full w-max' />
        </Link>
        <section>
          <ul className="flex justify-between items-center text-xs xl:text-sm 3xl:text-base">
            {
              !(pathname === '/how-it-works') && <Link href={"/how-it-works"} className="mx-4 cursor-pointer h-7 3xl:h-10 px-5 flex-row-center-center bgcolor-primary rounded-md text-white">How It works</Link>
            }
          </ul>
        </section>
      </nav>
    </main>
  )
}

export default Navbar