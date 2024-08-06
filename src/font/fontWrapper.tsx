import { Poppins, Rufina } from "next/font/google";
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
export function PoppinsFontWrapper({ children }: Readonly<Props>) {
  return <div className={poppins.className}>{children}</div>;
}

export function RufinaFontWrapper({ children }: Readonly<Props>) {
  return <div className={rufina.className}>{children}</div>;
}
