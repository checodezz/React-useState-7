import "./App.css";
import { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [displayFeedback, setDisplayFeedback] = useState("");
  const clickHandler = () => {
    setDisplayFeedback(feedback);
    setFeedback("");
  };

  return (
    <div>
      <label htmlFor="feedback">Give your feedback: </label>
      <textarea
        id="feedback"
        rows={3}
        cols={35}
        value={feedback}
        onChange={(event) => setFeedback(event.target.value)}
      />
      <button onClick={clickHandler}>Submit</button>
      {displayFeedback && <p>Your feedback is: {displayFeedback}</p>}
    </div>
  );
};

const MovieReview = () => {
  const [review, setReview] = useState("");
  const [displayReview, setDisplayReview] = useState("");
  const clickHander = () => {
    setDisplayReview(review);
    setReview("");
  };
  return (
    <div>
      <label htmlFor="review">Write your movie review:</label>
      <textarea
        id="review"
        rows={3}
        cols={35}
        value={review}
        onChange={(event) => setReview(event.target.value)}
      />
      <button onClick={clickHander}>Submit Review</button>
      {displayReview && <p>Your review: {displayReview}</p>}
    </div>
  );
};

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  const clickHandler = () => {
    alert("message: " + greeting.toUpperCase() + "!");
  };
  return (
    <div>
      <label htmlFor="greetings">Enrter your message: </label>
      <textarea
        id="greetings"
        rows={3}
        cols={30}
        value={greeting}
        onChange={(event) => setGreeting(event.target.value)}
      />
      <button onClick={clickHandler}>Display Message</button>
    </div>
  );
};

const Notes = () => {
  const [note, setCurrentNote] = useState("");
  const [displayNote, setDisplayNote] = useState("");

  const clickHandler = () => {
    setDisplayNote(note);
    setCurrentNote("");
  };
  return (
    <div>
      <label htmlFor="notes">Take your notes: </label>
      <textarea
        id="notes"
        value={note}
        rows={3}
        cols={35}
        onChange={(event) => setCurrentNote(event.target.value)}
      />
      <button onClick={clickHandler}>Save notes</button>
      {displayNote && <p>Notes saved: {displayNote}</p>}
    </div>
  );
};

const Questions = () => {
  const [question, setQuestion] = useState("");
  const [displayQuestion, setDisplayQuestion] = useState("");

  const clickHandler = () => {
    if (question.includes("?")) {
      setDisplayQuestion(question);
    } else {
      setDisplayQuestion(question + "?");
    }
    setQuestion("");
  };

  return (
    <div>
      <label htmlFor="question">Enter your question:</label>
      <textarea
        id="question"
        rows={3}
        cols={35}
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
      />
      <button onClick={clickHandler}>Submit Question</button>
      <p>{displayQuestion && <p>Your question: {displayQuestion}</p>}</p>
    </div>
  );
};

const Comments = () => {
  const [comment, setComment] = useState("");
  const [displayComment, setDisplayComment] = useState("");
  const clickHandler = () => {
    setDisplayComment(`//${comment}`);
    setComment("");
  };
  return (
    <div>
      <label htmlFor="comment">Leave your comment: </label>
      <textarea
        id="comment"
        rows={3}
        cols={35}
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <button onClick={clickHandler}>Submit Comment</button>
      {displayComment && <p>{displayComment}</p>}
    </div>
  );
};
export default function App() {
  return (
    <main>
      <Feedback />
      <br />
      <br />
      <MovieReview />
      <br />
      <br />
      <Greeting />
      <br />
      <br />
      <Notes />
      <br />
      <br />
      <Questions />
      <br />
      <br />
      <Comments />
    </main>
  );
}
