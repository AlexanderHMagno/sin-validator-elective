import React from 'react';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  Tooltip,
} from '@nextui-org/react';

import Link from 'next/link';
import Image from 'next/image';
import Portfolio from '@/components/Portfolio';
import ApiDropDown from '@/components/header/apidropdown';

export default async function Header() {
  return (
    <Navbar className=" bg-gradient-to-r from-sky-500 to-indigo-500">
      <NavbarBrand>
        <Tooltip
          content={
            'This code test is independent and has no affiliation with Elective.'
          }
        >
          <Link
            href={'https://elective.recruitee.com/o/software-engineer'}
            target="_blank"
            className="font-bold text-inherit flex flex-col justify-end"
          >
            <Image
              src={'/Elective-Logo.png'}
              alt="Elective Logo"
              width={100}
              height={100}
            />
          </Link>
        </Tooltip>
      </NavbarBrand>

      <NavbarContent className="justify-end fw-full" justify="end">
        <ApiDropDown />
        <Button variant="light">
          <Link
            className="text-white font-bold text-sm"
            href={'https://github.com/AlexanderHMagno/sin-validator-elective'}
            target="_blank"
          >
            Documentation
          </Link>
        </Button>

        <div className="flex flex-wrap ">
          <Portfolio />
        </div>
      </NavbarContent>
    </Navbar>
  );
}
