import React, { Component } from "react";
import Photos from "./Photos";

export default class Dropdown extends Component {
  state = {
    value: null
  };

  handleChange = event => {
    var index = event.target.selectedIndex;
    var optionElement = event.target.childNodes[index];
    var option = optionElement.getAttribute("data-id");
    this.setState({
      albumToTarget: option,
      value: event.target.value
    });
    this.props.getPhotos(option);
  };

  render() {
    return (
      <div>
        <h2>{this.props.userName}</h2>
        <select onChange={event => this.handleChange(event)}>
          <option default>Albums</option>
          {this.props.albums.map(album => (
            <option data-id={album.id} value={album.title} key={album.id}>
              {album.title}
            </option>
          ))}
        </select>

        {this.props.photos &&
          this.props.photos.map(photo => (
            <Photos key={photo.id} photo={photo} />
          ))}
      </div>
    );
  }
}
