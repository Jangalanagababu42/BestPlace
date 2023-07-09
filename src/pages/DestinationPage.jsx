import React from "react";
import { useNavigate, useParams } from "react-router";
import { usePlace } from "../components/PlaceContext";
import { LiaMapMarkerSolid } from "react-icons/lia";
function DestinationPage() {
  const { destId } = useParams();
  const { state, dispatch } = usePlace();
  const navigate = useNavigate();
  const selectedCountry = state.places.countries.filter(
    (conti) => Number(conti.id) === Number(destId)
  )[0];
  console.log(destId, "destId");
  console.log(selectedCountry, "selindes");
  return (
    <div>
      <div className=" text-primary font-semibold text-lg">
        Top Countries in {selectedCountry.name} for your next holiday
      </div>
      <div>
        {selectedCountry.destinations.map((conti) => (
          <div
            className=" rounded-lg pb-5 relative cursor-pointer"
            style={{
              listStyle: "none",
              boxShadow: "5px 10px 8px #888888",
              display: "inline-block",
              margin: "10px",
            }}
            onClick={() => navigate(`/destination/${conti.id}`)}
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

export default DestinationPage;
