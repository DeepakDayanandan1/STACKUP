/* Create a Welcome Message App PRACTICE 
    • Create an input field to enter a username.
    • Use useState() to store the username. 
    • Use value to connect the state with the input.
    • Use onChange to update the state. 
    • Display Welcome, username inside a paragraph whenever the user types. */

import { useState } from 'react';

function WelcomeMessage() {
  const [username, setUsername] = useState('');
  return (
    <div>
        <br /><br />
        <input
            type="text"
            className="input-box"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <p>Welcome, {username}!</p>
    </div>
  );
}

export default WelcomeMessage;