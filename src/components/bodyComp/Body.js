import { useState, useEffect } from "react";
import RestaurantCard from "../restaurentCardComp/RestaurantCard";
import Shimmer from "../shimmer/Shimmer";
import "./Body.css";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  // Function to fetch restaurant data from the API
  // async function fetchData() {
  //   try {
  //     const response = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5701841&lng=73.9035006&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );
  //     const data = await response.json();

  //     // Extracting the restaurants' data from the API response
  //     const restaurants =
  //       data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants;

  //     console.log(restaurants);
  //     setListOfRestaurants(restaurants || []); // Set the state with restaurant data
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  //fetchData for fetching data from API
  const fetchData = () => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5701841&lng=73.9035006&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const restaurants =
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants; // Extracting the restaurants' data from the API response

        setListOfRestaurants(restaurants || []);
        setFilteredList(restaurants);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // useEffect to call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to filter and show only top-rated restaurants
  const filterData = () => {
    const filteredList = listOfRestaurants?.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.3
    );
    setFilteredList(filteredList);
  };

  // Fucntion to filter the Restaurants and update the ui by searching
  const searchData = () => {
    let list = listOfRestaurants.filter((res) => {
      return res?.info?.name?.toLowerCase().includes(searchText?.toLowerCase());
    });
    setFilteredList(list);
  };

  //while fetching the data applying shimmer ui (this concept is known as conditional rendering)
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Filter Button */}
      <div className="filter">
        <button className="filter-btn" onClick={filterData}>
          Top Rated Restaurants
        </button>
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" onClick={searchData}>
            Search
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="restaurant-container">
        {filteredList?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} restro={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
