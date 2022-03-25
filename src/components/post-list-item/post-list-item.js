import React, { Component } from "react";
import { Heart } from "react-bootstrap-icons";
import { HeartFill } from "react-bootstrap-icons";
import { Trash } from "react-bootstrap-icons";
import { Star } from "react-bootstrap-icons";

import "./post-list-item.css";

export default class PostListItem extends Component {
  render() {
    const {
      label,
      onDelete,
      onToggleImportant,
      onToggleLike,
      important,
      like,
    } = this.props;

    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }

    let heart = <Heart className="heart" onClick={onToggleLike} />;
    if (like) {
      heart = <HeartFill className="heart" onClick={onToggleLike} />;
    }

    return (
      <div className={classNames}>
        <span className="app-list-item-label " onClick={onToggleLike}>
          {label}
        </span>
        <div className="d-flex justify-conten-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={onToggleImportant}
          >
            <Star className="btn-star" />
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <Trash />
          </button>
          {heart}
        </div>
      </div>
    );
  }
}
