'use client';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

export default function ApiDropDown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" className="text-white font-bold">
          API
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="next" href="/api/validate/046454286" target="_blank">
          Next API
        </DropdownItem>
        <DropdownItem
          key="express"
          href={'https://github.com/AlexanderHMagno/sin-validator-express'}
          target="_blank"
        >
          Express API
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
