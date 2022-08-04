import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export function MainHeader() {
  const [userMenuDropdownActive, setUserMenuDropdownActive] = useState<boolean>(false);
  const handleUserMenuDropdown = () => {
    setUserMenuDropdownActive(!userMenuDropdownActive)
  }
  return (
    <header className="mainHeader">
      <div className="mainHeader__container">
        <img
          src="assets/images/megak_logo.webp"
          alt="Logo Mega Kursu"
          className="mainHeader__logo"
        />
        <div className="mainHeader__userMenuContainer">
          <div className="mainHeader__userMenu">
            <img
              src="assets/images/example_user.png"
              alt="Przykładowy użytkownik"
              className="mainHeader__userImage"
            />
            <span className="mainHeader__userName">Jan Kowalski</span>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="mainHeader__arrowDown"
              onClick={handleUserMenuDropdown}
            />
            <div className={`mainHeader__userMenuDropdown ${userMenuDropdownActive ? 'active' : ''}`}>
              <div>
                <p>Konto</p>
              </div>
              <div>
                <p>Wyloguj</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
