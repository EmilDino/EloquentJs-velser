// Your code here.
function range (start, end){
    var sequence = []
    while(start <= end) {
        sequence.push(start);
        start++; 
    }
    return sequence;
}

function sum () {
    
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55