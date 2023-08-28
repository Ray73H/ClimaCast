import React, { useState, useEffect } from "react";
import PopOutMenu from "./popOutMenu";

const SettingsIcon = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !event.target.closest(".pop-out-menu")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div className="settings-icon">
      <button onClick={toggleMenu}>
        <img
          src="/assets/icons/settings.png"
          alt="settings"
          width={37}
          height={37}
          className="rounded-full"
        />
      </button>
      {menuOpen && <PopOutMenu />}
    </div>
  );
};

export default SettingsIcon;
