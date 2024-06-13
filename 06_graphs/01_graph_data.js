// ada 3 cara describe graph

// 1.Edge list
const graph1 = [
  [0, 2], // edge 1 hubungin node 0 sama 2
  [2, 3], // edge 2 hubungin node 2 sama 3
  [2, 1], // edge 3 hubungin node 2 sama 1
  [1, 3], // edge 4 hubungin node 1 sama 3
];

// 2. Adjacent List
// index merupakan nodenya
// value dari index tersebut merupakan neighbornya
// idx/node 0 punya neighbor hanya node 2
// idx/node 1 punya neighbor 2 dan 3 dst
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];

// 3. Adjacent Matrix
const graph3 = {
  0: [0, 0, 1, 0], // node 0 terhubung sama idx/node 2
  1: [0, 0, 1, 1], // node 1 terhubung sama idx/node 2 dan 3
  2: [1, 1, 0, 1], // node 2 terhubung sama idx/node 0,1,3
  3: [0, 1, 1, 0], // node 3 terhubung sama idx/node 1 dan 2
};
