"""
Santa Claus 🎅 is checking his workshop inventory to prepare gift delivery. The elves have recorded the toys in an array of objects, but the information is a bit disorganized. You need to help Santa organize the inventory.

You will receive an array of objects, where each object represents a toy and has the properties:

    name: the name of the toy (string).
    quantity: the available quantity of that toy (integer).
    category: the category to which the toy belongs (string).

Write a function that processes this array and returns an object that organizes the toys as follows:

    The keys of the object will be the categories of toys.
    The values will be objects that have the toy names as keys and the total quantities of each toy in that category as values.
    If there are toys with the same name in the same category, you must sum their quantities.
    If the array is empty, the function should return an empty object {}.

const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

organizeInventory(inventory)

// Expected result:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

organizeInventory(inventory2)

// Expected result:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
"""
from collections import defaultdict
import functools


def organizeInventory(inventory):
    # simple solution
    result = {}
    for item in inventory:
        category = item["category"]
        name = item["name"]
        quantity = item["quantity"]

        if category not in result:
            result[category] = {}

        if name in result[category]:
            result[category][name] += quantity
        else:
            result[category][name] = quantity

    return result


def organizeInventory(inventory):
    # optimal python-based solution
    d = defaultdict(lambda: defaultdict(int))
    for inv in inventory:
        d[inv["category"]][inv["name"]] += inv["quantity"]
    return dict(d)


def organizeInventory(inventory: list[dict]):
    # reduce-based solution with dict copying which is bad, but a separate function is worse in performance in the remote
    return functools.reduce(
        lambda accumulated, curr_elem: {
            **accumulated,
            curr_elem["category"]: {
                **accumulated.get(curr_elem["category"], {}),
                curr_elem["name"]: accumulated.get(curr_elem["category"], {}).get(
                    curr_elem["name"], 0) + curr_elem["quantity"]
            }
        },
        inventory,
        {}
    )


print(organizeInventory([
    {"name": 'doll', "quantity": 5, "category": 'toys'},
    {"name": 'car', "quantity": 3, "category": 'toys'},
    {"name": 'ball', "quantity": 2, "category": 'sports'},
    {"name": 'car', "quantity": 2, "category": 'toys'},
    {"name": 'racket', "quantity": 4, "category": 'sports'}
]))
