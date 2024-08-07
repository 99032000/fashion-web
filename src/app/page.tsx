import {
  Banner,
  BestSelling,
  ExclusiveOffer,
  Header,
  Marketing,
  Products,
} from "@/components";
import MockData from "@/Mock/data.json";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full">
      <Header data={MockData.header} />
      <Banner data={MockData.banner} />
      <BestSelling data={MockData.best_selling} />
      <Products data={MockData.our_product} />
      <ExclusiveOffer data={MockData.exclusive_offer} />
      <Marketing data={MockData.marketing} />
    </div>
  );
}
