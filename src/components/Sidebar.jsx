import React, { useState } from "react";
import { HiOutlineHome, HiOutlineUserGroup, HiOutlineHashtag, HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-12 space-y-2">
    {links.map((item) => (
      <a
        key={item.name}
        href={item.to}
        onClick={() => handleClick && handleClick()}
        className={`flex flex-row justify-start items-center p-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ease-out hover:translate-x-2 group ${
          item.name === 'Discover' ? 'text-white border-l-2 border-primary bg-white/5' : 'text-slate-500'
        } hover:text-white hover:bg-white/5 rounded-r-xl`}
      >

        <item.icon className="w-5 h-5 mr-4 group-hover:text-primary transition-colors" />
        {item.name}
      </a>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[260px] py-10 px-6 bg-background/50 backdrop-blur-xl border-r border-white/5 h-full">
        <h1 className="text-white text-4xl font-black tracking-tighter text-center text-glow italic mb-10">Sitara</h1>
        <NavLinks />
        
        <div className="mt-20">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 mb-6">Featured</h3>
          <div className="space-y-4">
            {['Late Night Melodies', 'Golden Era', 'Indie Waves', 'Acoustic Soul'].map((playlist) => (
              <p key={playlist} className="text-[11px] font-black text-slate-500 hover:text-primary transition-colors cursor-pointer truncate">
                {playlist}
              </p>
            ))}
          </div>
        </div>
      </div>


      <div className="absolute md:hidden block top-6 right-3 z-50">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-8 h-8 text-white mr-2 cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
        ) : (
          <HiOutlineMenu className="w-8 h-8 text-white mr-2 cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-background/95 backdrop-blur-2xl z-40 p-6 md:hidden transition-all duration-500 ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <h1 className="text-white text-3xl font-black tracking-tighter text-glow italic">Sitara</h1>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
