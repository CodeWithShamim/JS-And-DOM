function message1() {
    const title = document.getElementById('title');
    title.innerText = "Updated!";

}

function message2() {
    const title = document.getElementById('title');
    title.innerText = "Remove!";

}

// Another system==================================
const another = document.getElementById('another');
another.onclick = makeAnother;

function makeAnother() {
    alert("this is Another alert");
}