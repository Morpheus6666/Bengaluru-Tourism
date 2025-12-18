import React from "react";
import { useState } from "react";

function Feedback() {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!feedback.trim()) return;

    setFeedback("");       // textarea clr
    setSubmitted(true);    // thank-you scr
  };

  return (
    <>
    
      <button className="feedback-btn" onClick={() => setOpen(true)}>
        Give Feedback
      </button>

      {open && (
        <div
          className="popup-overlay"
          onClick={() => setOpen(false)}
          >
          <div
            className="popup-box"
            onClick={(e) => e.stopPropagation()}>
            <h3>Feedback</h3>


            {!submitted ? (
              <>
              <label>Give your feedback</label>
                <textarea
                  rows="5"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Write your feedback..."
                />
                <button className="submit-btn" onClick={handleSubmit}>
                  Submit
                </button>
              </>
            ) : (
              <p className="thank-you">
                Thank you for your feedback! 😊
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Feedback;