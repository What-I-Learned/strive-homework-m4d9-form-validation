import Books from "../data/history";

import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import MyWelcomeJumbo from "./WelcomeJumbo";
import BookList from "./BookList";
import CommentArea from "./CommentArea";

function Home() {
  return (
    <>
      <header className="bookstore-header">
        <MyNavbar title="History for the mind" color="light" />
        <MyWelcomeJumbo />
      </header>
      <main>
        <BookList booklist={Books} />
        <CommentArea />
      </main>
      <footer className="w-100"></footer>
    </>
  );
}

export default Home;
