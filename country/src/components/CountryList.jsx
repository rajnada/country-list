import React, { useEffect, useState } from "react";
import axios from "axios";
const CountryList = () => {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => setCountryData(res.data))
      .catch((err) => console.log("err =>", err));
  }, []);

  console.log("countryData =>", countryData);

  return (
    <div className="container mt-4">
      <div className="searchbar ">
        <div className="input-group w-50">
          <input
            type="text"
            className="form-control"
            placeholder="search for a country.."
          />
          {/* <SearchIcon /> */}
        </div>
        <div className="dropdown-wrapper">
          <div className="dropdown-root">
            <div className="dropdown-control">
              <div className="dropdown-placeholder">Filter By region</div>
              <div className="dropdown-arrow-wrapper">
                <span className="dropdown-arrow"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {countryData.map((item, index) => (
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div className="card" id="country__card">
              <a href="">
                <div className="card-img-top">
                  <img
                    src={item.flag}
                    alt={item.demonym}
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold my-3">{item.name}</h5>
                  <p>
                    <strong>population:</strong>
                    <span> {item.population} </span>
                  </p>
                  <p>
                    <strong>Region:</strong> <span> {item.region}</span>
                  </p>
                  <p>
                    <strong>Capital:</strong>
                    <span> {item.capital} </span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
