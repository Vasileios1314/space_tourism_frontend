import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DestinationCard from "../../components/DestinationCard";
import { setDestination } from "../../store/destination/actions";
import { selectDestinations } from "../../store/destination/selectors";

export default function Destination() {
  const dispatch = useDispatch();
  const destination = useSelector(selectDestinations);

  useEffect(() => {
    dispatch(setDestination());
    console.log("response", destination);
  }, [dispatch]);

  if (!destination) return "Loading...";

  return (
    <div>
      {destination.map((destination) => {
        return (
          <DestinationCard
            key={destination.id}
            id={destination.id}
            name={destination.name}
            imgUrl={destination.imgUrl}
            description={destination.description}
            distance={destination.distance}
            travel={destination.travel}
          />
        );
      })}
    </div>
  );
}
