/* eslint-disable @next/next/no-img-element */
import { Button, CardView, Title } from "@/common";
import { ProductType } from "../lib/type";

type Props = {
  data: {
    title: string;
    subtitle: string;
    products: ProductType[];
  };
};
export function BestSelling({ data }: Readonly<Props>) {
  return (
    <div className="w mx-auto max-w-content px-16 pt-14">
      <Title title={data.title} subtitle={data.subtitle} />
      <div className="mb-8 grid grid-cols-3 gap-8">
        {data.products.map((item) => (
          <CardView key={item.id} productData={item} isProduct />
        ))}
      </div>
      <div className="flex justify-center">
        <Button variant="outline" size="md" disabled>
          <div className="flex items-center gap-2">
            <div>See all</div>
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928932C16.9526 0.538408 16.3195 0.538408 15.9289 0.928932C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM0 9L23 9V7L0 7L0 9Z"
                fill="#224F34"
              />
            </svg>
          </div>
        </Button>
      </div>
    </div>
  );
}