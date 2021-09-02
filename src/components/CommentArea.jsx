import { ListGroup, ListGroupItem } from "react-bootstrap";
import React from "react";

class CommentArea extends React.Component {
  render() {
    return (
      <div
        className="comment-area"
        // onMouseMove={(e) => console.log(e)}
        onClick={(e) => {
          console.log(e.clientX);
          e.target.classList.toggle("open");
        }}
      >
        <div class="comment-area-title">Comment Area</div>
        <div class="comment-container-inner"></div>
      </div>
    );
  }
}
export default CommentArea;
