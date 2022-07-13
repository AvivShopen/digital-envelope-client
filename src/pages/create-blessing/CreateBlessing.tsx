import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/common/Button";
import Paper from "../../components/common/Paper";
import { useForm } from "../../hooks/useForm";
import { useBlessingStore } from "../../states/blessing-store";
import { ICreateBlessing } from "../../types/blessing";
import styles from "./create-blessing.module.css";
import Input from "../../components/common/Input";
import useApi from "../../hooks/useApi";
import Swal from "sweetalert2";
import { errorProps } from "../../utils/error-msg.props";

const SubmitBlessing: React.FC<any> = () => {
  const { setBlessing, blessing } = useBlessingStore();
  const eventId = parseInt(useParams().eventid!);
  const [eventName, setEventName] = useState<string>("");

  useEffect(() => {
    fetchEvent();
  }, []);

  const handleSubmit = () => {
    setBlessing({ ...values, eventId });
  };
  const { onChange, onSubmit, values } = useForm<ICreateBlessing>(
    handleSubmit,
    blessing
  );
  const fetchEvent = async () => {
    try {
      const { data } = await useApi.events().getById(eventId);
      setEventName((name) => data.name);
    } catch (err) {
      Swal.fire({ icon: "error", ...errorProps });
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <Paper>
          <h1>{"Welcome to " + eventName}</h1>
          <label>Guest name</label>
          <Input
            className={styles.field}
            name="createdBy"
            value={values.createdBy}
            onChange={onChange}
          />
          <label>Your blessing</label>
          <textarea
            name="text"
            className={styles.text}
            value={values.text}
            onChange={onChange}
          />
          <label>Payment amount (in USD $)</label>
          <Input
            className={styles.field}
            name="paymentAmount"
            type="number"
            min="1"
            step="any"
            value={values.paymentAmount}
            onChange={onChange}
          />
          <div className={styles.buttonContainer}>
            <Button type="submit">Proceed to payment</Button>
          </div>
        </Paper>
      </form>
    </div>
  );
};

export default SubmitBlessing;
