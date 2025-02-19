// * Components
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import TopCategories from './components/topCategories'
import Properties from "./components/Properties";
import MoreDetail from "./components/MoreDetail";
// import Featured from "./components/Featured";
import Footer from "./components/Footer";
import PopularDestinations from "./components/popularDestinations";


function App() {

  return (
    <div className="App">
      <Hero />
      <Reviews />
      <TopCategories />
      <PopularDestinations />
      <Properties />
      <MoreDetail />
      {/* <Featured /> */}
      <Footer />
    </div>
  );
}

// Git debug comment

export default App;
