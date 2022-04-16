import React from "react";
import Spinner from "./Spinner";
import { useTranslation } from "react-i18next";

function Card({ showData, loadingData, weather, forecast, checktype }) {
  const { t, i18n } = useTranslation(["translation"]);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  const kelvin = 273.15;
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = day + "/" + month + "/" + year;
  let url = "";
  let iconUrl = "";
  var iconUrl3 = "";
  var iconUrl6 = "";
  var iconUrl9 = "";

  var forecastDate3 = "";
  var forecastDate6 = "";
  var forecastDate9 = "";

  if (loadingData) {
    return <Spinner></Spinner>;
  }

  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";
    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 =
      forecast.list[1].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[1].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[1].dt_txt.substring(0, 4) +
      " " +
      forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 =
      forecast.list[2].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[2].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[2].dt_txt.substring(0, 4) +
      " " +
      forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 =
      forecast.list[3].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[3].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[3].dt_txt.substring(0, 4) +
      " " +
      forecast.list[3].dt_txt.substring(11, 13);
  }

  return (
    <>
      <div className="mt-5">
        {showData === true ? (
          <div className="container">
            <div className="card mb-3 mx-auto bg-dark text-light">
              <div className="row g-0">
                <div className="col-md-4">
                  <h3 className="card-title">{weather.name}</h3>
                  <p className="card-date">{date}</p>
                  <h1 className="card-temp">
                    {(weather.main.temp - kelvin).toFixed(1)}ºC
                  </h1>
                  <p className="card-desc">
                    <img src={iconUrl} alt="icon" />
                    {weather.weather[0].description}
                  </p>
                  {checktype === 1 && (
                    <img
                      src="https://res.cloudinary.com/dahswyr0k/image/upload/v1649978081/WeatherApp/horta/IMG_20220414_133430_jbjptb.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  )}
                  {checktype === 0 && (
                    <img
                      src="https://res.cloudinary.com/dahswyr0k/image/upload/v1649978091/WeatherApp/everywhere/IMG_20220116_120132_eyjh88.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  )}
                  {checktype === 2 && (
                    <img
                      src="https://res.cloudinary.com/dahswyr0k/image/upload/v1649978090/WeatherApp/everywhere/aiguafreda_c5tgwg.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  )}
                </div>
                <div className="col-md-8">
                  <div className="card-body text-start mt-2">
                    <h5 className="card-text">
                      {t("temp_max")}
                      {(weather.main.temp_max - kelvin).toFixed(1)}ºC
                    </h5>
                    <h5 className="card-text">
                      {t("temp_min")}
                      {(weather.main.temp_min - kelvin).toFixed(1)}ºC
                    </h5>
                    <h5 className="card-text">
                      {t("sens_therm")}
                      {(weather.main.feels_like - kelvin).toFixed(1)}ºC
                    </h5>
                    <h5 className="card-text">
                      {t("humidity")} {weather.main.humidity}%
                    </h5>
                    <h5 className="card-text">
                      {t("wind_speed")} {weather.wind.speed}m/s
                    </h5>
                  </div>
                  <hr />

                  <div className="row mt-4">
                    <div className="col">
                      <p>{forecastDate3}h</p>
                      <p className="description">
                        <img src={iconUrl3} alt="icon" />
                        {forecast.list[1].weather[0].description}
                      </p>
                      <p className="temp">
                        {(forecast.list[1].main.temp - kelvin).toFixed(1)}ºC
                      </p>
                    </div>
                    <div className="col">
                      <p>{forecastDate6}h</p>
                      <p className="description">
                        <img src={iconUrl6} alt="icon" />
                        {forecast.list[2].weather[0].description}
                      </p>
                      <p className="temp">
                        {(forecast.list[2].main.temp - kelvin).toFixed(1)}ºC
                      </p>
                    </div>
                    <div className="col">
                      <p>{forecastDate9}h</p>
                      <p className="description">
                        <img src={iconUrl9} alt="icon" />
                        {forecast.list[3].weather[0].description}
                      </p>
                      <p className="temp">
                        {(forecast.list[3].main.temp - kelvin).toFixed(1)}ºC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2 className="text-light">{t("message_no_data")}</h2>
        )}
      </div>
    </>
  );
}

export default Card;
