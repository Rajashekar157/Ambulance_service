import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeroSection from "./Components/HeroSection";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import NonEmergency from "./Components/NonEmergency";
import AmbulanceWithFreezer from "./Components/AmbulanceWithFreezer";
import StandbyAmbulance from "./Components/StandbyAmbulance";
import RoadAmbulance from "./Components/RoadAmbulance";
import MedicalEquipment from "./Components/MedicalEquipment";
import BodyFreezerService from "./Components/BodyFreezerService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/non-emergency" element={<NonEmergency />} />
        <Route path="/freezer-ambulance" element={<AmbulanceWithFreezer />} />
        <Route path="/standby-ambulance" element={<StandbyAmbulance />} />
        <Route path="/road-ambulance" element={<RoadAmbulance />} />
        <Route path="/medical-equipment" element={<MedicalEquipment />} />
        <Route path="/body-freezer" element={<BodyFreezerService />} />
        
        {/* <Route path="/services" element={<HeroSection />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;