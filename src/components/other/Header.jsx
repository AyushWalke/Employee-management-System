import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!props.data) {
      setUsername("Admin");
    } else {
      setUsername(props.data.firstName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem('loggedInUser', '');
    console.log('header props', props);
    props.changeUser('');
  }

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">{username}👋</span>
      </h1>
      <button onClick={handleLogout} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded ">
        Log out
      </button>
    </div>
  );
};

export default Header;
