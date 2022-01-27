import { FC, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { IconContext } from "react-icons";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import "./NavBar.css";

const TopBar: FC = () => {
  const [dark, setDark] = useState(true);

  const handleTheme = () => {
    setDark(!dark);
  };

  return (
    <Navbar
      bg={dark ? "dark" : "ligth"}
      variant={dark ? "dark" : undefined}
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="/">dev/matheus</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/post">Post</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              About
            </Nav.Link>
          </Nav>
          {dark ? (
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <BsFillSunFill onClick={handleTheme} className="theme-button" />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ color: "dark", size: "30px" }}>
              <BsMoonFill onClick={handleTheme} className="theme-button" />
            </IconContext.Provider>
          )}
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant={dark ? "btn btn-light" : "btn btn-dark"}>
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
