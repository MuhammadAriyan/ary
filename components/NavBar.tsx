'use client';

import Dock from '@/components/Dock';
import { Blocks, BookCopy, Cable, Home } from 'lucide-react';

const NavBar = () => {
  const iconClass = "text-black";

  const items = [
    { icon: <Home size={20} className={iconClass} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <BookCopy size={20} className={iconClass} />, label: 'About', onClick: () => alert('Profile!') },
    { icon: <Blocks size={20} className={iconClass} />, label: 'Projects', onClick: () => alert('Archive!') },
    { icon: <Cable size={20} className={iconClass} />, label: 'Connect', onClick: () => alert('Settings!') },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <Dock
      items={items}
      panelHeight={60}
      baseItemSize={42}
      magnification={65}
      className="bg-white/95 border border-blue-200 rounded-2xl shadow-lg px-4 py-2"
      />
    </div>
  );
};

export default NavBar;
