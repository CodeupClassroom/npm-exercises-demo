export default () => {
    return fetch('https://my-json-server.typicode.com/typicode/demo/posts')
        .then(response => response.json());
}
