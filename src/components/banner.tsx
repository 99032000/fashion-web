/* eslint-disable @next/next/no-img-element */
import { Button, DotMatrix } from "@/common";
import { FontWrapper } from "@/common";

type Props = {
  data: {
    title: string;
    subtitle: string;
    image_path: string;
  };
};
export function Banner({ data }: Readonly<Props>) {
  return (
    <div className="w-full bg-primary">
      <div className="mx-auto flex max-w-content justify-between px-16 pb-24 pt-14">
        <div className="flex w-1/2 flex-col gap-8 pr-8 xl:pr-28">
          <FontWrapper fontName="rufina">
            <h1 className="text-6xl leading-snug text-primary xl:text-[86px] xl:leading-[106.21px]">
              {data.title}
            </h1>
          </FontWrapper>
          <FontWrapper fontName="poppins">
            <h2 className="w-[80%] text-xl leading-relaxed text-secondary xl:text-[24px] xl:leading-[52.8px]">
              {data.subtitle}
            </h2>
          </FontWrapper>
          <Button
            variant="primary"
            size="lg"
            className="shadow-[0_33px_59px_0px_rgba(0,0,0,0.3)]"
          >
            EXPLORE NOW
          </Button>
        </div>
        <div className="relative flex h-fit max-h-[717px] w-1/2 max-w-[570px] items-end justify-center rounded-bl-[82px] rounded-br-[150px] rounded-tl-[141px] rounded-tr-[45px] bg-[#6BC785]">
          <img
            src={data.image_path}
            alt="bag icon"
            decoding="async"
            className="max-h-fit"
          />
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
