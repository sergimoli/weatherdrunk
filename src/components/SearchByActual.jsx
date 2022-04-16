import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
function SearchByActual() {
  const APIkey = "26d14311349b1d5ab28addb69dc2cf1e";
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState([]); //the answer from the api (actual weather)
  const [forecast, setForecast] = useState([]); //the answer from the api(prediction)
  const [loading, setLoading] = useState(false); //meanwhile charging the info show or not the spinner
  const [show, setShow] = useState(false); //view the card with info

  const savePositionToState = (position) => {
    setLoading(true);
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);

    console.log("latitude: ", latitude);
    console.log("longitude: ", longitude);
  };

  const fetchWeather = async () => {
    setLoading(true);

    try {
      await window.navigator.geolocation.getCurrentPosition(
        savePositionToState
      );
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=metric`
      );
      console.log("weatherData", res.data);
      setWeather(res.data);
    } catch (error) {
      console.error("Error found!");
      setLoading(false); //spinner stops
      setShow(false); //if error we do not show anything
    }
  };

  const fetchForecast = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(
        savePositionToState
      );
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=metric`
      );
      console.log("forecastData", res.data);
      setForecast(res.data);
      setLoading(false); //stop showing the spinner
      setShow(true); //show the card with all info
    } catch (error) {
      console.error("Error found!");
      setLoading(false); //spinner stops
      setShow(false); //if error we do not show anything
    }
  };

  useEffect(() => {
    fetchWeather();
    fetchForecast();
  }, [latitude, longitude]);

  return (
    <>
      <Card
        showData={show}
        loadingData={loading}
        weather={weather}
        forecast={forecast}
      ></Card>
    </>
  );
}

export default SearchByActual;
