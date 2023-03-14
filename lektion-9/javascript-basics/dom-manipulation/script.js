/*
  id firstName, lastName, displayName
  Name       firstName, lastName
  class      form-control, mb-3
  element    input, div, span
*/

//DOM Manipulation
var firstName = document.getElementById('firstName').value
console.log(document.querySelector('#firstName').value)

console.log(document.getElementsByName('firstName')[0].value)

console.log(document.getElementsByClassName('form-control'))
console.log(document.getElementsByName('.form-control'))


