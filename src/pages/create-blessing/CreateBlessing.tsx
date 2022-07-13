import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useBlessingStore } from "../../states/blessing-store";
import { ICreateBlessing } from "../../types/blessing";
import styles from "./create-blessing.module.css";

const SubmitBlessing: React.FC<any> = () => {
  const { setBlessing, blessing } = useBlessingStore();
  const eventId = parseInt(useParams().eventId!);

  const handleSubmit = () => {
    setBlessing({ ...values, eventId });
  };
  const { onChange, onSubmit, values } = useForm<ICreateBlessing>(
    handleSubmit,
    blessing
  );
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div className={styles.paper}>
          <h4>Guest name:</h4>
          <input
            name="createdBy"
            value={values.createdBy}
            onChange={onChange}
          />
          <h4>Your blessing:</h4>
          <textarea name="text" value={values.text} onChange={onChange} />
          <input
            name="paymentAmount"
            value={values.paymentAmount}
            onChange={onChange}
          />
          <input type="submit" className={styles.submit} />
        </div>
      </form>
    </div>
  );
};

export default SubmitBlessing;
