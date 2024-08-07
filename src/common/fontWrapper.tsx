import { Poppins, Rufina, Roboto_Slab } from "next/font/google";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const rufina = Rufina({
  weight: "700",
  subsets: ["latin"],
});
const robotoSlab = Roboto_Slab({
  weight: "500",
  subsets: ["latin"],
});

const fontList = {
  poppins,
  rufina,
  robotoSlab,
};

type Props = {
  children?: React.ReactNode;
  fontName: keyof typeof fontList;
};
export const FontWrapper = ({ children, fontName }: Props) => {
  return <div className={fontList[fontName].className}>{children}</div>;
};
