function calculateTotalAmount(items) {
  let total = 0;

  items.forEach(item => {
    if (item instanceof Array && item.length > 0) {
      total += calculateTotalAmount(item);
    } else {
      total += item;
    }
  });

  return total;
}

console.log(calculateTotalAmount([1, 2, [3, 4], "5", ["6"]]));
