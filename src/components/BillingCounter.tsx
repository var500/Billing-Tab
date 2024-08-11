import { useState } from "react";

export default function BillingCounter({
  friend,
  friendList,
  setFriendList,
}: {
  friend: string;
  friendList: {
    name: string;
    profile: string;
    calculation: string;
    status: string;
  }[];
  setFriendList: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        profile: string;
        calculation: string;
        status: string;
      }[]
    >
  >;
}) {
  const [yourExpense, setYourExpense] = useState<number>(0);
  const [totalBill, setTotalBill] = useState<number>(0);
  const [payer, setPayer] = useState<string>("You");

  const handlePayerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPayer(event.target.value);
  };

  const handleSplitBill = () => {
    if (!(totalBill <= yourExpense || totalBill <= 0)) {
      if (payer === "You") {
        const updatedFriendList = friendList.map((item) => {
          if (item.name === friend) {
            return {
              ...item,
              calculation: `${friend} owe's you ${totalBill - yourExpense} Rs`,
              status: "credit",
            };
          }
          return item;
        });

        setFriendList(updatedFriendList);
      } else {
        const updatedFriendList = friendList.map((item) => {
          if (item.name === friend) {
            return {
              ...item,
              calculation: `You owe ${yourExpense} Rs to ${friend}`,
              status: "debit",
            };
          }
          return item;
        });

        setFriendList(updatedFriendList);
      }
    }
  };

  return (
    <div className="bill-card">
      <p className="bill-title">SPLIT THE BILL WITH {friend.toUpperCase()}</p>
      <div className="flex-rows">
        <label>🤑 Bill Value</label>
        <input
          value={totalBill}
          onChange={(e) => setTotalBill(parseInt(e.target.value) || 0)}
          placeholder="100₹"
          inputMode="numeric"
          pattern="[0-9]*"
          size={5}
          style={{ textAlign: "right", width: "100px" }}
        />
      </div>
      <div className="flex-rows">
        <label>🧍‍♂️ Your Expense</label>
        <input
          value={yourExpense}
          onChange={(e) => setYourExpense(parseInt(e.target.value) || 0)}
          inputMode="numeric"
          placeholder="100₹"
          pattern="[0-9]*"
          size={5}
          style={{ textAlign: "right", width: "100px" }}
        />
      </div>
      <div className="flex-rows">
        <label>🧍‍♀️{friend}'s Expense</label>
        <input
          value={totalBill - yourExpense}
          disabled
          inputMode="numeric"
          placeholder="100₹"
          pattern="[0-9]*"
          size={5}
          style={{
            textAlign: "right",
            width: "100px",
          }}
        />
      </div>

      <div className="flex-rows">
        <label>💳 Who is Paying</label>
        <select style={{ width: "125px" }} onChange={handlePayerChange}>
          <option>You</option>
          <option>{friend}</option>
        </select>
      </div>

      <button
        style={{
          width: "125px",
          marginTop: "4px",
          fontSize: "14px",
          fontWeight: 500,
          alignSelf: "flex-end",
          color: "black",
        }}
        onClick={handleSplitBill}
      >
        Split bill
      </button>
    </div>
  );
}
