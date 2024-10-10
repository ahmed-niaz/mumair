import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import MyProjects from "./components/MyProjects";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <main >
      <Navbar />
      <Banner />
      <AboutMe />
      <Services />
      <MyProjects />
      <Testimonials />
      <ContactMe />
      <Footer />
    </main>
  );
};

export default App;
