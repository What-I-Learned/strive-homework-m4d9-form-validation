import { Component } from "react";
import { Form, ListGroup, Spinner, Button } from "react-bootstrap";
import SingleComment from "./SingleComment";

class BookComments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.book.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1ZTJkNTI2MjAwMTViNmRjOWQiLCJpYXQiOjE2Mjk5ODUyMzksImV4cCI6MTYzMTE5NDgzOX0.mS3Qwvrlsn7oJIK8hVVuKRbXkVR6kVchtAJ7C4UySkI",
          },
        }
      );
      if (response.ok) {
        let commentsData = await response.json();
        this.setState({
          comments: commentsData,
          isLoading: false,
        });
        console.log(this.state.commentsData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleSubmit = async (e) => {
    // with async/await
    e.preventDefault();
    console.log(this.state.reservation);

    try {
      // the place for every operation that might fail outside of your control

      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.book.asin}`,
        {
          method: "POST",
          body: JSON.stringify(this.state.reservation),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1ZTJkNTI2MjAwMTViNmRjOWQiLCJpYXQiOjE2Mjk5ODUyMzksImV4cCI6MTYzMTE5NDgzOX0.mS3Qwvrlsn7oJIK8hVVuKRbXkVR6kVchtAJ7C4UySkI",
          },
        }
      );

      if (response.ok) {
        console.log(response);
        // this.setState({
        //   comments: [],
        // });
      } else {
        alert("your reservation was NOT saved correctly!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  handleInput = (e, propertyName) => {
    this.setState({
      ...this.state,
      // copying over name, phone, numberOfPeople, smoking etc.
      [propertyName]: propertyName.push(e.target.value),
    });
  };

  render() {
    return (
      <div className="text-center">
        <h2>Comments</h2>
        {this.state.isLoading && (
          <Spinner animation="border" variant="success" className="mx-auto" />
        )}
        {this.state.comments.length == 0 && !this.state.isLoading ? (
          <div>No comments</div>
        ) : (
          <ListGroup>
            {this.state.comments.map((comment) => (
              <SingleComment singleComment={comment} />
            ))}
          </ListGroup>
        )}
        <Form className="mt-5" onSubmit={this.handleSubmit}>
          <Form.Control
            as="textarea"
            rows={3}
            // value={this.state.comments[comments.length - 1]}
            onChange={(e) => this.handleInput(e, "comments")}
            placeholder="Leave a comments about the book"
          />
          <Button variant="primary" type="submit">
            Submit Comment
          </Button>
        </Form>
      </div>
    );
  }
}

export default BookComments;
