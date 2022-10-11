import {
  FiHome,
  FiClock,
  FiPaperclip,
  FiHeadphones,
  FiUser,
  FiBookOpen,
  FiSun,
  // FiMoon,
  FiCommand,
} from "react-icons/fi";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useKBar } from "kbar";

const NavbarItems = [
  {
    name: "Home",
    slug: "/",
    icon: FiHome,
  },
  {
    name: "About",
    slug: "/about",
    icon: FiUser,
  },
  {
    name: "Now",
    slug: "/now",
    icon: FiClock,
  },
  {
    name: "Links",
    slug: "/links",
    icon: FiPaperclip,
  },
  // {
  //   name: "About",
  //   slug: "/about",
  //   icon: FiKey,
  // },
  {
    name: "Guestbook",
    slug: "/guestbook",
    icon: FiBookOpen,
  },
  {
    name: "Spotify",
    slug: "/spotify",
    icon: FiHeadphones,
  },
];

export default function NavBar({ path }: { path: string }) {
  const router = useRouter();
  const { query } = useKBar();
  const [tooltipVisibility, setTooltipVisibility] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <div className="w-full min-h-full h-full flex flex-col justify-start items-center pt-6">
      <div className="flex flex-col gap-4">
        {NavbarItems.map((item, index) => {
          return (
            <>
              {path === item.slug ? (
                <button
                  key={index}
                  className="w-full flex justify-center items-center bg-zinc-700 hover:bg-zinc-700 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out focus:bg-zinc-700 relative"
                  onMouseLeave={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = false;
                    setTooltipVisibility(temp);
                  }}
                  onMouseEnter={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = true;
                    setTooltipVisibility(temp);
                  }}
                  onClick={() => router.push(item.slug)}
                >
                  <div className="p-2">
                    <item.icon size="1rem" className="text-zinc-100" />
                  </div>
                  {tooltipVisibility[index] && (
                    <span className="absolute min-w-full text-[0.75rem] leading-none left-10 p-[0.62rem] rounded shadow-xl text-zinc-200 bg-zinc-700">
                      {item.name}
                    </span>
                  )}
                </button>
              ) : (
                <button
                  key={index}
                  className="w-full flex justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out focus:bg-zinc-700 relative"
                  onMouseLeave={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = false;
                    setTooltipVisibility(temp);
                  }}
                  onMouseEnter={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = true;
                    setTooltipVisibility(temp);
                  }}
                  onClick={() => router.push(item.slug)}
                >
                  <div className="p-2">
                    <item.icon size="1rem" className="text-zinc-100" />
                  </div>
                  {tooltipVisibility[index] && (
                    <span className="absolute text-[0.75rem] leading-none left-10 p-[0.62rem] rounded shadow-xl text-zinc-200 bg-zinc-700">
                      {item.name}
                    </span>
                  )}
                </button>
              )}
            </>
          );
        })}
        <div className="flex flex-col gap-4">
          <button
            className="w-full flex justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out"
            //   onClick={() => router.push(item.slug)}
          >
            <div className="p-2">
              <FiSun size="1rem" className="text-zinc-100" />
            </div>
          </button>
          <button
            className="w-full flex justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out"
            //   onClick={() => router.push(item.slug)}
            onClick={query.toggle}
          >
            <div className="p-2">
              <FiCommand size="1rem" className="text-zinc-100" />
            </div>
          </button>
        </div>
      </div>
      <div className="border-r-2 border-zinc-800 h-full mt-4"></div>
    </div>
  );
}
