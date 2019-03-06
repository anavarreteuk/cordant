import React from 'react'
import { Col, Card } from "react-bootstrap";


const Photo = (props) => {
  return (
      <Col sm={3}>
          <Card style={{ width: "10rem" }}>
              <Card.Img src={props.photoItem.url} />
          </Card>
      </Col>
  )
}

export default Photo
