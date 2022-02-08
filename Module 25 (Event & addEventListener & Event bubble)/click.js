const btn = document.getElementById('btn');
console.log(btn)
btn.addEventListener('click', function message() {
    alert("Hello!")
})

// button style 
function message1() {
    const title = document.getElementById('title');
    title.innerText = "Updated!!";

}

function message2() {
    const title = document.getElementById('title');
    title.innerText = "Remove!!";

}

// Another system==================================
const another = document.getElementById('another');
another.onclick = makeAnother;

function makeAnother() {
    alert("this is Another alert");
}