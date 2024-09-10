console.log("Start");

const heading = document.querySelector(".title")

let offset = 0

function inc() {
    if (offset < 10) {
        offset++
    } else if (offset < 100) {
        offset += 10
    } else if (offset < 1000) {
        offset += 100
    } else {
        return null
    }
    heading.innerHTML = offset
}


function dec() {
    if (offset > 100) {
        offset -= 100
    } else if (offset > 10) {
        offset -= 10
    } else if (offset > 1) {
        offset--
    } else {
        offset === 1
    }
    heading.innerHTML = offset

}

console.log("End");










// {
//     //1 masala

//     var isSquare = function (n) {
//         return Math.sqrt(n) % 1 === 0;
//     };
// }






// {
//     // 2 masala 

//     function searchNames(logins) {
//         return logins.filter(function (pair) {
//             return pair[0].endsWith('_');
//         });
//     }
// }




// {
//     // 3 masala 

//     function printArray(array) {
//         return array.map(el =>
//             Array.isArray(el)
//                 ? el.join(',')
//                 : el
//         ).join(',');
//     }

//     module.exports = printArray;
// }



// {
//     // 4 masala 

//     function diagonal(matrix) {
//         let principalSum = 0;
//         let secondarySum = 0;

//         for (let i = 0; i < matrix.length; i++) {

//             principalSum += matrix[i][i];

//             secondarySum += matrix[i][matrix.length - 1 - i];
//         }

//         if (principalSum > secondarySum) {
//             return "Principal Diagonal win!";
//         } else if (secondarySum > principalSum) {
//             return "Secondary Diagonal win!";
//         } else {
//             return "Draw!";
//         }
//     }
// }



{
    // 5 masala 

}
