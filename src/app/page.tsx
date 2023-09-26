import Header from "./Header";
import Footer from "./Footer";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Portfolios from "./components/Portfolios";
import Projects from "./components/Testimonials";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <Header />
      <Introduction />
      <Services />
      <Portfolios />
      <Work />
      <Projects />
      <Footer />
    </div>
  );
}
