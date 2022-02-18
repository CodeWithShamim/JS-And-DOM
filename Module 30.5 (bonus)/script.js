function getValue(players, isValue) {
    for (const player of players) {
        player.style.margin = '10px';
        player.style.padding = '30px';
        player.style.border = '2px solid red';
        player.style.borderRadius = '20px';
        player.style.fontSize = '24px';
    }

}

const players = document.getElementsByClassName('player');
getValue(players)
const parent = document.getElementById('players');
// add bubble---------------------------
parent.addEventListener('click', function(event) {
    event.target.parentNode.removeChild(event.target)
})


document.getElementById('submit').addEventListener('click', function() {
    const div = document.createElement('div');
    div.classList.add('player')
    div.innerText = "NEW DIV Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis perferendis veniam molestias sequi, sapiente earum odit sit consectetur. Eveniet, itaque!";

    const parent = document.getElementById('players');
    parent.appendChild(div);
    getValue(players)
        // add bubble---------------------------
    parent.addEventListener('click', function(event) {
        event.target.parentNode.removeChild(event.target)
    })


})