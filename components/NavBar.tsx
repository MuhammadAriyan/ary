'use client';

import Dock from '@/components/Dock';
import { Blocks, BookCopy, Cable, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const NavBar: FC = () => {
  const router = useRouter();
  const iconClass = 'text-gray-700 hover:text-blue-500 transition-colors';

  const items = [
    {
      icon: <Home size={20} className={iconClass} />,
      label: 'Home',
      onClick: () => router.push('/'),
    },
    {
      icon: <BookCopy size={20} className={iconClass} />,
      label: 'About',
      onClick: () => router.push('#about'),
    },
    {
      icon: <Blocks size={20} className={iconClass} />,
      label: 'Projects',
      onClick: () => router.push('#projects'),
    },
    {
      icon: <Cable size={20} className={iconClass} />,
      label: 'Connect',
      onClick: () => router.push('#connect'),
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Dock
        items={items}
        panelHeight={60}
        baseItemSize={44}
        magnification={65}
        className="bg-white/80 backdrop-blur-md border border-gray-300 rounded-2xl shadow-lg px-4 py-2 transition-all"
      />
    </div>
  );
};

export default NavBar;
