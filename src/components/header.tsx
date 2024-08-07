import { Button } from "@/common";
import { FontWrapper } from "@/common";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */

type Props = {
  data: {
    logo: string;
    router: {
      name: string;
      link: string;
    }[];
  };
};
export function Header({ data }: Readonly<Props>) {
  return (
    <FontWrapper fontName="poppins">
      <div className="w-full bg-primary">
        <div className="mx-auto flex max-w-content items-center justify-between px-16 py-14">
          <img
            src={data.logo}
            alt="logo"
            className="h-[38px] w-[94px]"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
          <div className="flex gap-8 pl-14 text-[22px] uppercase text-primary">
            {data.router.map((item) => (
              <Link key={item.name} href={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="item flex items-center justify-end gap-8">
            <img
              src="/image/bag.webp"
              alt="bag icon"
              className="h-[32px] w-[32px]"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
            <Button variant="outline" disabled>
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </FontWrapper>
  );
}
