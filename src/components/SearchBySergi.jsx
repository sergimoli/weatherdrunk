import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

function SearchBySergi({ lat, lon, checkcity }) {
  const APIkey = "26d14311349b1d5ab28addb69dc2cf1e";
  // const [latitude, setLatitude] = useState(0);
  // const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState([]); //the answer from the api (actual weather)
  const [forecast, setForecast] = useState([]); //the answer from the api(prediction)
  const [loading, setLoading] = useState(false); //meanwhile charging the info show or not the spinner
  const [show, setShow] = useState(false); //view the card with info

  const fetchWeather = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
      );
      console.log("weatherData", res.data);
      setWeather(res.data);
    } catch (error) {
      console.error("Error found!!");
      setLoading(false); //spinner stops
      setShow(false); //if error we do not show anything
    }
  };

  const fetchForecast = async () => {
    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;

    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw new Error("Error retrieving the forecast");
        return response.json();
      })
      .then((forecastData) => {
        console.log("forecastData", forecastData);
        setForecast(forecastData);
        setLoading(false); //stop showing the spinner
        setShow(true); //show the card with all info
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });
  };

  useEffect(() => {
    fetchWeather();
    fetchForecast();
  }, []);

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

export default SearchBySergi;
