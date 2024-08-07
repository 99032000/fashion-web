import { FontWrapper } from "./fontWrapper";

type Props = {
  title: string;
  subtitle: string;
};
export function Title({ title, subtitle }: Readonly<Props>) {
  return (
    <div className="mx-auto mb-16 text-center text-primary">
      <FontWrapper fontName="robotoSlab">
        <h1 className="mb-4 text-[64px] leading-[84.41px]">{title}</h1>
      </FontWrapper>
      <FontWrapper fontName="poppins">
        <h2 className="text-[22px] leading-[33px]">{subtitle}</h2>
      </FontWrapper>
    </div>
  );
}
