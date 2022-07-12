import React from "react";
import { Link } from "react-router-dom";
import { useEventStore } from "../../state/event-store";
import styles from "./event-item.module.css";

interface Props {
  eventId: number;
  children: React.ReactNode;
}

const EventItem: React.FC<Props> = ({ children, eventId }) => {
  const setEvent = useEventStore((state) => state.setEvent);
  return (
    <div className={styles.container}>
      <Link
        className={styles.name}
        onClick={() => setEvent(eventId)}
        to={"/blessings"}
      >
        {children}
      </Link>
    </div>
  );
};

export default EventItem;
