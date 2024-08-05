async function fetchResource(url) {
    const response = await fetch(url);
    const markdown = await response.text();
    const html = marked.parse(markdown);
    document.getElementById("resource-content").innerHTML = html; 
}
