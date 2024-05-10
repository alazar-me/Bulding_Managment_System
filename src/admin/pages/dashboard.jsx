import React from "react";
import BuldingCard from "../../assets/components/building-card";
const Dashboard = () => {
  return (
    <div className=" p-4 pt-5 pl-16 grid grid-cols-3 gap-8">
      <div>
        <BuldingCard />
      </div>
      <div>
        <BuldingCard />
      </div>
      <div>
        <BuldingCard />
      </div>
      <div>
        <BuldingCard />
      </div>
      <div>
        <BuldingCard />
      </div>
      <div>
        <BuldingCard />
      </div>
    </div>
  );
};
export default Dashboard;
