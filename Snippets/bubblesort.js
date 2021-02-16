var bubblesort = function(array) {
  var arrayLength = array.length;
  var swapped = true;

  var toSwap = function(i,j,array) {
    var holder = array[i];
    array[i] = array[j];
    array[j] = holder;
    return array;
  }

  for (var i = 0; i < arrayLength - 1 && swapped === true; i++) {
    swapped = false;

    for (var j = 0; j < arrayLength - 1 - i; j++) {
      if (array[j] < array[j + 1]) {
        swapped = true;
        toSwap(j, j+ 1, array);
      }
    }
  }
}

console.log(bubblesort([7,4,2,1,3]))
 // yields [1, 2, 3]