import { useState } from "react";
import Image from "next/image";

import img2 from "./../../public/heart.svg";
import img1 from "./../../public/nohearth.png";

import stop from "./../../public/pause.png";
import play from "./../../public/play.png";

import prox from "./../../public/prox.svg";
import back from "./../../public/back.svg";
import randoom from "./../../public/randoom.svg";
import infinity from "./../../public/infinity.svg";

import mic from "./../../public/mic.png";
import maxmize from "./../../public/maxmize.png";
import vol from "./../../public/vol.png";
import pc from "./../../public/pc.png";
import queue from "./../../public/queue.png";
import RectangleThree from "./../../public/RectangleThree.png";

export function BottomBar() {
  const [imagem, setImagem] = useState(img1);
  const [music, setMusic] = useState(play);

  function ToggleImage() {
    imagem === img1 ? setImagem(img2) : setImagem(img1);
  }
  function ToggleMusic() {
    music === stop ? setMusic(play) : setMusic(stop);
  }

  return (
    <footer className="bg-zinc-800 border-zinc-700 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={RectangleThree} alt="play now" />
        <div className="flex flex-col">
          <strong>Grade A (feat. JAWNY)</strong>
          <span className="text-zinc-400 text-sm">Spill tab, JAWNY</span>
        </div>
        <button onClick={() => ToggleImage()}>
          <Image src={imagem} alt="favorite" />
        </button>
      </div>
      <div className="flex items-center flex-col">
        <div className="flex items-center gap-3">
          <button>
            <Image src={infinity} alt="" />
          </button>
          <button>
            <Image src={prox} alt="" />
          </button>
          <button onClick={() => ToggleMusic()}>
            <Image className="w-14 h-14" src={music} alt="" />
          </button>
          <button>
            <Image src={back} alt="" />
          </button>
          <button>
            <Image src={randoom} alt="" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">0:32</span>
          <div className="rounded-full h-1 w-80 bg-slate-600">
            <div className="rounded-full h-1 w-32 bg-white"></div>
          </div>
          <span className="text-xs text-zinc-500">1:46</span>
        </div>
      </div>
      <div className="flex gap-2">
        <button>
          <Image height={24} width={24} src={mic} alt="" />
        </button>
        <button>
          <Image height={24} width={24} src={queue} alt="" />
        </button>
        <button>
          <Image height={24} width={24} src={pc} alt="" />
        </button>
        <div className="flex items-center ">
          <Image height={24} width={24} src={vol} alt="" />
          <div className="rounded-full h-1 w-28 bg-slate-600">
            <div className="rounded-full h-1 w-20 bg-white"></div>
          </div>
        </div>
        <button>
          <Image height={24} width={24} src={maxmize} alt="" />
        </button>
      </div>
    </footer>
  );
}
