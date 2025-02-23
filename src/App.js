import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import TopCategories from './components/topCategories';
import Properties from "./components/Properties";
import MoreDetail from "./components/MoreDetail";
import Footer from "./components/Footer";
import PopularDestinations from "./components/popularDestinations";
import PackageDetails from './components/packageDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Reviews />
              <TopCategories />
              <PopularDestinations />
              <Properties />
              <MoreDetail />
              <Footer />
            </>
          } />
          <Route path="/package/:id" element={<PackageDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;