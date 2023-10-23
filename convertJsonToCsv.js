const fs = require('fs');
function convertJsonToCsv(jsonData) {


let csv = "";
let headers = Object.keys(jsonData[0]);
csv += headers.join(",") + "\n";
jsonData.forEach(function(row) {
headers.forEach(function(header, index) {
if (index > 0) {
csv += ",";
}
csv += row[header];
});
csv += "\n";
});
return csv;
}
let jsonData = [
{ name: "John Doe", age: 30, city: "New York" },
{ name: "Jane Doe", age: 25, city: "London" }
];
let csvData = convertJsonToCsv(jsonData);
fs.writeFile("data.csv", csvData, function(err) {
if (err) {
console.error("Error al escribir archivo CSV: " + err);
} else {
console.log("Archivo CSV guardado con éxito.");
}
});