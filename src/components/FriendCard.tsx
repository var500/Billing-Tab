import React from "react";

export default function FriendCard({
  profile,
  billing,
  name,
  children,
}: {
  profile: string;
  name: string;
  billing: (name: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="friends-card">
      <div className="image-name-container">
        <img src={profile} alt="profile" height={"60px"} width={"60px"} />

        <div className="card-content">
          <span>{name}</span>
          {children}
        </div>
      </div>

      <button onClick={() => billing(name)}>Select</button>
    </div>
  );
}
