import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Menu = props => {
  return (
    <ListGroup>
      {props.usersData &&
        props.usersData.map(user => (
          <ListGroupItem onClick={() => props.setUser(user)} key={user.id}>
            {user.name}
          </ListGroupItem>
        ))}
    </ListGroup>
  );
};

export default Menu;
