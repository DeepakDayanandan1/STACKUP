/* 1. Create a button to show/hide content
   2. Display a paragraph of text button is clicked
   3. Hide the paragraph when the button is clicked again */

import { useState } from "react";

function ShowHideApp() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }
  return (
    <div>
      <br /><br />
        <button className="btn" onClick={toggleVisibility}>
          {isVisible ? "Hide" : "Show"} Content
        </button>
        <br /><br />
        {isVisible && (
          <p>This is the content that can be shown or hidden.</p>
        )}
        <br /><br />
      </div>
  );
}

export default ShowHideApp;