function urlToHostnameConverter(url) {
    
    console.log(url); // for debugging
    let addr = new URL (url);
    let host = addr.host;
    console.log(host); // for debugging
    return host;
}

let userProvidedURL = prompt("Hello please provide a valid URL", "example: https://google.com");

alert('The hostname is : ' + urlToHostnameConverter(userProvidedURL) );

//Reload the script when the user click OK on the alert box
window.location.reload();
