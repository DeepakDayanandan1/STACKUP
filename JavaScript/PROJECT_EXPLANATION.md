# Project Explanation Guide

This guide explains the To-Do List, Quiz App, and Weather App in presentation-friendly language. The line numbers refer to the current source files; blank lines are included where useful to show the code's sections.

## 1. To-Do List

**Source:** [ToDoList.html](./JSMiniProject-ToDoList/ToDoList.html)

This is a single-page app: the HTML, CSS, and JavaScript are all in one file. It lets a user add tasks, mark them complete, delete them, and keep the list in that browser using `localStorage`.

### Page setup and styling — lines 1–188

- **Lines 1–7:** Start an HTML5 document, set the page language to English, define the character encoding and responsive viewport, set the title, and begin the embedded CSS.
- **Lines 8–10:** Apply `box-sizing: border-box` to every element so width and height calculations include padding and borders.
- **Lines 12–20:** Set the page font, colors, spacing, minimum height, and readable line spacing.
- **Lines 22–26:** Center the main content and limit its width so the list remains easy to read.
- **Lines 27–34:** Style the main heading's alignment, color, size, weight, and spacing.
- **Lines 35–43:** Color highlighted heading text and spans blue.
- **Lines 44–50:** Start the form styles; make the input and button share a row with a gap.
- **Lines 51–59:** Let the input use remaining row space and style its padding, border, rounded left corners, font, and transition.
- **Lines 60–64:** Show a blue border and subtle focus ring when the input is selected.
- **Lines 66–68:** Set the placeholder text color.
- **Lines 70–80:** Style the Add Task button with padding, a blue background, white text, rounded right corners, and a pointer cursor.
- **Lines 82–84:** Darken the button when the pointer hovers over it.
- **Lines 86–88:** Slightly shrink the button while it is being pressed.
- **Lines 90–93:** Add a visible keyboard-focus outline for accessibility.
- **Lines 95–100:** Remove the default list markers and spacing from the task list.
- **Lines 102–120:** Style each task as a white, bordered, rounded row. Flexbox aligns the checkbox, text, and delete button; hover styling highlights and shifts the row.
- **Lines 121–123:** Make completed task rows slightly transparent.
- **Lines 125–132:** Set checkbox size and behavior, prevent it from shrinking, and use the app's blue accent color.
- **Lines 134–143:** Let task text fill the available space. Completed text is crossed out and muted.
- **Lines 145–166:** Style the Delete button in red, change its appearance on hover, and show a focus outline for keyboard users.
- **Lines 168–178:** Center and space the empty-list message.
- **Lines 180–188:** Style the task-count summary and separate it from the list with a top border.

### Page structure — lines 190–207

- **Line 190:** Begin the visible page body.
- **Line 191:** Create the centered content container.
- **Line 192:** Show the page heading; the nested span gives “To-Do List” the highlighted style.
- **Lines 194–197:** Create the task form, the text input, and the submit button. The IDs let JavaScript find these elements.
- **Line 199:** Create the unordered list where JavaScript will insert task rows.
- **Lines 201–205:** Show the total, pending, and completed task counters. Their inner spans start at zero and are updated by JavaScript.
- **Lines 206–207:** Close the container and leave a blank line before the script.
- **Line 208:** Begin the embedded JavaScript.

### Task data and rendering — lines 208–260

- **Line 209:** Load the saved JSON task array from browser storage. If there is no saved list, start with an empty array.
- **Lines 211–217:** Find the form, input, list, and counter elements once and keep references to them.
- **Lines 219–221:** Begin `renderTasks()`, which redraws the displayed list, first clearing old rows.
- **Lines 223–231:** If there are no tasks, insert an empty-state message, update the counters, and stop this function with `return`.
- **Lines 233–236:** Loop through every task, create a list item, apply its completed style when needed, and store its current index in a `data-index` attribute.
- **Lines 238–241:** Create a checkbox, apply its CSS class, and check it when the task is already complete.
- **Lines 243–245:** Create the task label. Its class reflects completion, and `textContent` safely displays the task text.
- **Lines 247–250:** Create a Delete button, set its label, and store the task index on it.
- **Lines 252–257:** Add the checkbox, label, and Delete button to the row, then add the row to the page.
- **Line 259:** Refresh the counters after rendering the task rows.

### Saving, counters, and task operations — lines 262–302

- **Lines 262–264:** `saveTasks()` serializes the task array as JSON and writes it to `localStorage` under the key `todo-list`.
- **Lines 266–272:** `updateStats()` counts all tasks, counts completed tasks with `filter()`, and displays total, completed, and pending counts.
- **Lines 274–280:** `addTask(text)` trims surrounding whitespace. If the result is empty, it shows a message and returns without adding a task.
- **Lines 282–289:** Add a new task object with its text and `completed: false`, save it, redraw the list, and clear the input.
- **Lines 291–296:** `toggleTask(index)` flips the selected task's completion value, saves the change, and redraws the list.
- **Lines 298–302:** `deleteTask(index)` removes one task with `splice()`, saves the updated array, and redraws the list.

### User events and startup — lines 304–336

- **Lines 304–317:** Add one click listener to the whole task list. This is event delegation: it handles clicks on task rows and their children without attaching a new listener to every row.
- **Lines 305–307:** Find the nearest task row for the clicked element.
- **Lines 309–313:** If the click was on Delete, read the button's saved index, delete that task, and return so the click is not processed a second time.
- **Lines 315–317:** If the click was on task text, read its row index and toggle its completion.
- **Lines 319–327:** Listen for checkbox changes. Find the containing row and toggle the corresponding task.
- **Lines 329–333:** Listen for form submission, prevent the browser's default page reload, and pass the input value to `addTask()`.
- **Line 334:** Render the initial list as soon as the script runs, including tasks loaded from storage.
- **Line 335:** Close the script.
- **Lines 336–337:** Close the body and HTML document.

**How to present the flow:** “The app loads saved tasks, draws them on the page, and updates both the screen and local storage whenever I add, complete, or delete a task.”

## 2. Quiz App

There are two versions in this workspace: a browser version in [QuizApp.html](./JSMiniProject-QuizApp/QuizApp.html) and a terminal version in [QuizApp.js](./QuizApp.js). Both ask the same five questions and calculate a score, but they use different input and output methods.

### Browser version — [QuizApp.html](./JSMiniProject-QuizApp/QuizApp.html)

- **Lines 1–9:** Set up the HTML page, browser metadata, title, body, and embedded JavaScript.
- **Lines 10–41:** Define the `questions` array. Each object contains:
  - `question`: the question shown to the user.
  - `options`: the four choices, with `\n` creating new lines.
  - `answer`: the answer text shown when a response is incorrect.
  - `ansOption`: the number used to check the user's selection.
- **Lines 43–43:** Print a heading in the browser developer console.
- **Lines 45–47:** Initialize counters for total, correct, and incorrect answers.
- **Lines 49–55:** Loop through the questions, print each question and its options to the console, and use the browser's `prompt()` dialog to collect an answer. The string concatenation and `\n\n` make the prompt easier to read.
- **Line 55:** Print the submitted choice to the console for demonstration/debugging.
- **Lines 57–61:** Compare the submitted choice with `ansOption`. If they match, show a correct-answer alert and increment total and correct counts.
- **Lines 63–69:** Otherwise, show an alert with the correct answer, print the result to the console, and increment total and incorrect counts.
- **Lines 71–76:** Print the final total, correct and incorrect counts, score, and percentage to the browser console.
- **Lines 79–80:** Show the page heading and instructions to open the browser console with F12.
- **Lines 81–82:** Close the body and HTML document.

**How to run it:** Open [QuizApp.html](./JSMiniProject-QuizApp/QuizApp.html) in a browser. Answer each prompt; the final summary appears in the developer console.

### Terminal version — [QuizApp.js](./QuizApp.js)

- **Line 1:** Import `readline-sync`, which allows a Node.js program to read a response from the terminal.
- **Lines 3–34:** Define the same five question objects and their options, answer text, and expected choice number as the browser version.
- **Line 36:** Print the quiz heading to the terminal.
- **Lines 38–40:** Initialize the total, correct, and incorrect counters.
- **Lines 42–45:** Loop through the questions, print the question and choices, then ask for the user's answer using `prompt.question()`.
- **Lines 46–49:** Compare the answer with the expected option. On a match, print feedback and increase the total and correct counters.
- **Lines 50–55:** On a mismatch, print feedback and the correct answer, then increase the total and incorrect counters.
- **Lines 58–63:** Print the final counts, score, and percentage in the terminal.

The root [package.json](./package.json) declares `readline-sync` as the dependency used by this terminal version. Run `npm install` once, then run `node QuizApp.js` from the workspace folder.

**Difference to explain:** The browser version uses `prompt()` and `alert()`; the terminal version uses `readline-sync`. Both use a loop, conditional comparison, counters, and a final percentage calculation. [Output.txt](./JSMiniProject-QuizApp/Output.txt) is an example of a completed run.

## 3. Weather App

**Project folder:** [MonthlyTask-WeatherApp/](./MonthlyTask-WeatherApp/)

The page asks for a city, sends a request to the OpenWeather API, and displays the returned city, temperature in Celsius, and weather description. It demonstrates browser events, `fetch()`, JSON, `async`/`await`, and `try`/`catch`.

### HTML page — [index.html](./MonthlyTask-WeatherApp/index.html)

- **Lines 1–3:** Declare an HTML5 page, set its language, and begin the document head.
- **Lines 4–6:** Set character encoding, responsive viewport behavior, and the browser tab title.
- **Line 7:** Load `styles.css` to format the page.
- **Lines 8–10:** Close the head and begin the body.
- **Lines 11–12:** Create the main container and page heading.
- **Lines 14–17:** Create the search area with a city text input and a Get Weather button. The input and button IDs are used by JavaScript.
- **Lines 19–23:** Create a weather-results section, initially hidden. Its child elements will display the city, temperature, and condition.
- **Line 25:** Create an initially hidden area for error messages.
- **Lines 26–27:** Close the page container and add spacing.
- **Line 28:** Load `config.js` first so its API-key variable exists before the application script runs.
- **Line 29:** Load the weather-app behavior from `app.js`.
- **Lines 30–31:** Close the body and HTML document.

### JavaScript behavior — [app.js](./MonthlyTask-WeatherApp/app.js)

- **Line 1:** Read the API key from the global `window.WEATHER_API_KEY` variable assigned by `config.js`.
- **Line 2:** Store the OpenWeather current-weather endpoint.
- **Line 4:** Wait for the browser to finish building the HTML before looking up or using page elements.
- **Lines 5–8:** Find the city input, button, result section, and error-message area.
- **Lines 10–15:** Listen for button clicks, trim whitespace from the city, and request weather only if the input is not empty.
- **Lines 17–24:** Also allow the Enter key to submit. It performs the same trim and non-empty check as the button.
- **Lines 26–35:** Define the asynchronous `getWeather(city)` workflow. First hide old results and errors; then await the API data and display it. If an error is thrown, catch it and display its message.
- **Lines 37–40:** Define the asynchronous data-fetching function and stop with a clear error if no API key was configured.
- **Line 42:** Build the request URL. `encodeURIComponent()` safely encodes the city name; `units=metric` requests Celsius; `appid` supplies the API key.
- **Line 44:** Use `fetch()` to send the request and `await` the server response.
- **Lines 46–54:** Check whether the HTTP response succeeded. Report a specific message for a missing city (`404`) or rejected key (`401`); use a general message for other HTTP errors.
- **Line 56:** Parse the response body as JSON and return the resulting promise to the caller.
- **Lines 59–63:** Find the three result elements that will receive weather data.
- **Lines 64–66:** Use API response fields to display the city and country, rounded temperature, and first weather description. `textContent` inserts plain text rather than interpreting it as HTML.
- **Line 68:** Remove the `hidden` class to show successful results.
- **Lines 71–74:** Put an error message into the page and reveal the error area.
- **Lines 76–79:** Hide both the result and error areas before showing the outcome of a new search.
- **Line 80:** Close the DOM-ready callback.

### Configuration note — [config.js](./MonthlyTask-WeatherApp/config.js)

- **Line 1:** Assign the OpenWeather API key to `window.WEATHER_API_KEY`, making it available to `app.js`.

The key is embedded in a file delivered to every browser, so it is visible to anyone using the page. Do not copy the key into this guide or publish it elsewhere. For a public deployment, restrict or rotate the key and proxy API requests through a server rather than relying on a browser-side secret.

### Styling — [styles.css](./MonthlyTask-WeatherApp/styles.css)

- **Lines 1–5:** Reset default margins and padding and use predictable box sizing.
- **Lines 7–18:** Set the font and background image, cover the available screen, center the content with flexbox, and add page padding.
- **Lines 20–31:** Style the glass-like main card with translucency, rounded corners, blur, shadow, maximum width, centered text, and a subtle border.
- **Lines 33–38:** Set the heading color, spacing, size, and weight.
- **Lines 40–46:** Arrange search controls in a centered vertical flex layout with gaps and bottom spacing.
- **Lines 48–50:** Add space above the button.
- **Lines 52–63:** Set the city input's size, padding, rounded corners, colors, and focus transition.
- **Lines 65–67:** Set the input placeholder color.
- **Lines 69–73:** Change the input appearance when focused. Line 72 attempts to add a shadow, but its `box-shadow` value is not valid CSS syntax, so browsers may ignore that shadow.
- **Lines 75–90:** Style the Get Weather button's size, orange background, alignment, typography, cursor, and hover transition.
- **Lines 92–94:** Darken the button while the pointer is over it.
- **Lines 96–98:** Apply a short fade-in animation to the weather results.
- **Lines 100–109:** Define `fadeIn`: the content begins slightly transparent and lower, then becomes fully visible in its normal position.
- **Lines 111–113:** Hide elements with the `hidden` class.
- **Lines 115–119:** Style the city name.
- **Lines 121–126:** Make the temperature large, bold, and prominent.
- **Lines 128–132:** Style the weather condition and capitalize its displayed words.
- **Lines 134–141:** Style the error message with a pale background, red text, padding, rounded corners, and an animation.
- **Lines 143–147:** Define `shake`, which briefly moves the error message left and right.

**How to present the flow:** “The user enters a city and submits it. JavaScript requests current weather asynchronously, parses the JSON response, and either updates the weather display or shows a useful error.”

## Main concepts demonstrated

- **DOM manipulation:** JavaScript finds HTML elements and changes their content, classes, or children.
- **Events:** The projects respond to form submission, clicks, checkbox changes, keyboard input, or dialog input.
- **Arrays and objects:** The To-Do List stores task objects; the Quiz App stores question objects; the Weather App reads structured response data.
- **Persistence:** The To-Do List uses browser `localStorage` so tasks remain after a refresh in the same browser.
- **Asynchronous JavaScript:** The Weather App uses `fetch()`, `async`/`await`, and `try`/`catch` to work with a network response.
