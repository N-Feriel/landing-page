var aText = document.createTextNode('read More..'),
    aEl = document.createElement('a'),
    pText = document.createTextNode('Learn more about the DOM. '),
    pEl = document.createElement('p');

aEl.setAttribute('href', '#link');
aEl.appendChild(aText);

pEl.appendChild(pText);
pEl.appendChild(aEl);

console.log(pEl.outerHTML);