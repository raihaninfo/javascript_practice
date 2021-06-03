/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');

xhr.onreadystatechange = function (e) {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      var users = JSON.parse(xhr.response);
      console.log(users);
    } else {
      console.log(xhr.status);
    }
  }
};

xhr.send();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sIm5hbWVzIjpbInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsImUiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwidXNlcnMiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVo7QUFDQUQsR0FBRyxDQUFDRSxJQUFKLENBQVMsS0FBVCxFQUFnQiw0Q0FBaEI7O0FBRUFGLEdBQUcsQ0FBQ0csa0JBQUosR0FBeUIsVUFBVUMsQ0FBVixFQUFhO0FBQ2xDLE1BQUlKLEdBQUcsQ0FBQ0ssVUFBSixJQUFrQixDQUF0QixFQUF5QjtBQUNyQixRQUFJTCxHQUFHLENBQUNNLE1BQUosSUFBYyxHQUFsQixFQUF1QjtBQUNuQixVQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxHQUFHLENBQUNVLFFBQWYsQ0FBWjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWjtBQUNILEtBSEQsTUFHTztBQUNISSxhQUFPLENBQUNDLEdBQVIsQ0FBWVosR0FBRyxDQUFDTSxNQUFoQjtBQUNIO0FBQ0o7QUFDSixDQVREOztBQVdBTixHQUFHLENBQUNhLElBQUosRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxyXG54aHIub3BlbignZ2V0JywgJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXHJcblxyXG54aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGxldCB1c2VycyA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VycylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIuc3RhdHVzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxueGhyLnNlbmQoKSJdLCJzb3VyY2VSb290IjoiIn0=