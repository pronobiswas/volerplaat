import Image from "next/image";
import Banner from "./_component/home/banner";
import FeaturedShapeAndSize from "./_component/home/FeaturedShapeAndSize";
import HowItsWork from "./_component/home/howItsWork";

export default function Home() {
  return (
    <>
    <section>
      <div className="w-full">
      <Banner/>
      <FeaturedShapeAndSize />
      <HowItsWork/>
      </div>
    </section>
    </>
  );
}
