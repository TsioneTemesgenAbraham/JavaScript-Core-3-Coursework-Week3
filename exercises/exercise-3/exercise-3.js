let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
let [item1, item2, item3, item4, item5, item6] = order;

console.log("  QTY    ", "   ITEM        ", "     TOTAL   ");
console.log(
  `   ${item1.quantity}       ${item1.itemName}            ${item1.unitPrice} `
);
console.log(
  `   ${item2.quantity}       ${item2.itemName}            ${
    item2.unitPrice * item2.quantity
  } `
);
console.log(
  `   ${item3.quantity}       ${item3.itemName}         ${item3.unitPrice} `
);
console.log(
  `   ${item4.quantity}       ${item4.itemName}       ${item4.unitPrice} `
);
console.log(
  `   ${item5.quantity}       ${item5.itemName}             ${
    item5.unitPrice * item5.quantity
  } `
);
console.log(
  `   ${item6.quantity}       ${item6.itemName}           ${
    item6.unitPrice * item6.quantity
  } `
);
