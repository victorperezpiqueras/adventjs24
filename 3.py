"""
Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. Necesitas ayudar a Santa a organizar el inventario.

Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:

    name: el nombre del juguete (string).
    quantity: la cantidad disponible de ese juguete (entero).
    category: la categoría a la que pertenece el juguete (string).

Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

    Las claves del objeto serán las categorías de juguetes.
    Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
    Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
    Si el array está vacío, la función debe devolver un objeto vacío {}.

const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

organizeInventory(inventory)

// Resultado esperado:
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

// Resultado esperado:
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
