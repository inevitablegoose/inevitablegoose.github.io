///
// HTML Loader by netfriend
// Released under the Unlicense - https://unlicense.org/
///

///
// SETTINGS
///

const html_templates = {
  "linklist": "/resources/header.html",
  "social": "/resources/social.html",
};

///
// CODE
///
// Don't edit below this line unless you know what you're doing!
///

(function () {

const domParser = new window.DOMParser();

Object.keys(html_templates).map(function (element) {
  const url = html_templates[element];

  fetch(url).then((response) => response.text())
    .then(function (html) {
      let parsedHTML = domParser.parseFromString(html, "text/html");
      let pageElement = document.getElementById(element);

      if (pageElement.replaceChildren !== undefined) {
        pageElement.replaceChildren(...parsedHTML.body.childNodes);
      } else {
        while (pageElement.firstChild) {
          pageElement.removeChild(pageElement.firstChild);
        }
        pageElement.append(...parsedHTML.body.childNodes);
      }
      document.head.appendChild(parsedHTML.head);
    });
});

}());