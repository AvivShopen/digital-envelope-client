import React from "react";
import { DashboradItemHeader, DashboardPaper, StatsChildren } from "./styles";

interface DashboardProps {
  title: string;
  children: React.ReactNode;
}

const DashboardCard: React.FC<DashboardProps> = ({ children, title }) => {
  return (
    <DashboardPaper>
      <DashboradItemHeader>{title}</DashboradItemHeader>
      <StatsChildren>{children}</StatsChildren>
    </DashboardPaper>
  );
};

export default DashboardCard;
