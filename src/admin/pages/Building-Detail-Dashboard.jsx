import React from "react";
import RenterCard from "../../assets/components/renterListCard";
import NewRenterCard from "../../assets/components/add-new-renter-card";
import NotificationCrad from "../../assets/components/notificationCard";
import RoomInfoCard from "../../assets/components/room-Info-Card";
import TotalRenterInfoCard from "../../assets/components/total-renter-info-card";
import DataForDashboard from "./DataForDashboard";
const BuildingDetailDashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-4 pl-4 pt-3">
        <div className="flex-col">
          <DataForDashboard/>
          {/* <RenterCard /> */}
        </div>
        <div>
          <div className="flex flex-row gap-4">
            <NewRenterCard />
            <NotificationCrad />
            <div className="flex flex-col gap-4 pt-2">
              <RoomInfoCard />
              <TotalRenterInfoCard />
            </div>
          </div>
        </div>
        <div className="h-48 w-auto bg-white  rounded-2xl font-semibold  mr-6">
          <img
            className="h-48 w-full"
            src="/src/assets/images/Block.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default BuildingDetailDashboard;
