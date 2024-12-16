/* 
ChatGPT has arrived at the North Pole and the elf Sam Elfman is working on an application for managing gifts and children.

To enhance the presentation, he wants to create a function drawTable that receives an array of objects and converts it into a text table.

The drawn table should represent the object data as follows:

    It has a header with the column name.
    The column name has the first letter capitalized.
    Each row should contain the values of the objects in the corresponding order.
    Each value must be left-aligned.
    Fields always leave a space on the left.
    Fields leave the necessary space on the right to align the box.

Look at the example to see how you should draw the table:

drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
*/

/**
 * @param {Array<Object>} data
 * @returns {string}
 */
function drawTable(data) {
  // 5 stars
  let cols = {};
  let splitBar = "+";
  let headerObj = {};

  const keys = Object.keys(data[0]);
  keys.forEach((key) => {
    // calculate max widths of columns
    const maxLengthRow = Math.max(
      ...data.map((elem) => elem[key].toString().length),
      key.length
    );
    const header = key.slice(0, 1).toUpperCase() + key.slice(1);
    cols[key] = maxLengthRow;
    headerObj[key] = header;
    // split bar for header and footer
    splitBar += `${"-".repeat(maxLengthRow + 2)}+`;
  });
  // add initial header element
  data.unshift(headerObj);

  let rows = [];
  rows.push(splitBar);
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const rowData = Object.keys(element).map((key) => {
      let finalSpace = cols[key] - element[key].toString().length + 1;
      return " " + element[key] + " ".repeat(finalSpace);
    });
    const row = "|" + rowData.join("|") + "|";
    rows.push(row);
    // first row is header, add splitbar
    if (index == 0) rows.push(splitBar);
  }
  rows.push(splitBar);
  return rows.join("\n");
}

console.log(
  drawTable([
    { id: 1, score: 12 },
    { id: 2, score: 44 },
    { id: 3, score: 55 },
  ])
);
