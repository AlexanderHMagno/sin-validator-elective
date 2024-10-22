import React from 'react';
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';

import Link from 'next/link';
import Image from 'next/image';
import Portfolio from '@/components/Portfolio';

export default async function Header() {
  return (
    <Navbar className=" bg-gradient-to-r from-sky-500 to-indigo-500">
      <NavbarBrand>
        <Link
          href={'/'}
          className="font-bold text-inherit flex flex-col justify-end"
        >
          <Image
            src={'/Elective-Logo.png'}
            alt="Elective Logo"
            width={100}
            height={100}
          />
          <span className="text-xs text-white">Testing site</span>
        </Link>
      </NavbarBrand>
      <NavbarContent className="w-1/4 gap-4" justify="center"></NavbarContent>
      <NavbarContent className="justify-end" justify="end">
        <div className="flex flex-wrap gap-4">
          <Portfolio />
        </div>
      </NavbarContent>
    </Navbar>
  );
}
