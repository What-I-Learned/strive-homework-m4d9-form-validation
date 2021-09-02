import { ListGroup, ListGroupItem } from "react-bootstrap";

const SingleComment = ({ singleComment }) => (
  <ListGroup.Item key={singleComment._id}>
    {singleComment.comment}
  </ListGroup.Item>
);
export default SingleComment;
