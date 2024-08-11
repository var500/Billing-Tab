import { useState } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import BillingCounter from "./components/BillingCounter";

function App() {
  const [friendList, setFriendList] = useState([
    {
      name: "Hennry Clark",
      profile: "https://xsgames.co/randomusers/assets/avatars/male/15.jpg",
      calculation: "You and Hennry are Even",
      status: "",
    },
    {
      name: "Jammy James",
      profile: "https://xsgames.co/randomusers/assets/avatars/male/16.jpg",
      calculation: "You and Jammy are Even",
      status: "",
    },
    {
      name: "Bella Rey",
      profile: "https://xsgames.co/randomusers/assets/avatars/female/15.jpg",
      calculation: "You and Bella are Even",
      status: "",
    },
  ]);

  const [billing, setBilling] = useState(false);
  const [friend, setFriend] = useState("");

  const handleBilling = (name: string) => {
    setBilling(true);
    setFriend(name);
  };
  return (
    <div className="container">
      <FriendList handleBilling={handleBilling} friendList={friendList} />
      {billing ? (
        <BillingCounter
          friend={friend}
          setFriendList={setFriendList}
          friendList={friendList}
        />
      ) : null}
    </div>
  );
}

export default App;
