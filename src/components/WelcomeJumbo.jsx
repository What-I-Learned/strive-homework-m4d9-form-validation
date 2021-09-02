import { Container, Jumbotron } from "react-bootstrap";
import { Component } from "react";

import "../App.css";

class MyWelcomeJumbo extends Component {
  render() {
    return (
      <Jumbotron fluid className="welcome-jumbo">
        <Container className="inner-jumbo">
          <h1>Welcome to center of past mistakes and victories</h1>
          <p>This is a store for the ones who love history</p>
        </Container>
      </Jumbotron>
    );
  }
}
export default MyWelcomeJumbo;
