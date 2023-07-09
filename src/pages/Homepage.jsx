import React from "react";
import { usePlace } from "../components/PlaceContext";
import { LiaMapMarkerSolid } from "react-icons/lia";
import CountryPage from "./CountryPage";
import { useNavigate } from "react-router";

function Homepage() {
  const navigate = useNavigate();
  const { state, dispatch } = usePlace();
  console.log(state.places);
  return (
    <div>
      <div className=" font-semibold text-xl mt-5 p-5 ">
        Welcome to Best Place Advisor
      </div>
      <div className=" text-primary font-semibold text-lg">
        Top Continents for your next holiday
      </div>
      <div>
        {state.places.map((conti) => (
          <div
            className=" rounded-lg pb-5 relative cursor-pointer"
            style={{
              listStyle: "none",
              boxShadow: "5px 10px 8px #888888",
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => navigate(`/country/${conti.id}`)}
          >
            <img
              src={conti.image}
              className="object-cover h-52 w-100"
              alt="img"
            />
            <div className=" absolute bottom-10 left-10 text-white flex flex-row">
              <LiaMapMarkerSolid />
              {conti.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
