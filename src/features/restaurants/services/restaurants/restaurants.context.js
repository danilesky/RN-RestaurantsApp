import { createContext, useState, useEffect } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    restaurantsRequest()
      .then(restaurantsTransform)
      .then((data) => setRestaurants(data))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{
        isLoading,
        restaurants,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
