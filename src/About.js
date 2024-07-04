import "./App.css";
import Navbar from "./components/common/Navbar";
import Tokenomics from "./components/common/Tokenomics";
import WhoDog from "./components/common/WhoDog";
import Footer from "./components/common/Footer";
import Trump from "./components/home/Trump";
import CommonSlider from "./components/common/CommonSlider";

function About() {
  return (
    <div className="App">
      <Navbar />
      <Trump />
      <Tokenomics/>
      <WhoDog />
      {/*<Tokenomics/>*/}
      <Footer />
    </div>
  );
}

export default About;
