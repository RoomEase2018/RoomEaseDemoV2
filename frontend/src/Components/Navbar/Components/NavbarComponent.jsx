
import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Icon, Dropdown } from "semantic-ui-react";
import "../Styles/Navbar.css";

const NavbarComponent = ({ logout, active, handleClick }) => {
  const linkButtons = [
    { name: "profile", icon: "user circle outline" },
    { name: "dashboard", icon: "dashboard" },
    // { name: "apartment", icon: "users" }
  ];

  return (
    <div className="navbar_container">
      <Menu secondary compact>
         <Menu.Item style={{paddingTop: "0", paddingBottom: "0"}}>
           <Link to="/">
             <img
              alt="roomease-logo"
              className="navbar_logo_icon"
              src="https://i.imgur.com/m6bz64S.png"
              height="75px"
            />
          </Link>
        </Menu.Item>
        {linkButtons.map((button, idx) => (
          <Menu.Item
            key={idx}
            name={`${button.name}`}
          >
            <Link to={`/${button.name}`} style={{color: "#A2DEFD"}}>
              <Icon link size="large" name={`${button.icon}`} />
              {button.name}
            </Link>
          </Menu.Item>
        ))}
        </Menu>

        <div style={{marginRight: "2em"}}>
          <Dropdown icon="plus" size="large" direction="left" style={{marginRight: "1em", color: "#A2DEFD"}} floating>
            <Dropdown.Menu>
              <Dropdown.Item
                label={<Icon name="add to calendar" color="red" />}
                onClick={handleClick}
                name="task"
                text="Add Task"
              />
              
              <Dropdown.Item
                label={
                  <Icon>
                    <Icon.Group>
                      <Icon name="dollar" color="blue" />
                      <Icon corner name="plus" color="blue" />
                    </Icon.Group>
                  </Icon>
                }
                onClick={handleClick}
                name="expense"
                text="Add Expense"
              />
            
              <Dropdown.Item
                label={<Icon name="add user" color="green" />}
                onClick={handleClick}
                name="roommate"
                text="Add Roommate"
              />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown icon="setting" size="large" style={{color: "#A2DEFD"}} floating direction="left">
          <Dropdown.Menu>
            <Dropdown.Item
              label={<Icon name="setting" color="blue" />}
              onClick={handleClick}
              name="apartment"
              text="Edit Apartment Profile"
            />
            <Dropdown.Item
              label={<Icon name="setting" color="red" />}
              onClick={handleClick}
              name="user"
              text="Edit User Profile"
            />
            <Dropdown.Item
              onClick={logout}
              label={<Icon name="power" color="teal" />}
              text="Sign Out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavbarComponent;