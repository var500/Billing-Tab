import { useState } from "react";

export default function AddFriend({
  visible,
  handleAddMenu,
  handleUpdateFriendList,
}: {
  visible: boolean;
  handleAddMenu: () => void;
  handleUpdateFriendList: (name: string, profile: string) => void;
}) {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [error, setError] = useState(false);

  const handleClearFields = () => {
    setError(false);
    setName("");
    setProfile("");
    handleAddMenu();
  };

  return (
    <>
      {visible ? (
        <>
          <div className="add-friend">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>👯Friend Name</label>
              <input
                placeholder="Friends Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>📷Image URL</label>
              <input
                placeholder="link"
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
              />
            </div>

            <button
              onClick={() => {
                if (!name || !profile) {
                  setError(true);
                  return;
                }
                handleUpdateFriendList(name, profile);
                handleClearFields();
              }}
              style={{
                width: "60%",
                height: "30px",
                padding: "4px 8px",
                fontSize: "14px",
                alignSelf: "flex-end",
              }}
            >
              Add{" "}
            </button>
            {error ? (
              <span
                style={{ textAlign: "center", color: "red", fontWeight: 600 }}
              >
                All fields are Required!
              </span>
            ) : null}
          </div>
          <button
            onClick={handleClearFields}
            style={{
              width: "30%",
              marginTop: "4px",
              fontSize: "12px",
              alignSelf: "flex-end",
            }}
          >
            Close
          </button>
        </>
      ) : null}
    </>
  );
}
