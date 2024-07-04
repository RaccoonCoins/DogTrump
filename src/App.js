import "./App.css";
import Navbar from "./components/common/Navbar";
import Tokenomics from "./components/common/Tokenomics";
import WhoDog from "./components/common/WhoDog";
import Footer from "./components/common/Footer";
import Trump from "./components/home/Trump";
import CommonSlider from "./components/common/CommonSlider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Trump />
      <div className="relative w-full h-[1px]  ">
        <div className="rotate-[1deg] skew-x-1 relative z-50   ">
          <CommonSlider
            blur="backdrop-blur-[24px]"
            bg="rgba(255, 255, 255, 0.60)"
            textColor="#B80404"
            svgColor="fill-[#B80404]"
          />
        </div>
      </div>
      <WhoDog />
      {/*<Tokenomics/>*/}
      <Footer />
    </div>
  );
}

export default App;
