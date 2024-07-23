import { binarySearch } from "./src/utilities/helpers.js";

const to_insert = 8;
const arr = [];

const index = binarySearch(arr, (num) => {
  if (to_insert > num) {
    return 1;
  }
  if (to_insert < num) {
    return -1;
  }
  return 0;
});

arr.splice(index, 0, to_insert);
console.log(arr);
