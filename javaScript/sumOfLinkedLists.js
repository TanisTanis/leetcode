class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let num1 = numCalc(linkedListOne);
  let num2 = numCalc(linkedListTwo);

  let sum = num1 + num2;

  let sumArray = sum.toString().split("").reverse();

  let resultLinkedList = new LinkedList(Number(sumArray[0]));
  let currentNode = resultLinkedList;

  sumArray.shift();

  while (sumArray.length > 0) {
    let newNode = new LinkedList(Number(sumArray[0]));
    currentNode.next = newNode;
    sumArray.shift();
    currentNode = newNode;
  }
  let number = numCalc(resultLinkedList);
  console.log(number);
  return resultLinkedList;
}

function numCalc(linkedList) {
  let string = "";

  function linkedListTraversal(node) {
    string += node.value;
    if (node.next) {
      linkedListTraversal(node.next);
    }
  }

  linkedListTraversal(linkedList);

  string = Number(string.split("").reverse().join(""));
  return string;
}
