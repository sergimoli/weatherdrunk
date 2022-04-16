import { Button } from "bootstrap";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  const { t, i18n } = useTranslation(["translation"]);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Weather drunk navigator</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/yourubication">
                <Nav.Link>{t("header_pred_1")}</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sergiubication">
                <Nav.Link>{t("header_pred_2")}</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>{t("header_pred_3")}</Nav.Link>
              </LinkContainer>
              <NavDropdown title={t("lang")} id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={() => changeLanguage("en")}>
                  {t("lang_english")}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage("es")}>
                  {t("lang_castellano")}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage("ca")}>
                  {t("lang_catala")}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
