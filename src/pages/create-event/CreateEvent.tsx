import React from "react";
import { useForm } from "../../hooks/useForm";
import { useEventStore } from "../../states/event-store";
import { ICreateEvent } from "../../types/event";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import styles from "./create-event.module.css";
import Paper from "../../components/common/Paper";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Swal from "sweetalert2";
import { errorProps } from "../../utils/error-msg.props";

const CreateEvent: React.FC<any> = () => {
  const { setEvent } = useEventStore();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your new event will be created immediately",
      icon: "question",
      iconColor: "#5469d4",
      confirmButtonText: "Yes, create it!",
      confirmButtonColor: "#5469d4",
      cancelButtonColor: "#f27474",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          //Call api to create a new event and set its id globally
          // Typescript acts wierd, mybe should use tsignore instead

          values.estimatedGuests = parseInt(values.estimatedGuests.toString());
          const { data } = await useApi.events().create(values);
          setEvent(data.id);

          // navigate("/qr");
        } catch (err) {
          Swal.fire({ icon: "error", ...errorProps });
        }
      }
    });
  };

  const { onChange, onSubmit, values } = useForm<ICreateEvent>(handleSubmit, {
    estimatedGuests: 0,
    name: "",
  });

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <Paper>
          <h1>Welcome, $User </h1>

          <label htmlFor="name">How would you name the event?</label>
          <Input
            name="name"
            className={styles.field}
            value={values.name}
            onChange={onChange}
          />
          <label htmlFor="estimatedGuests">
            How many guests are expected to attend?
          </label>
          <Input
            className={styles.field}
            name="estimatedGuests"
            value={values.estimatedGuests}
            type="number"
            min="1"
            step="any"
            onChange={onChange}
          />
          <Button type="submit">Submit</Button>
        </Paper>
      </form>
    </div>
  );
};

export default CreateEvent;
