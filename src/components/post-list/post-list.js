import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";

import "./post-list.css";

const PostList = ({ posts, onDel, onToggleImportant, onToggleLike }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          {...itemProps}
          onDelete={() => onDel(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLike={() => onToggleLike(id)}
        />
      </li>
    );
  });

  return <ListGroup className="app-list"> {elements}</ListGroup>;
};

export default PostList;
