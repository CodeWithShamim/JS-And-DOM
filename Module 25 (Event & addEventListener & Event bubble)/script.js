const para = document.getElementById('para');
const textArea = document.getElementById('textArea');

let count = 0;
textArea.addEventListener('keypress', function(event) {
    count++
    let text = event.key;
    para.innerHTML = "You have press " + count;
    // if (textArea.value - 1) {
    //     count--
    // }

});