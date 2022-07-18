import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { Event } from "../../types/event";
import EventItem from "./components/event-item";

const ShowEvents: React.FC<void> = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // fetchEvents();
  }, []);

  const mockEvents = [
    { name: "Omers bar miztva" },
    { name: "Omers wedding" },
    { name: "Omers divorce" },
    { name: "Omers birthday" },
  ];

  const fetchEvents = async () => {
    const { data } = await useApi.events().getByUser(1);
    setEvents((prev) => data);
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
