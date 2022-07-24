import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import BlessingItem from "./components/blessing-item";
import Toolbar from "./components/toolbar";
import { useEventStore } from "../../states/event-store";
import { Blessing } from "../../types/blessing";
import { SortOptions } from "../../types/sort-options";
import SideBar from "../../components/header";
import { BlessingContainer } from "./styles";
import DashboardToolbar from "../../components/toolbar";
import { Card } from "@mui/material";
import BlessingsToolbar from "./components/toolbar";
import { compare } from "../../utils/compare.util";

const ShowBlessings: React.FC<any> = () => {
  const { event } = useEventStore();
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const [filtered, setFiltered] = useState<Blessing[]>([]);
  const [selected, setSelected] = useState<string>(SortOptions.DateASC);

  useEffect(() => {
    fetchBlessings();
  }, []);

  const fetchBlessings = async () => {
    try {
      // const { data } = await useApi.blessing().getByEvent(event.id);
      const { data } = await useApi.blessing().getByEvent(8);
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

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    setSelected((prev) => option);
    if (SortOptions[option] === SortOptions.Amount) {
      setFiltered((filtered) =>
        filtered.sort((a, b) => {
          return compare<Blessing>(a, b, "paymentAmount", "DESC");
        })
      );
    }
    if (SortOptions[option] === SortOptions.DateDESC) {
      setFiltered((filtered) =>
        filtered.sort((a, b) => {
          return compare<Blessing>(a, b, "createdAt", "DESC");
        })
      );
    }
    if (SortOptions[option] === SortOptions.DateASC) {
      setFiltered((filtered) =>
        filtered.sort((a, b) => {
          return compare<Blessing>(a, b, "createdAt", "ASC");
        })
      );
    }
  };
  return (
    <>
      <SideBar />
      <BlessingContainer>
        <>
          <DashboardToolbar />
          <BlessingsToolbar
            handleSearch={handleSearch}
            handleSort={handleSort}
            selected={selected}
          />
          {filtered &&
            filtered.map((blessing) => {
              return <BlessingItem key={"" + blessing.id} {...blessing} />;
            })}
        </>
      </BlessingContainer>
    </>
  );
};

export default ShowBlessings;
