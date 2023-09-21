import Header from "./Header";
import Footer from "./Footer";
import TextCarousel from "./components/TextCarousel";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";
import Portfolios from "./components/Portfolios";
import Projects from "./components/Testimonials";
// export const ToTopFloatingButton = () => {
//   return (
//     <div
//       className="absolute my-[320px] md:my-[520px] md:mx-[90%] invisible"
//       id="TopButton"
//     >
//       <div className="w-[60px] h-[60px] bg-green-500 rounded-full fixed z-10">
//         <Link href={"/"}>
//           <AiOutlineArrowUp className="w-[40px] h-[40px] bg-green-500 rounded-full fixed z-10 text-center m-2.5 text-white hover:text-black" />
//         </Link>
//       </div>
//     </div>
//   );
// };
export default function Home() {
  return (
    <div>
      <Header />

      <Introduction />
      <TextCarousel title={"A Full-Stack Developer"} />
      <Services />
      <Portfolios />
      <Projects />
      <Footer />
    </div>
  );
}
