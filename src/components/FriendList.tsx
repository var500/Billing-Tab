import { useState } from "react";
import FriendCard from "./FriendCard";
import AddFriend from "./AddFriend";

export default function FriendList({
  handleBilling,
  friendList,
}: {
  friendList: {
    name: string;
    profile: string;
    calculation: string;
    status: string;
  }[];
  handleBilling: (name: string) => void;
}) {
  const [visible, setVisible] = useState(false);

  const handleAddMenu = () => {
    setVisible(false);
  };

  const handleUpdateFriendList = (name: string, profile: string) => {
    const newEntry = {
      name: name,
      profile: profile,
      calculation: `You and ${name} are Even`,
      status: "",
    };

    friendList.push(newEntry);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minWidth: "300px",
        }}
      >
        {friendList.map((item) => {
          return (
            <FriendCard
              key={item.name}
              name={item.name}
              profile={item.profile}
              billing={handleBilling}
            >
              <span
                style={{
                  color:
                    item.status === "credit"
                      ? "green"
                      : item.status === "debit"
                      ? "red"
                      : "",
                }}
              >
                {item.calculation}
              </span>
            </FriendCard>
          );
        })}
      </div>
      <button onClick={() => setVisible(true)}>Add Friend</button>

      <AddFriend
        visible={visible}
        handleAddMenu={handleAddMenu}
        handleUpdateFriendList={handleUpdateFriendList}
      />
    </div>
  );
}
