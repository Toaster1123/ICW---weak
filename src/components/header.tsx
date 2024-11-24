'use client';
import { Button } from '@/components/ui/button';

import { useState } from 'react';
import { Search, CircleUserRound, House } from 'lucide-react';
import Link from 'next/link';

const categs = ['Недвижимость', 'Транспорт', 'Одежда', 'Электроника', 'Игрушки'];
export const Header = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <header className="flex items-center justify-between bg-gray-500 py-4 px-20">
      <div className="flex flex-row items-center">
        <Link href={'/'}>
          <House className="text-white" size={28} />
        </Link>
        {categs.map((item, id) => (
          <Button
            onClick={() => {
              setActive(id);
            }}
            className={`ml-4 bg-sky-500 cursor-pointer hover:bg-sky-700 ${
              active == id && 'bg-sky-700'
            }`}
            key={id}
            variant="default">
            {item}
          </Button>
        ))}
      </div>
      <div className="flex items-center">
        <input type="text" className="w-96 h-9 rounded-lg px-3" />
        <Search className="relative right-9" />
        <CircleUserRound height={30} className="text-gray-100 cursor-pointer" />
        <Link href={'/create'}>
          <Button className={'ml-4 bg-blue-600 cursor-pointer hover:bg-blue-700'}>
            Добавить обьявление
          </Button>
        </Link>
      </div>
    </header>
  );
};
