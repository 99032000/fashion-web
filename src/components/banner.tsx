/* eslint-disable @next/next/no-img-element */
import { Button } from "@/common";
import { PoppinsFontWrapper, RufinaFontWrapper } from "@/font";
import DotMatrix from "./dot-matrix";

export default function Banner() {
  return (
    <div className="w-full bg-primary">
      <div className="mx-auto flex max-w-content items-center justify-between gap-16 px-8 pb-24 pt-14">
        <div className="flex w-1/2 flex-col gap-8">
          <RufinaFontWrapper>
            <h1 className="text-[86px] leading-[106.21px] text-primary">
              Discover and Find Your Own Fashion!
            </h1>
          </RufinaFontWrapper>
          <PoppinsFontWrapper>
            <h2 className="w-[80%] text-2xl leading-[52.8px] text-secondary">
              Explore our curated collection of stylish clothing and accessories
              tailored to your unique taste.
            </h2>
          </PoppinsFontWrapper>
          <Button variant="primary" size="lg">
            EXPLORE NOW
          </Button>
        </div>
        <div className="relative block w-1/2 rounded-bl-[82px] rounded-br-[150px] rounded-tl-[141px] rounded-tr-[45px] bg-[#6BC785]">
          <img src="/image/banner.webp" alt="bag icon" decoding="async" />
          <div className="absolute right-2 top-[20%] h-[119px] w-[110px]">
            <DotMatrix />
          </div>
          <div className="absolute bottom-[10%] left-6 h-[119px] w-[110px]">
            <DotMatrix />
          </div>
        </div>
      </div>
    </div>
  );
}
