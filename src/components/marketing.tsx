import { CardView, Title } from "@/common";
import { ProductType } from "@/lib/type";

type Props = {
  data: {
    title: string;
    subtitle: string;
    products: ProductType[];
  };
};
export function Marketing({ data }: Readonly<Props>) {
  return (
    <div className="mx-auto mt-32 max-w-content px-16 pb-24">
      <Title
        title={data.title}
        subtitle={data.subtitle}
        titleClassName=" xl:text-[50px] leading-[65.94px] "
        subtitleClassName=" xl:text-[22px] leading-[33px]"
      />
      <div className="mb-8 grid grid-cols-3 gap-8">
        {data.products.map((item) => (
          <CardView key={item.id} productData={item} />
        ))}
      </div>
    </div>
  );
}
