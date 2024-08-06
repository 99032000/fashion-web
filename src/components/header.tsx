import { Button } from "@/common";
import { PoppinsFontWrapper } from "@/font";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
const router = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "shop",
    link: "/",
  },
  {
    name: "features",
    link: "/",
  },
  {
    name: "contact",
    link: "/",
  },
];
const menuBar = () => {
  return router.map((item) => (
    <Link key={item.name} href={item.link}>
      {item.name}
    </Link>
  ));
};

export default function Header() {
  return (
    <PoppinsFontWrapper>
      <div className="w-full bg-primary">
        <div className="mx-auto flex max-w-content items-center justify-between px-8 py-14">
          <img
            src="/image/logo.webp"
            alt="logo"
            className="h-[38px] w-[94px]"
            decoding="async"
          />
          <div className="flex gap-8 pl-14 text-[22px] uppercase text-primary">
            {menuBar()}
          </div>
          <div className="item flex items-center justify-end gap-8">
            <img
              src="/image/bag.webp"
              alt="bag icon"
              className="h-[32px] w-[32px]"
              decoding="async"
            />
            <Button variant="outline">LOGIN</Button>
          </div>
        </div>
      </div>
    </PoppinsFontWrapper>
  );
}
