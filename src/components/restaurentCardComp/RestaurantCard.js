import { IMGURL } from "../../utils/constants.js";
import "./RestaurantCard.css";

// Restaurant Card Component
const RestaurantCard = ({ restro }) => {
  const { info } = restro;

  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* Restaurant Image */}
      <img
        className="restaurant-logo"
        alt="Restaurant Logo"
        src={IMGURL + info?.cloudinaryImageId}
      />

      {/* Restaurant Details */}
      <h3>{info?.name}</h3>
      <h4>{info?.cuisines.join(", ")}</h4>
      <h4>{info?.avgRating} stars</h4>
      <h4>{info?.costForTwo}</h4>
      <h4>{info?.locality}</h4>
    </div>
  );
};

export default RestaurantCard;



// navigate data from one page to other
// map, filter, find,