/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/lib/type";

type Props = {
  productData: ProductType;
  isProduct?: boolean;
  isPriority?: boolean;
};
const productInfo = (productData: ProductType) => (
  <div className="w-full text-center text-base">
    <h1 className="mb-2 mt-8 font-semibold leading-[33px] text-base-200 xl:text-[22px]">
      {productData.product_name}
    </h1>
    <div className="mx-auto flex w-2/3 justify-center divide-x-2 xl:text-[22px]">
      <div className="flex-1 text-base-100">
        ${productData.price?.toPrecision(4)}
      </div>
      <div className="flex flex-1 items-center justify-center gap-2 text-base-100">
        {productData.rate?.toPrecision(2)}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_207_1193)">
            <path
              d="M19.4673 23.3152L12.0003 17.8272L4.53326 23.3152L7.40026 14.4522L-0.0627441 8.99916H9.15126L12.0003 0.121155L14.8493 8.99916H24.0623L16.6003 14.4522L19.4673 23.3152Z"
              fill="#F5D426"
            />
          </g>
          <defs>
            <clipPath id="clip0_207_1193">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </div>
);
const displayInfo = (productData: ProductType) => (
  <>
    <h1 className="mt-8 text-2xl font-semibold leading-[45px] text-base-200 xl:text-[30px]">
      {productData.title}
    </h1>
    <h2 className="text-center text-lg leading-[31.46px] text-base-200 xl:text-[22px]">
      {productData.subtitle}
    </h2>
  </>
);
export function CardView({
  productData,
  isProduct = false,
  isPriority = false,
}: Readonly<Props>) {
  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden">
      <img
        src={productData.image_path}
        alt={productData.product_name ?? productData.title}
        className="aspect-[430/566] object-cover"
        style={{ backgroundColor: productData.background_color }}
        loading="eager"
        fetchPriority={isPriority ? "high" : "auto"}
        decoding="async"
      />

      {isProduct ? productInfo(productData) : displayInfo(productData)}
    </div>
  );
}
