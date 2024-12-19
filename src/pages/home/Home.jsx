import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Dropdown from "../../components/dropdown/Dropdown";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Portfolio from "../../components/portfolio/Portfolio";
import Pricing from "../../components/pricing/Pricing";
import Services from "../../components/services/Services";
import Team from "../../components/team/Team";

function Home() {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>

      <section>
        <Hero />
        <About />
        {/* <Contact />
        <Dropdown />
        <Portfolio />
        <Pricing />
        <Services />
        <Team /> */}
      </section>
    </main>
  );
}

export default Home;
