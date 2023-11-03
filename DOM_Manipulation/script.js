const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.style.cssText = "color: red";
paragraph.textContent = "Hi, I'm Red!";
container.appendChild(paragraph);

const heading = document.createElement('h3');
heading.style.cssText = "color: blue";
heading.textContent = "I'm a blue H3";
container.appendChild(heading);

const containerBox = document.createElement('div');
containerBox.style.cssText = "border-color: black; background-color:pink";

const containedHeader = document.createElement('h1');
containedHeader.textContent = "I'm in a div!";
const containedParagraph = document.createElement('p');
containedParagraph.textContent = "Me Too!";

containerBox.appendChild(containedHeader);
containerBox.appendChild(containedParagraph);
container.appendChild(containerBox);