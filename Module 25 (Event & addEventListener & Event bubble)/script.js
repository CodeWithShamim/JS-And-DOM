const para = document.getElementById('para');
const textArea = document.getElementById('textArea');

let count = 0;
textArea.addEventListener('keypress', function(event) {
    count++
    let text = event.key;
    para.innerHTML = "You have press " + count;



});

// textArea.addEventListener('keypress', function(event) {
//     const text = event.key
//     if (--text) {
//         count--
//     }

// });