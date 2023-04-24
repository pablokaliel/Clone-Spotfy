import Image from "next/image";

import arrowright from "./../../public/arrow-right.svg";
import arrowleft from "./../../public/arrow-left.svg";

import music from "./../../public/RectangleOne.png";
import RectangleTwo from "./../../public/RectangleTwo.png";

export function MainBar() {
  return (
    <main className="flex-1 p-6 relative">
      <div className="flex gap-6 fixed">
        <button className="p-1.5 hover:bg-black/20 rounded-full bg-black/40 flex items-center justify-center">
          <Image src={arrowleft} alt="icon avançar" />
        </button>
        <button className="p-1.5 hover:bg-black/20 rounded-full bg-black/40 flex items-center justify-center">
          <Image src={arrowright} alt="icon voltar" />
        </button>
      </div>
      <h1 className="font-bold text-3xl mt-12">Good afternoon</h1>
      <div className="grid  grid-cols-3 gap-4 mt-4">
        <a
          href=""
          className="bg-white/10 hover:bg-white/20 transition-all group rounded flex items-center gap-4 hover:scale-105"
        >
          <Image src={music} alt="image playlist" />
          <strong>Neffex Playlist</strong>
          <button className="w-12 h-12 bg-green-500 group-hover:visible rounded-full flex items-center justify-center ml-auto mr-7 invisible">
            <Image src={arrowright} alt="play" />
          </button>
        </a>
        <a
          href=""
          className="bg-white/10 hover:bg-white/20 transition-all group rounded flex items-center gap-4 hover:scale-105"
        >
          <Image src={music} alt="image playlist" />
          <strong>Neffex Playlist</strong>
          <button className="w-12 h-12 bg-green-500 group-hover:visible rounded-full flex items-center justify-center ml-auto mr-7 invisible">
            <Image src={arrowright} alt="play" />
          </button>
        </a>
        <a
          href=""
          className="bg-white/10 hover:bg-white/20 transition-all group rounded flex items-center gap-4 hover:scale-105"
        >
          <Image src={music} alt="image playlist" />
          <strong>Neffex Playlist</strong>
          <button className="w-12 h-12 bg-green-500 group-hover:visible rounded-full flex items-center justify-center ml-auto mr-7 invisible">
            <Image src={arrowright} alt="play" />
          </button>
        </a>
        <a
          href=""
          className="bg-white/10 hover:bg-white/20 transition-all group rounded flex items-center gap-4 hover:scale-105"
        >
          <Image src={music} alt="image playlist" />
          <strong>Neffex Playlist</strong>
          <button className="w-12 h-12 bg-green-500 group-hover:visible rounded-full flex items-center justify-center ml-auto mr-7 invisible">
            <Image src={arrowright} alt="play" />
          </button>
        </a>
        <a
          href=""
          className="bg-white/10 hover:bg-white/20 transition-all group rounded flex items-center gap-4 hover:scale-105"
        >
          <Image src={music} alt="image playlist" />
          <strong>Neffex Playlist</strong>
          <button className="w-12 h-12 bg-green-500 group-hover:visible rounded-full flex items-center justify-center ml-auto mr-7 invisible">
            <Image src={arrowright} alt="play" />
          </button>
        </a>
        <a
          href=""
          className="bg-white/10 hover:bg-white/20 transition-all group rounded flex items-center gap-4 hover:scale-105"
        >
          <Image src={music} alt="image playlist" />
          <strong>Neffex Playlist</strong>
          <button className="w-12 h-12 bg-green-500 group-hover:visible rounded-full flex items-center justify-center ml-auto mr-7 invisible">
            <Image src={arrowright} alt="play" />
          </button>
        </a>
        <h1 className="font-bold text-3xl mt-4">Made For Schell Fernandes</h1>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-4">
        <a
          href=""
          className="bg-white/5 p-2 rounded hover:bg-white/10 relative flex flex-col group gap-2 hover:scale-105 transition"
        >
          <button className="w-12 h-12 bg-green-500 absolute group-hover:visible rounded-full flex items-center justify-center right-3 top-36 invisible">
            <Image src={arrowright} alt="play" />
          </button>
          <Image src={RectangleTwo} alt="album" />
          <strong>Daily Mix #1</strong>
          <h4 className="text-sm text-zinc-500">
            Wallows, COIN, girl in red and more
          </h4>
        </a>
        <a
          href=""
          className="bg-white/5 p-2 rounded hover:bg-white/10 relative flex flex-col group gap-2 hover:scale-105 transition"
        >
          <button className="w-12 h-12 bg-green-500 absolute group-hover:visible rounded-full flex items-center justify-center right-3 top-36 invisible">
            <Image src={arrowright} alt="play" />
          </button>
          <Image src={RectangleTwo} alt="album" />
          <strong>Daily Mix #1</strong>
          <h4 className="text-sm text-zinc-500">
            Wallows, COIN, girl in red and more
          </h4>
        </a>
        <a
          href=""
          className="bg-white/5 p-2 rounded hover:bg-white/10 relative flex flex-col group gap-2 hover:scale-105 transition"
        >
          <button className="w-12 h-12 bg-green-500 absolute group-hover:visible rounded-full flex items-center justify-center right-3 top-36 invisible">
            <Image src={arrowright} alt="play" />
          </button>
          <Image src={RectangleTwo} alt="album" />
          <strong>Daily Mix #1</strong>
          <h4 className="text-sm text-zinc-500">
            Wallows, COIN, girl in red and more
          </h4>
        </a>
        <a
          href=""
          className="bg-white/5 p-2 rounded hover:bg-white/10 relative flex flex-col group gap-2 hover:scale-105 transition"
        >
          <button className="w-12 h-12 bg-green-500 absolute group-hover:visible rounded-full flex items-center justify-center right-3 top-36 invisible">
            <Image src={arrowright} alt="play" />
          </button>
          <Image src={RectangleTwo} alt="album" />
          <strong>Daily Mix #1</strong>
          <h4 className="text-sm text-zinc-500">
            Wallows, COIN, girl in red and more
          </h4>
        </a>
        <a
          href=""
          className="bg-white/5 p-2 rounded hover:bg-white/10 relative flex flex-col group gap-2 hover:scale-105 transition"
        >
          <button className="w-12 h-12 bg-green-500 absolute group-hover:visible rounded-full flex items-center justify-center right-3 top-36 invisible">
            <Image src={arrowright} alt="play" />
          </button>
          <Image src={RectangleTwo} alt="album" />
          <strong>Daily Mix #1</strong>
          <h4 className="text-sm text-zinc-500">
            Wallows, COIN, girl in red and more
          </h4>
        </a>
        <a
          href=""
          className="bg-white/5 p-2 rounded hover:bg-white/10 relative flex flex-col group gap-2 hover:scale-105 transition"
        >
          <button className="w-12 h-12 bg-green-500 absolute group-hover:visible rounded-full flex items-center justify-center right-3 top-36 invisible">
            <Image src={arrowright} alt="play" />
          </button>
          <Image src={RectangleTwo} alt="album" />
          <strong>Daily Mix #1</strong>
          <h4 className="text-sm text-zinc-500">
            Wallows, COIN, girl in red and more
          </h4>
        </a>
      </div>
    </main>
  );
}
