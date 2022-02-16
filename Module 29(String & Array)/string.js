const products = [
    'Dell hardcore i29 2GB Laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    '1X59 lenovo commertial yoga laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'laptop purple color phone with'
];

const searching = 'LapToP';
let output = [];

// indexof---------------
// for (const product of products) {
//     if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//         output.push(product);
//     }
// }

// includes-----------------
// for (const product of products) {
//     if (product.toLowerCase().includes(searching.toLowerCase())) {
//         output.push(product);
//     }
// }

// startsWith-----------------------
// for (const product of products) {
//     // console.log(product.toLowerCase().startsWith(searching.toLowerCase()))
//     if (product.toLowerCase().startsWith(searching.toLowerCase())) {
//         output.push(product);
//     }
// }

// endsWith-----------------------
for (const product of products) {
    // console.log(product.toLowerCase().startsWith(searching.toLowerCase()))
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}

console.log(output);