import { Card, Container } from "react-bootstrap";
import CardDeck from "react-bootstrap/CardDeck";
import { Component } from "react";
import books from "../data/history.json";

import "../App.css";

class LatestReleases extends Component {
  render() {
    return (
      <>
        {" "}
        {/* empty fragment */}
        <Container>
          <CardDeck>
            {books.map((book) => (
              <div className="book-card" key={book.asin}>
                <Card>
                  <div className="book-cover">
                    <Card.Img variant="top" src={book.img} />
                  </div>
                  <Card.Body>
                    <Card.Title className="book-title">{book.title}</Card.Title>
                    <div className="book-price">{book.price} Eur</div>
                  </Card.Body>
                  <Card.Footer>
                    <small>{book.category}</small>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </CardDeck>
        </Container>
      </>
    );
  }
}
export default LatestReleases;
