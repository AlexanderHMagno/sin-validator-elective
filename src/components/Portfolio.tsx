import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Avatar,
  Divider,
} from '@nextui-org/react';
import Link from 'next/link';

const linkedin =
  'https://media.licdn.com/dms/image/v2/C5603AQE384F7nWOfBg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1617839560532?e=1735171200&v=beta&t=7ZYgqkATiB6VwFHE4V7V2BHad-5qjkv4-H2KgPKeljk';

const Portfolio = () => {
  const list: { [key: string]: string } = {
    LinkedIn: 'https://www.linkedin.com/in/alexanderhortua/',
    Github: 'https://github.com/AlexanderHMagno',
    Tentipsonline: 'https://www.10tipsonline.com/',
  };
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Avatar src={linkedin} className="cursor-pointer" />
      </PopoverTrigger>

      <PopoverContent>
        <div className="p-2">
          <h1 className={'font-bold'}>Alexander Hortua</h1>

          <Divider className="my-4" />
          <div className="flex flex-col">
            {Object.keys(list).map((entry: string) => {
              return (
                <Link
                  className="my-2 font-extralight"
                  key={entry}
                  href={list[entry]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {entry}
                </Link>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Portfolio;
