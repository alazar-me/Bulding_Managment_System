import React from "react";
import ChatCard from "../../assets/components/chat-card";
const Notification = () => {
  return (
    <div className="flex flex-col gap-4 pt-5">
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </div>
  );
};
export default Notification;
