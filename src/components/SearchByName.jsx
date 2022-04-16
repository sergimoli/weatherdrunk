import React, { useState } from "react";

function SearchByName({ newLocation }) {
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
            placeholder="city"
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn btn-primary input-group-text" type="submit">
            Find
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchByName;
