import Header from "./Header";
import Footer from "./Footer";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Portfolios from "./components/Portfolios";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import ContantForm from "./components/ContantForm";

export default function Home() {
  return (
    <div>
      <Header />
      <Introduction />
      <Services />
      <Portfolios />
      <Work />
      <Testimonials />
      <ContantForm />
      <Footer />
    </div>
  );
}
