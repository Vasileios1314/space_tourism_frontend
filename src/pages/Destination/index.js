import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DestinationCard from "../../components/DestinationCard";
import { fetchDestinationsById } from "../../store/destination/actions";
import { selectDestinations } from "../../store/destination/selectors";

export default function Destination() {
  const dispatch = useDispatch();
  const destination = useSelector(selectDestinations);

  useEffect(() => {
    dispatch(fetchDestinationsById());
    console.log("response", destination);
  }, [dispatch]);

  if (!destination) return "Loading...";

  return (
    <div>
      {destination?.map((destination) => {
        return (
          <DestinationCard
            key={destination.id}
            id={destination.id}
            name={destination.name}
            description={destination.description}
            distance={destination.distance}
            travel={destination.travel}
          />
        );
      })}
    </div>
  );
}
