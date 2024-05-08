// rule 3
function compressBoxesTwices(boxes, boxes2) {
    boxes.forEach(box => {
        console.log(box);
    });

    boxes2.forEach(box => {
        console.log(box);
    });
}

// ini bukan O(n) karena loopingnya beda sumber
// kalo forEachnya untuk boxes aja maka bener jadi O(n)
// karena ini 2 sumber berbeda anggepannya kaya O(n + m)
// terus gimana kalo nested array? -> O(n * m)