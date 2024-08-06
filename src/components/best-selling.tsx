import { Title } from "@/common";
import { productType } from "./type";

type Props = {
  data: {
    title: string;
    subtitle: string;
    products: productType[];
  };
};
export function BestSelling({ data }: Readonly<Props>) {
  return (
    <div className="mx-auto max-w-content px-16 pb-24 pt-14">
      <Title title={data.title} subtitle={data.subtitle} />
    </div>
  );
}
