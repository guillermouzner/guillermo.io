"use client";

import {useState} from "react";

import {cn} from "@/lib/utils";

interface Props {
  colour: string;
  title: string;
  description?: string;
  bgImage?: string;
  openLink?: string;
  openRepository?: string;
}

export function GridCard({colour, title, description, bgImage, openLink, openRepository}: Props) {
  const [content, setContent] = useState<Boolean>(true);

  function handleClick() {
    if (!openLink && !openRepository) return;

    setContent((content) => !content);
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 h-32 md:h-36 rounded-[48px]  transition-all hover:scale-95 hover:opacity-90 shadow-2xl cursor-pointer text-white",
        colour === "green" && "bg-green-500",
        colour === "indigo" && "bg-indigo-500",
        colour === "teal" && "bg-teal-500",
        colour === "blue" && "bg-blue-500",
        bgImage === "github" &&
          "bg-[url('https://cdn-icons-png.flaticon.com/512/25/25231.png')] bg-contain bg-blend-soft-light",
        bgImage === "linkedin" &&
          "bg-[url('https://cdn-icons-png.flaticon.com/128/739/739270.png')] bg-contain bg-blend-soft-light",
        bgImage === "mail" &&
          "bg-[url('https://img.icons8.com/ios_filled/12x/apple-mail.png')] bg-contain bg-blend-soft-light",
        bgImage === "resume" &&
          "bg-[url('https://cdn-icons-png.flaticon.com/128/3757/3757968.png')] bg-contain bg-blend-soft-light",
        bgImage === "algo" &&
          "bg-[url('https://cdn-icons-png.flaticon.com/128/3222/3222625.png')] bg-contain bg-blend-soft-light",
        bgImage === "react" &&
          "bg-[url('https://cdn-icons-png.flaticon.com/128/149/149799.png')] bg-contain bg-blend-soft-light",
      )}
    >
      <div
        className="flex flex-col h-full justify-center items-start mx-5 md:mx-16 gap-2"
        onClick={handleClick}
      >
        {content ? (
          <div className="flex flex-col">
            <h1 className="text-base md:text-lg font-bold">{`${title}`}</h1>
            {description && <h1 className="text-sm md:font-semibold">{`${description}`}</h1>}
          </div>
        ) : (
          <div className="flex gap-10 font-bold">
            {openLink && (
              <a
                href={openLink}
                rel="noreferrer"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                Open 🔗
              </a>
            )}
            {openRepository && (
              <a
                href={openRepository}
                rel="noreferrer"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                Github ↪
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
