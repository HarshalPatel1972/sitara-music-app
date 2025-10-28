// src/components/Sidebar.jsx
import React from "react";
import {
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineHashtag,
} from "react-icons/hi";

// The import for NavLink has been removed, as we are not using it yet.

const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];

const NavLinks = () => (
  <div className="mt-12 space-y-2">
    {links.map((item) => (
      <a
        key={item.name}
        href={item.to}
        className="flex flex-row justify-start items-center p-3 text-sm font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 group"
      >
        <item.icon className="w-5 h-5 mr-4 group-hover:text-primary transition-colors" />
        {item.name}
      </a>
    ))}
  </div>
);

const Sidebar = () => (
  <div className="md:flex hidden flex-col w-[260px] py-10 px-6 bg-background/50 backdrop-blur-xl border-r border-white/5">
    <h1 className="text-white text-4xl font-black tracking-tighter text-center text-glow italic">Sitara</h1>
    <NavLinks />
  </div>
);


export default Sidebar;
