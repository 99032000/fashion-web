import { Button, DotMatrix, FontWrapper } from "@/common";
import { formatNumber } from "@/lib/utils";

/* eslint-disable @next/next/no-img-element */
type Props = {
  data: {
    title: string;
    subtitle: string;
    image_path: string;
    end_time: {
      day: number;
      hours: number;
      mins: number;
    };
  };
};
const timeView = (num: number, text: string) => (
  <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-[3px] bg-white text-center text-primary">
    <h3 className="text-[32px] font-semibold leading-[48px]">
      {formatNumber(num)}
    </h3>
    <h3 className="text-[16px] leading-[24px]">{text}</h3>
  </div>
);

export function ExclusiveOffer({ data }: Readonly<Props>) {
  return (
    <div className="mx-auto mt-32 max-w-content bg-primary px-16 pt-4">
      <FontWrapper fontName="poppins">
        <div className="flex max-h-[596px] justify-center gap-8">
          <div className="flex-1">
            <div className="relative mx-auto h-full w-fit">
              <img
                src={data.image_path}
                alt="icon"
                decoding="async"
                className="relative z-50 h-full"
              />
              <div className="absolute bottom-16 left-7 z-0 h-[131px] w-[190px] bg-[#DFFBEA80]"></div>
              <div className="absolute -left-8 bottom-8 h-[110px] w-[110px] overflow-hidden">
                <DotMatrix />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-y-8 text-primary">
            <FontWrapper fontName="robotoSlab">
              <h1 className="text-[46px] font-bold">{data.title}</h1>
            </FontWrapper>

            <h2 className="text-[22px] font-medium leading-9">
              {data.subtitle}
            </h2>

            <div className="item flex gap-8">
              {timeView(data.end_time.day, "Days")}
              {timeView(data.end_time.hours, "Hours")}
              {timeView(data.end_time.mins, "Min")}
            </div>

            <Button variant="primary" size="lg" disabled>
              Buy Now
            </Button>
          </div>
        </div>
      </FontWrapper>
    </div>
  );
}
