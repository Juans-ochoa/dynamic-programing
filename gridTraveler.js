/**
 * Problem statement is : A robot is situated at top left corner of an m x n grid. It needs to travel to the bottom right corner. The robot can only move either right or down at any point
 * Question: Calculate total number of ways user can travel from S(0,0) to E(2,2)
 */

function gridTraveler(m, n) {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
// console.log(gridTraveler(18,18))
