import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";
// import books from "../data/history.json";

const BookList = ({ booklist }) => (
  <Container>
    <Row>
      {booklist?.map((book) => (
        <SingleBook singleBook={book} />
      ))}
    </Row>
  </Container>
);
export default BookList;
