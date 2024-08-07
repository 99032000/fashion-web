/* eslint-disable @next/next/no-img-element */
import { productType } from "@/lib/type";

type Props = {
  productData: productType;
  isProduct: boolean;
};
export function CardView({ productData, isProduct }: Readonly<Props>) {
  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden">
      <div
        style={{ backgroundColor: productData.background_color }}
        className="flex-grow"
      >
        <img
          src={productData.image_path}
          alt={productData.product_name ?? productData.title}
          className="h-full w-full object-cover"
        />
      </div>
      <h1 className="text-md mt-8 font-semibold leading-[33px] text-base-200 xl:text-[22px]">
        {productData.product_name}
      </h1>
      <div className="text-md flex w-full justify-center gap-8 xl:text-[22px]">
        <div className="text-base-100">${productData.price}</div>
        <div className="h-full border-l border-[#454545]"></div>
        <div className="flex items-center gap-1 text-base-100">
          {productData.rate}
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
}
