import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu";
import Dropdown from "./Dropdown";
import "../App.css";

class App extends Component {
  state = {
    users: null,
    albums: null,
    userSelected: null,
    photos: null
  };

  componentDidMount() {
    this.getUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userSelected !== this.state.userSelected) {
      this.setState({ photos: null });
    }
  }

  getUsers = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (response.status === 200) {
      let json = await response.json();
      let users = json.map(({ name, id }) => ({
        name,
        id
      }));
      return this.setState({ users });
    }

    throw new Error(response.status);
  };

  getAlbums = async user => {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${user}`
    );

    if (response.status === 200) {
      let json = await response.json();
      let albums = json.map(({ userId, title, id }) => ({
        userId,
        title,
        id
      }));
      return this.setState({ albums });
    }

    throw new Error(response.status);
  };

  getPhotos = async album => {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${album}`
    );

    if (response.status === 200) {
      let json = await response.json();
      let photos = json.map(({ url, title, id }) => ({
        url,
        title,
        id
      }));
      return this.setState({ photos });
    }

    throw new Error(response.status);
  };

  setUser = user => {
    this.setState({ userSelected: user.name });
    this.getAlbums(user.id);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col sm={3}>
            <Menu setUser={this.setUser} usersData={this.state.users} />
          </Col>

          <Col>
            {this.state.albums && (
              <Dropdown
                photos={this.state.photos}
                getPhotos={this.getPhotos}
                userName={this.state.userSelected}
                albums={this.state.albums}
              />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
