import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation(["translation"]);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const longitudeSergiHome = 2.163921012130307;
  const latitudeSergiHome = 41.43047756879439;
  const emptylongitude = 0;
  const emptylatitude = 0;
  // checktype:
  // 0: local geolocation
  // 1: sergi location
  // 2: search by city

  const checkPositionLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log("latitude: ", latitude);
      console.log("longitude: ", longitude);
    });
  };

  useEffect(() => {
    checkPositionLocation();
  });

  return (
    <Router>
      <NavBar></NavBar>
      <Header></Header>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Weather
                lat={emptylatitude}
                lon={emptylongitude}
                checktype={2}
                lang={i18n.language}
              />
            }
          />
          {/* <Route path="/ubication" element={<SearchByActual />} /> */}
          <Route
            path="/yourubication"
            element={
              <Weather
                lat={latitude}
                lon={longitude}
                checktype={0}
                lang={i18n.language}
              />
            }
          />
          <Route
            path="/sergiubication"
            element={
              <Weather
                lat={latitudeSergiHome}
                lon={longitudeSergiHome}
                checktype={1}
                lang={i18n.language}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
