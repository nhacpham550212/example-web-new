// Viết hàm tại đây
function getLastElement (lastElement){
    return lastElement[lastElement.length-1];
}
// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
console.log(animals.length);
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']