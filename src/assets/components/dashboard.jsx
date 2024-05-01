import React from "react";
const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <div className="flex-grow overflow-auto p-5">
          <div className="flex justify-between items-start space-x-4">
            <div className="flex-1 bg-white shadow rounded-lg p-4">
              <RentersList />
            </div>
            <div className="w-80 space-y-4">
              <AddRenter />
              <NotificationCard />
              <Statistics />
            </div>
          </div>
          <div className="mt-4 bg-white shadow rounded-lg p-4">
            <RevenueChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
