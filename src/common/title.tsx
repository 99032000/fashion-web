import { PoppinsFontWrapper, RobotoSlabFontWrapper } from "@/font";

type Props = {
  title: string;
  subtitle: string;
};
export function Title({ title, subtitle }: Readonly<Props>) {
  return (
    <div className="mx-auto mb-8 text-center text-primary">
      <RobotoSlabFontWrapper>
        <h1 className="mb-4 text-[64px] leading-[84.41px]">{title}</h1>
      </RobotoSlabFontWrapper>
      <PoppinsFontWrapper>
        <h2 className="text-[22px] leading-[33px]">{subtitle}</h2>
      </PoppinsFontWrapper>
    </div>
  );
}
