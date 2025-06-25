import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1f1f1f]/60 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© {year} Justin Goh. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
        </div>
      </div>
    </footer>
  );
}
