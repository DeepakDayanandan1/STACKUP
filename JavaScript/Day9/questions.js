/* Fetch one post and display its title. */

/* async function fetchPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error("Unable to fetch post");
        }
        const data = await response.json();
        console.log(data.title);
    } catch (error) {
        console.log(error.message);
    }
}
fetchPost(); */

/* Fetch an array of posts and display its length. */

/* async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Unable to fetch posts");
        }
        const data = await response.json();
        console.log(data.length);
    } catch (error) {
        console.log(error.message);
    }
}
fetchPosts(); */

/* Handle HTTP errors by checking response.ok . */

/* async function fetchPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }
        const data = await response.json();
        console.log(data.title);
    } catch (error) {
        console.log("Unable to fetch post:", error.message);
    }
}
fetchPost(); */

/* Send a POST request with a JSON body. */

async function sendPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "My Post",
                body: "This is the content of my post.",
                userId: 1
            })
        });
        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Unable to send post:", error.message);
    }
}
sendPost();
