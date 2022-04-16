import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function SearchByName({ newLocation }) {
  const { t, i18n } = useTranslation(["translation"]);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  const [city, setCity] = useState(""); // to stablish the city we will look for

  const onSubmit = (e) => {
    e.preventDefault(); //we prevent the page is recharged. Without doing this we never see anything in the consolelog
    console.log({ city });
    if (city === "" || !city) return;

    newLocation(city);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        {/* mb: margin bottom mx-auto: completly centered */}
        <div className="input-group mb-3 mx-auto">
          {/* we modify setcity with the value found when changing (e). we pass this
          value */}
          <input
            type="text"
            className="form-control"
            placeholder={t("city")}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn btn-primary input-group-text" type="submit">
            {t("find")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchByName;
