import React, { ChangeEventHandler, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import BlessingItem from "../components/blessing-item";
import { Blessing } from "../types/blessing";
import { SortOptions } from "../types/sort-options";
import "./show-blessings.css";
const ShowBlessings = () => {
  const { eventId } = useParams();
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const sortOptions = ["Amount", "Date"];
  const [filtered, setFiltered] = useState<Blessing[]>([]);
  const [selected, setSelected] = useState(sortOptions[0]);

  useEffect(() => {
    //   fetchBlessings();
    setBlessings(mockData);
    setFiltered(mockData);
  }, []);

  const mockData: Blessing[] = [
    {
      id: 1,
      by: "Omer gal",
      text: "Mazal Tov",
      createdAt: new Date(),
      eventId: 11,
      paymentId: 123,
      paymentAmount: 150,
    },
    {
      id: 2,
      by: "Omer gal",
      text: "Mazal Tov",
      createdAt: new Date(),
      eventId: 12,
      paymentId: 124,
      paymentAmount: 120,
    },
    {
      id: 3,
      by: "Omer gal",
      text: "Mazal Tov",
      createdAt: new Date(),
      eventId: 13,
      paymentId: 125,
      paymentAmount: 160,
    },
  ];
  const fetchBlessings = async () => {
    try {
      const res = await api.blessing().getByEvent(parseInt(eventId!));
    } catch (err) {
      alert(err);
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
    setSelected(option);
    if (option === SortOptions.Amount) {
      blessings.sort(compareByAmount);
    } else if (option === SortOptions.Date) {
      blessings.sort(compareByDate);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const query = e.currentTarget.value.toLowerCase() as string;
    if (query !== "") {
      const result = blessings.filter(
        (blessing: Blessing) =>
          blessing && blessing.by.toLowerCase().includes(query)
      );
      setFiltered(result);
    } else {
      setFiltered(blessings);
    }
  };

  return (
    <div className="blessings-screen-container">
      <h2 className="blessings-screen-header">All blessings</h2>
      <div className="blessings-screen-toolbar">
        <input placeholder="Search..." onChange={(e) => handleSearch(e)} />
        <div>
          Sort
          <select value={selected} onChange={handleSort}>
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="blessings-container">
        {filtered &&
          filtered.map((blessing) => {
            return <BlessingItem key={"" + blessing.id} {...blessing} />;
          })}
      </div>
    </div>
  );
};

export default ShowBlessings;
