// * https://medium.com/@manjuladube/understanding-deep-and-shallow-copy-in-javascript-13438bad941c
// var employeeDetailsOriginal = {
//   name: "Manjula",
//   age: 25,
//   Profession: "Software Engineer",
// };

// var employeeDetailsDuplicate = employeeDetailsOriginal; //Shallow copy!

// employeeDetailsDuplicate.name = "NameChanged";
// // employeeDetailsOriginal.name === "NameChanged"

// var employeeDetailsDuplicate = {
//   name: employeeDetailsOriginal.name,
//   age: employeeDetailsOriginal.age,
//   Profession: employeeDetailsOriginal.Profession,
// }; //Deep copy!

// * --------------------------

// * For simple JSON objects, the simplest way would be:
// var objectIsNew = JSON.parse(JSON.stringify(objectIsOld));
// In Jquery you can use:
// Shallow copy
//     var objectIsNew = jQuery.extend({}, objectIsOld);
// Deep copy
//     var objectIsNew = jQuery.extend(true, {}, objectIsOld);

// * Pure javascript method to deep clone object
function keepCloning(objectpassed) {
  if (objectpassed === null || typeof objectpassed !== "object") {
    return objectpassed;
  }

  // give temporary-storage the origin obj's constructor
  var temporary_Storage = objectpassed.constructor();
  for (var key in objectpassed) {
    temporary_Storage[key] = keepCloning(objectpassed[key]);
  }
  return temporary_Storage;
}

var employeeDetailsOriginal = {
  name: "Manjula",
  age: 25,
  Profession: "Software Engineer",
};
var employeeDetailsDuplicate = keepCloning(employeeDetailsOriginal);
employeeDetailsOriginal.name = "NameChanged";
console.log(employeeDetailsOriginal);
console.log(employeeDetailsDuplicate);
