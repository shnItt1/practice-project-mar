"use client";
import Link from "next/link";
import React from "react";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";
const icons = [
  { path: "/", name: <RiYoutubeFill /> },
  { path: "/", name: <RiLinkedinFill /> },
  { path: "/", name: <RiGithubFill /> },
  { path: "/", name: <RiFacebookFill /> },
  { path: "/", name: <RiInstagramFill /> },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link key={index} href={icon.path}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
