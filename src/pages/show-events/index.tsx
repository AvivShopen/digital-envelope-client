import React from "react";
import useApi from "../../hooks/useApi";
import EventItem from "./event-item";

const ShowEvents: React.FC<any> = () => {
  const mockEvents = [
    { name: "Omers bar miztva" },
    { name: "Omers wedding" },
    { name: "Omers divorce" },
    { name: "Omers birthday" },
  ];

  const fetchEvents = async () => {
    const { data } = await useApi.events().getByUser(1);
  };

  return (
    <div>
      <h2>My events</h2>
      <div>
        {mockEvents.map((event, index) => {
          return (
            <EventItem key={"" + index} eventId={1}>
              {event.name}
            </EventItem>
          );
        })}
      </div>
    </div>
  );
};

export default ShowEvents;
