const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.margin = '10px';
    player.style.padding = '30px';
    player.style.border = '2px solid red';
    player.style.borderRadius = '20px';
    player.style.fontSize = '24px';
}