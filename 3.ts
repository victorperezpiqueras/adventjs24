/* type Inventory = Array<{ name: string; quantity: number; category: string }>;

function organizeInventory(inventory: Inventory): object {
  // translated from the py sol
  const result: { [category: string]: { [name: string]: number } } = {};

  for (const inv of inventory) {
    // Check if category exists, if not, initialize it
    if (!result[inv.category]) {
      result[inv.category] = {};
    }

    // Check if name exists within the category, if not, initialize quantity
    if (!result[inv.category][inv.name]) {
      result[inv.category][inv.name] = 0;
    }

    // Add the quantity to the existing quantity
    result[inv.category][inv.name] += inv.quantity;
  }

  return result;
} */
type Inventory = Array<{
  name: string;
  quantity: number;
  category: string;
}>;

function organizeInventory(inventory: Inventory): object {
  return inventory.reduce((accumulated, currElem) => {
    accumulated[currElem.category] ??= {};
    accumulated[currElem.category][currElem.name] ??= 0;

    accumulated[currElem.category][currElem.name] += currElem.quantity;

    return accumulated;
  }, {} as Record<string, Record<string, number>>);
}

// Example usage:
const inventory: Inventory = [
  { name: "apple", quantity: 10, category: "fruits" },
  { name: "banana", quantity: 5, category: "fruits" },
  { name: "apple", quantity: 2, category: "fruits" },
  { name: "carrot", quantity: 7, category: "vegetables" },
  { name: "carrot", quantity: 3, category: "vegetables" },
];

console.log(organizeInventory(inventory));
