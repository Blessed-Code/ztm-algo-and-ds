const boxes = [1,2,3,4,5]

function printAllBoxesPairs(boxes) {
    for (let i = 0; i < boxes.length; i++) {
        for (let j = 0; j < boxes.length; j++) {
            console.log(`${boxes[i]}${boxes[j]}`);
        }   
    }
}

printAllBoxesPairs(boxes);
// karena ini nested maka  O(n * n) yang berarti O(n^2)