const boxes = [1,2,3,4,5];

function logFirst2Boxes (array) {
    console.log(array[0]); // O(1)
    console.log(array[1]); // O(1)
}

logFirst2Boxes(boxes); // O(2). meskipun ini O(2) tetep sebutannya O(1) / Linear time.
// karena mo gimana pun dia tetep bakall linear ngeproses 2 box diawal meskipun input bertambah