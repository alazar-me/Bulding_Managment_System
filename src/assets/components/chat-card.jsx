import React, { useState } from "react";

const ChatCard = ({_id, userName, sentDate, title, descreption}) => {
  const [isCommenting, setIsCommenting] = useState(false);
  const [comment, setComment] = useState("");

  const handleCommentClick = () => {
    setIsCommenting(!isCommenting);
  };

  const handleSendClick = () => {
    // Handle sending the comment logic here

    console.log("Comment sent:", comment);
    setComment("");
    setIsCommenting(false);
  };

  return (
    <div className="ml-6 flex flex-col bg-[#ffffff] border-gray-200 border-2 p-4 rounded-2xl w-auto mr-6 max-h-[80vh] overflow-y-auto">
      <div className="flex flex-row gap-4 pb-2">
        <img
          className="pl-5 pt-2 h-14"
          src="/src/assets/images/avatar.jpg"
          alt="Avatar"
        />
        <h2 className="pt-4 pl-2 text-lg font-semibold text-gray-600">
          {userName}
        </h2>
        <h3 className="pt-4 pl-2 text-gray-500">{sentDate}</h3>
      </div>
      <h1 className="pl-2 pb-1 text-2xl font-bold text-black">
        {title}
      </h1>
      <h2 className="pl-2 pb-5 text-gray-700">
        {descreption}
      </h2>
      <hr className="border-t-1 border-green-600" />
      <div className="flex flex-row justify-end gap-2 pb-2 pt-2 mr-4">
        <img src="/src/assets/images/ReactIcon.png" alt="React Icon" />
        <h2
          className="font-medium text-gray-800 cursor-pointer"
          onClick={handleCommentClick}
        >
          Comment
        </h2>
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isCommenting ? "max-h-48" : "max-h-0"
        }`}
      >
        {isCommenting && (
          <div className="p-4">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment..."
            ></textarea>
            <input type="hidden" value={_id} />
            <button
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
              onClick={handleSendClick}
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatCard;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ChatCard = ({ chatId }) => {
//   const [chatData, setChatData] = useState({
//     name: "",
//     picture: "/src/assets/images/Avatar Goes Here.png",
//     message: "",
//     timestamp: "",
//     comments: [],
//   });
//   const [isCommenting, setIsCommenting] = useState(false);
//   const [comment, setComment] = useState("");

//   useEffect(() => {
//     // Fetch chat data from the backend
//     axios
//       .get(`/api/chats/${chatId}`)
//       .then((response) => {
//         setChatData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching chat data:", error);
//       });
//   }, [chatId]);

//   const handleCommentClick = () => {
//     setIsCommenting(!isCommenting);
//   };

//   const handleSendClick = () => {
//     // Prepare comment data
//     const newComment = {
//       text: comment,
//       author: "Current User", // Replace with actual user data
//     };

//     // Send comment to the backend
//     axios
//       .post(`/api/chats/${chatId}/comments`, newComment)
//       .then((response) => {
//         // Update comments state with the new comment
//         setChatData((prevData) => ({
//           ...prevData,
//           comments: [...prevData.comments, response.data],
//         }));
//         setComment("");
//         setIsCommenting(false);
//       })
//       .catch((error) => {
//         console.error("Error sending comment:", error);
//       });
//   };

//   return (
//     <div className="ml-6 flex flex-col bg-green-100 rounded-2xl w-auto mr-6 max-h-[80vh] overflow-y-auto">
//       <div className="flex flex-row gap-4 pb-2">
//         <img className="pl-5 pt-2" src={chatData.picture} alt={chatData.name} />
//         <h2 className="pt-4 pl-2 text-lg font-semibold text-gray-600">
//           {chatData.name}
//         </h2>
//         <h3 className="pt-4 pl-2 text-gray-500">
//           {new Date(chatData.timestamp).toLocaleString()}
//         </h3>
//       </div>
//       <h1 className="pl-2 pb-1 text-2xl font-bold text-black">
//         {chatData.message}
//       </h1>
//       <h2 className="pl-2 pb-5 text-gray-700">{chatData.message}</h2>
//       <hr className="border-t-1 border-green-600" />
//       <div className="flex flex-row justify-end gap-2 pb-2 pt-2 mr-4">
//         <img src="/src/assets/images/ReactIcon.png" alt="React Icon" />
//         <h2
//           className="font-medium text-gray-800 cursor-pointer"
//           onClick={handleCommentClick}
//         >
//           Comment
//         </h2>
//       </div>
//       <div
//         className={`transition-all duration-300 overflow-hidden ${
//           isCommenting ? "max-h-48" : "max-h-0"
//         }`}
//       >
//         {isCommenting && (
//           <div className="p-4">
//             <textarea
//               className="w-full p-2 border border-gray-300 rounded-md"
//               rows="3"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               placeholder="Write your comment..."
//             ></textarea>
//             <button
//               className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
//               onClick={handleSendClick}
//             >
//               Send
//             </button>
//           </div>
//         )}
//       </div>
//       <div className="p-4">
//         {chatData.comments.map((comment, index) => (
//           <div key={index} className="border-b border-gray-200 py-2">
//             <h3 className="text-sm font-semibold">{comment.author}</h3>
//             <p className="text-sm">{comment.text}</p>
//             <p className="text-xs text-gray-500">
//               {new Date(comment.timestamp).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChatCard;
