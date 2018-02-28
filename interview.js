const arr = [10, 12, 15, 21];
console.log('Array length: ' + arr.length);
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

// settimeout needs to be outside of the for loop to print the array elements
/*
setTimeout(function() {
  for (var i = 0; i < arr.length; i++) {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  };
},3000)
*/