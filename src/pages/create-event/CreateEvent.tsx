import React from "react";
import api from "../../api";
import { useForm } from "../../hooks/useForm";
import { useEventStore } from "../../state/event-store";
import { ICreateEvent } from "../../types/event";

const CreateEvent: React.FC<any> = () => {
  const { setEvent } = useEventStore();
  const handleSubmit = async () => {
    //Call api to create a new event and set its id globally
    try {
      const { data } = await api.events().create(values);
      setEvent(data.id);
    } catch (err) {
      alert(err);
    }
  };
  const { onChange, onSubmit, values } = useForm<ICreateEvent>(handleSubmit, {
    estimatedGuests: 0,
    name: "",
  });
  return (
    <div>
      <h1>Welcome, $User </h1>
      <form onSubmit={onSubmit}>
        <h4>How would you name the event?</h4>
        <input name="name" value={values.name} onChange={onChange} />
        <h4>How much guests are expected to attend?</h4>
        <input
          name="estimatedGuests"
          value={values.estimatedGuests}
          onChange={onChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateEvent;
