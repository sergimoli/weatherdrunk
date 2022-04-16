import React, { useEffect, useState } from "react";
import SearchByName from "./SearchByName";
import Card from "./Card";
import { useTranslation } from "react-i18next";

function Weather({ lat, lon, checktype, lang }) {
  const { t, i18n } = useTranslation(["translation"]);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  const APIkey = "26d14311349b1d5ab28addb69dc2cf1e";
  let urlWeatherAPI = "";
  let urlForecast = "";
  let cityUrl = "";
  let language = "&lang=" + lang;

  console.log("idioma escollit es:", lang);
  console.log(i18n.language);

  if (checktype === 2) {
    urlWeatherAPI =
      "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=" +
      APIkey +
      language;
    cityUrl = "&q=";
    urlForecast =
      "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" +
      APIkey +
      language;
  } else {
    urlWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric${language}`;
    urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric${language}`;
    // urlWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
    // urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
  }

  const [weather, setWeather] = useState([]); //the answer from the api (actual weather)
  const [forecast, setForecast] = useState([]); //the answer from the api(prediction)
  const [loading, setLoading] = useState(false); //meanwhile charging the info show or not the spinner
  const [show, setShow] = useState(false); //view the card with info
  const [location, setLocation] = useState(""); //name of the place to look for (the form)

  //   loc is the parameter of localization
  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);
    console.log("loc is:", loc);
    //weather part
    if (loc !== undefined) {
      urlWeatherAPI = urlWeatherAPI + cityUrl + loc;
    } else {
      urlWeatherAPI = urlWeatherAPI + cityUrl;
    }
    console.log("la cerca que faig és:", urlWeatherAPI);

    await fetch(urlWeatherAPI)
      .then((response) => {
        if (!response.ok) throw new Error("Error retrieving the weather");
        return response.json(); //if no error we get all info
      })
      .then((weatherData) => {
        //if everything goes well go are goona process all info in the parameter weatherdata
        console.log("weatherData", weatherData);
        setWeather(weatherData);
        console.log("urlWeatherAPI", urlWeatherAPI);
        console.log("urlForecast", urlForecast);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); //spinner stops
        setShow(false); //if error we do not show anything
      });

    //forecast part
    urlForecast = urlForecast + cityUrl + loc;
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
    console.log("location es:", location);
    console.log("entro aquí!");
    console.log(checktype);
    if (checktype !== 2) {
      console.log("miro aquíii");
      getLocation();
    }
  }, [checktype]);

  return (
    <>
      {/* we pass the prop(newlocation) to get the localization (loc) */}
      {checktype === 2 && (
        <SearchByName newLocation={getLocation}></SearchByName>
      )}
      {/* view the card */}
      {checktype === 2 && location !== undefined && (
        <Card
          showData={show}
          loadingData={loading}
          weather={weather}
          forecast={forecast}
          checktype={checktype}
        ></Card>
      )}
      {checktype !== 2 && (
        <Card
          showData={show}
          loadingData={loading}
          weather={weather}
          forecast={forecast}
          checktype={checktype}
        ></Card>
      )}
    </>
  );
}

export default Weather;
