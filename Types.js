var isFetching = true;
var isLoading = false;
var int = 42;
var float = 2.4;
var num = 3e10;
var message = 'HelloTypescript';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['Hello', 'Typescript'];
//Tuple
var contact = ['Nata', 1234567];
//Any
var variable = 42;
//..
variable = 'new string';
function sayMyName(name) {
    console.log(name);
}
sayMyName(name, 'Хайзенберг');
//Never
function throwError(message) {
    throw new Error(message);
}
var login, Login = 'admin';
var id1 = 1234;
var id2 = '1233';
