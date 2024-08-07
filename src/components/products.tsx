import { CardView, Title } from "@/common";
import { productType } from "@/lib/type";

type Props = {
  data: {
    title: string;
    subtitle: string;
    products: productType[];
  };
};

export function Products({ data }: Readonly<Props>) {
  return (
    <div className="w mx-auto max-w-content px-16 pb-24 pt-14">
      <Title title={data.title} subtitle={data.subtitle} />
      <div className="mb-8 grid grid-cols-4 gap-x-4 gap-y-16">
        {data.products.map((item) => (
          <CardView key={item.id} productData={item} isProduct />
        ))}
      </div>
    </div>
  );
}
