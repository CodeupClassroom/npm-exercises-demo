export default (post) => {
    const url = 'https://my-json-server.typicode.com/typicode/demo/posts';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    };
    return fetch(url, options)
        .then(response => response.json());
}
