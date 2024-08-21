import logo from "./logo.svg";
import "./App.css";
import Footer from "./comp/Footer";
import Sign_up from "./comp/Sign_up";
import Banners from "./comp/Banners";
import Sidebar from "./comp/Sidebar";
import SideBlack from "./comp/SideBlack";
import HeroSlider from "./comp/Sliders/HeroSlider";

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <HeroSlider/>
      <Banners />
      <Sign_up />
      <Footer />
    </>
  );
}

export default App;
