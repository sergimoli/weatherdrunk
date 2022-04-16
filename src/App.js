import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const longitudeSergiHome = 2.163921012130307;
  const latitudeSergiHome = 41.43047756879439;
  const emptylongitude = 0;
  const emptylatitude = 0;
  const lang = "cat";
  // checktype:
  // 0: local geolocation
  // 1: sergi location
  // 2: by city

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
                lang={lang}
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
                lang={lang}
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
                lang={lang}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
