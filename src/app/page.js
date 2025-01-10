import Header from "@/components/Home/Header";
import Information from "@/components/Home/Information";
import InforTitle from "@/components/Home/InforTitle";
import Test from "@/components/Home/Test";

export default function Home() {
  return (
    <div className="">
    <Header />
    <Information />
    <InforTitle />
    <div className="h-[100vh] border">Footer</div>
    <div className="copyright">Copyright © 2023 Golden</div>

    <div className="h-[200vh]"></div>
  </div>
  );
}
