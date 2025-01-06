'use client';

import Image from 'next/image';
import React from 'react';

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="h-screen flex">
      <div className="flex-1 flex justify-center items-center">{children}</div>
      <div className="flex-1 relative">
        <Image
          alt="liquid art"
          src="/images/liquid-art.jpg"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          draggable={false}
          priority
        />
      </div>
    </div>
  );
};

export default Layout;
