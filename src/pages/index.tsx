import Image from "next/image";

import { SideBar } from "@/components/SideBar";
import { BottomBar } from "@/components/BottomBar";
import { MainBar } from "@/components/MainBar";

export default function Home() {
  return (
    <>
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <MainBar />
      </div>
      <BottomBar />
    </div>
    </>
  );
}
