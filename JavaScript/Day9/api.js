async function getPost() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );
        if (!response.ok) {
                throw new Error("HTTP error: " + response.status);
            }

            const data = await response.json();
            console.log(data);
    } catch (error) {
        console.log("Unable to fetch data:", error.message);
    }}
    getPost();
