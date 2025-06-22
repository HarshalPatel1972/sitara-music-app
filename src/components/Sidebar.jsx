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
  <div className="mt-10">
    {links.map((item) => (
      <a
        key={item.name}
        href={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-text-secondary hover:text-accent"
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </a>
    ))}
  </div>
);

const Sidebar = () => (
  <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-primary">
    <h1 className="text-white text-3xl font-bold text-center">Sitara</h1>
    <NavLinks />
  </div>
);

export default Sidebar;
