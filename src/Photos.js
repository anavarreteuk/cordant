import React from "react";
import { Container, Row } from "react-bootstrap";
import Photo from "./Photo";
const Photos = props => {
  return (
    <div className="photosWrapper">
      <Row>
        {props.photos.map(photo => (
          <Photo key={photo.id} photoItem={photo} />
        ))}
      </Row>
    </div>
  );
};

export default Photos;
