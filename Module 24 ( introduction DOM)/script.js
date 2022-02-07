// select element 
const class1 = document.querySelector('.heading')
class1.innerHTML = "<h2>Hello</h2>";

// create element 
const create = document.createElement('p');
create.innerText = "why are you so angry right now?";
// add style 
create.style.fontSize = '30px';
create.style.color = 'red';
// add element in parent 
class1.appendChild(create);

// find parentNode and childNode 
const result1 = create.parentNode.parentNode;
console.log(result1);

const result2 = class1.childNodes;
console.log(result2); // output: nodeList


// getAttribute 
const find = document.querySelectorAll('header ul li')[0];
const result = find.getAttribute('id');
console.log(result);

// setAttribute
const resultUpdate = find.setAttribute('title', 'Hello i am js tooltip');
console.log(resultUpdate);