import { Poppins, Rufina, Roboto_Slab } from "next/font/google";
type Props = {
  children?: React.ReactNode;
};
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
export function PoppinsFontWrapper({ children }: Readonly<Props>) {
  return <div className={poppins.className}>{children}</div>;
}

export function RufinaFontWrapper({ children }: Readonly<Props>) {
  return <div className={rufina.className}>{children}</div>;
}
export function RobotoSlabFontWrapper({ children }: Readonly<Props>) {
  return <div className={robotoSlab.className}>{children}</div>;
}
