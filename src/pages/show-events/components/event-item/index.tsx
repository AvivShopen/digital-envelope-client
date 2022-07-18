import React from "react";
import { Link } from "react-router-dom";
import { useEventStore } from "../../../../states/event-store";

interface Props {
  eventId: number;
  children: React.ReactNode;
}

const EventItem: React.FC<Props> = ({ children, eventId }) => {
  const setEvent = useEventStore((state) => state.setEvent);
  return (
    <div>
      <Link onClick={() => setEvent(eventId)} to={"/blessings"}>
        {children}
      </Link>
    </div>
  );
};

export default EventItem;
