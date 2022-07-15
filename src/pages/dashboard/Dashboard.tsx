import React, { useEffect, useState } from "react";
import Paper from "../../components/common/Paper";
import useApi from "../../hooks/useApi";
import { useEventStore } from "../../states/event-store";
import IDashboard from "../../types/dashboard";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  const { eventId } = useEventStore();
  const [data, setData] = useState<IDashboard>();
  const fetchData = async () => {
    const { data } = await useApi.dashboard().getData(8);
    setData((prev) => data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Paper className={styles.sectionA}>
          <span>Average per guest</span>
          <h3>{Math.floor(data?.averagePerGuest!) + " $"}</h3>
        </Paper>

        <Paper className={styles.sectionB}>
          <h3>B</h3>
          <span>{data?.totalAmount}</span>
        </Paper>

        <Paper className={styles.sectionC}>
          <h3>C</h3>
          <span>Total amount</span>
        </Paper>

        <Paper className={styles.sectionD}>
          <h3>Total guests paid</h3>
          <span>
            {data?.paidGuests.current} / {data?.paidGuests.max}
          </span>
        </Paper>
      </div>
    </>
  );
};

export default Dashboard;
