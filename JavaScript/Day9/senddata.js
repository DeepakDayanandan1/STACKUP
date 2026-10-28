async function createPost() {
    try {
        const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "JavaScript Notes",
                body: "Learning Fetch API",
                userId: 1
            })
        });
        if (!response.ok) {
            throw new Error("Unable to create post");
        }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }}
        createPost();