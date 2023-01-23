import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const HomeScreen = () => {
  const [data, seTdATA] = useState();
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    seTdATA(response?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="headerTitle">Company Hub</div>
        <div className="Header">Company List</div>
        <div className="row g-3">
          {data?.map((company) => (
            <div className="col-12">
              <div className="card">
                <div className="imagecolumn">
                  {" "}
                  <img
                    src="/icons/company.png"
                    height={"auto"}
                    width={60}
                  ></img>
                  <div className="column">
                    <div className="cardtitle">{company?.company?.name}</div>
                    <div className="fieldvalue">
                      {company?.company?.catchPhrase}
                    </div>
                  </div>
                </div>

                <div className="middlerow">
                  <div className="column">
                    Contact
                    <div className="fieldvalue">{company?.name}</div>
                  </div>
                  <div className="column">
                    Street
                    <div className="fieldvalue">{company?.address?.street}</div>
                  </div>
                  <div className="column">
                    City
                    <div className="fieldvalue">{company?.address?.city}</div>
                  </div>
                </div>
                <Link to={`${company?.id}`}>
                  <button className="detailsbutton">View details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
