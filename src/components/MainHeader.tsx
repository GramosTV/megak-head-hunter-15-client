import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

export function MainHeader() {
  const [userMenuDropdownActive, setUserMenuDropdownActive] =
    useState<boolean>(false);
  const { user, signOut } = useContext(AuthContext);
  const handleUserMenuDropdown = () => {
    setUserMenuDropdownActive(!userMenuDropdownActive);
  };
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
              src={
                user?.ghUsername
                  ? `https://github.com/${user?.ghUsername}.png`
                  : "/assets/images/example_user.png"
              }
              alt="Przykładowy użytkownik"
              className="mainHeader__userImage"
            />
            <span className="mainHeader__userName">{`${
              user?.firstName ? user.firstName : user?.email
            } ${user?.lastName || ""}`}</span>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="mainHeader__arrowDown"
              onClick={handleUserMenuDropdown}
            />
            <div
              className={`mainHeader__userMenuDropdown ${
                userMenuDropdownActive ? "active" : ""
              }`}
            >
              <div>Konto</div>
              <div onClick={() => signOut()}>Wyloguj</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
