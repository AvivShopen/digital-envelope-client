import React, { useEffect, useState } from "react";
import api from "../../api";
import BlessingItem from "../../components/blessing-item";
import Toolbar from "../../components/toolbar/Toolbar";
import useStore from "../../states/store";
import { Blessing } from "../../types/blessing";
import { SortOptions } from "../../types/sort-options";
import styles from "./show-blessings.module.css";

const ShowBlessings: React.FC<any> = () => {
  const { eventId } = useStore();
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const [filtered, setFiltered] = useState<Blessing[]>([]);

  useEffect(() => {
    // fetchBlessings();
  }, []);

  const fetchBlessings = async () => {
    try {
      const { data } = await api.blessing().getByEvent(eventId);
      setBlessings(data);
      setFiltered(data);
    } catch (err) {
      alert(err);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const query = e.currentTarget.value.toLowerCase() as string;
    if (query !== "") {
      const result = blessings.filter(
        (blessing: Blessing) =>
          blessing && blessing.createdBy.toLowerCase().includes(query)
      );
      setFiltered(result);
    } else {
      setFiltered(blessings);
    }
  };

  const compareByAmount = (a: Blessing, b: Blessing) => {
    if (a.paymentAmount > b.paymentAmount) return -1;
    if (a.paymentAmount < b.paymentAmount) return 1;
    return 0;
  };

  const compareByDate = (a: Blessing, b: Blessing) => {
    if (a.createdAt > b.createdAt) return -1;
    if (a.createdAt < b.createdAt) return 1;
    return 0;
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const option = e.target.value as SortOptions;
    if (option === SortOptions.Amount) {
      setFiltered(blessings.sort(compareByAmount));
    } else if (option === SortOptions.Date) {
      setFiltered(blessings.sort(compareByDate));
    }
  };

  return (
    <>
      <h2 className={styles.header}>All Blessings</h2>
      <Toolbar
        handleSearch={handleSearch}
        options={SortOptions}
        handleSort={handleSort}
      />

      <div className={styles.container}>
        {filtered &&
          filtered.map((blessing) => {
            return <BlessingItem key={"" + blessing.id} {...blessing} />;
          })}
      </div>
    </>
  );
};

export default ShowBlessings;
