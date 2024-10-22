import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, Tooltip } from '@nextui-org/react';

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

      <NavbarContent className="justify-end fw-full" justify="end">
        <Tooltip content={'Request data to this endpoint to validate your SIN'}>
          <Link
            className="text-white font-bold"
            href={'/api/validate/046454286'}
            target="_blank"
          >
            Next Api
          </Link>
        </Tooltip>
        <Tooltip content={'Check the Repo'}>
          <Link
            className="text-white font-bold"
            href={'https://github.com/AlexanderHMagno/sin-validator-elective'}
            target="_blank"
          >
            Documentation
          </Link>
        </Tooltip>
        <div className="flex flex-wrap ">
          <Portfolio />
        </div>
      </NavbarContent>
    </Navbar>
  );
}
