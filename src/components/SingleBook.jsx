import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { Component } from "react";

import BookComments from "./BookComments";

class SingleBook extends Component {
  state = {
    selected: false,
    selectedBook: null,
  };

  render() {
    return !this.state.selected ? (
      <Col xs={3} md={3}>
        <Card
          className="book-card"
          key={this.props.singleBook.asin}
          onClick={() =>
            this.setState({
              selected: !this.state.selected,
              selectedBook: this.props.singleBook,
            })
          }
          style={{ border: this.state.selected ? "3px solid red" : "none" }}
        >
          <div className="book-card-image">
            <Card.Img variant="top" src={this.props.singleBook.img} />
          </div>
          <Card.Body>
            <Card.Title>{this.props.singleBook.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ) : (
      <Col xs={12}>
        <Row>
          <Col xs={6}>
            <Card
              key={this.props.singleBook.asin}
              onClick={() => this.setState({ selected: !this.state.selected })}
              style={{ border: this.state.selected ? "3px solid red" : "none" }}
            >
              <Card.Img variant="top" src={this.props.singleBook.img} />
              <Card.Body>
                <Card.Title>{this.props.singleBook.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            {/* here goes the comments */}
            <BookComments book={this.state.selectedBook} />
          </Col>
        </Row>
      </Col>
    );
  }
}

// const SingleBook = ({ singleBook }) => (
//   <Card style={{ width: "18rem" }} key={singleBook.asin}>
//     <Card.Img variant="top" src={singleBook.img} />
//     <Card.Body>
//       <Card.Title>{singleBook.title}</Card.Title>

//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body>
//   </Card>
// );
export default SingleBook;
