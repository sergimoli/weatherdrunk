import React from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation(["translation"]);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  return (
    <nav className="navbar bg-dark text-light mb-5">
      <div className="container-fluid">
        <h3 className="mx-auto">{t("big_header")}</h3>
      </div>
    </nav>
  );
}

export default Header;
