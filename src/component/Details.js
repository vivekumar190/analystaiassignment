import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const [data, seTdATA] = useState();
  const fetchData = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    seTdATA(response?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="wrapper">
      <div className="container h-100">
        <div className="headerTitle">Company Hub</div>
        <div className="Header">Company List</div>
        <div className="row card">
          <div className="col-12">
            <div className="imagecolumn">
              {" "}
              <img src="/icons/company.png" height={"auto"} width={60}></img>
              <div className="column">
                <div className="cardtitle">{data?.company?.name}</div>
                <div className="fieldvalue">{data?.company?.catchPhrase}</div>
                <div className="fieldvaluebs">{data?.company?.bs}</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-6">
            <div className="column">
              Name
              <div className="fieldvalue">{data?.name}</div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-6">
            <div className="column">
              Phone
              <div className="fieldvalue">{data?.phone}</div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-6">
            <div className="column">
              Username
              <div className="fieldvalue">{data?.username}</div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-6">
            <div className="column">
              Email
              <div className="fieldvalue">{data?.email}</div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-6">
            <div className="column">
              Website
              <div className="fieldvalue">{data?.website}</div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-6">
            <div className="column">
              Email
              <div className="fieldvalue">{data?.email}</div>
            </div>
          </div>
          <div className="col">
            <div className="column">
              Street
              <div className="fieldvalue">{data?.address?.street}</div>
            </div>
          </div>
          <div className="col">
            <div className="column">
              city
              <div className="fieldvalue">{data?.address?.city}</div>
            </div>
          </div>
          <div className="col">
            <div className="column">
              Zip Code
              <div className="fieldvalue">{data?.address?.zipcode}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
