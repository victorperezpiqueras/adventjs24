"""
¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

    El árbol está compuesto de triángulos de caracteres especiales.
    Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
    Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
    El árbol siempre debe tener la misma longitud por cada lado.
    Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.

Ejemplos:

const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/

Asegúrate de utilizar saltos de línea \n al final de cada línea, excepto en la última.
"""


def createXmasTree(height, ornament):
    tree = []
    decorations = 1  # starts with one
    # every level grows 2 horizontally, plus 1 for log
    total_w = (2 * height) - 1

    for h in range(1, height+1):
        num_spaces = total_w - decorations  # odd - odd = always even
        spaces = "_" * (num_spaces // 2)

        curr_w = (2 * h) - 1
        decoration = ornament * curr_w
        tree.append(f"{spaces}{decoration}{spaces}")
        decorations += 2

    last_spaces = "_" * ((total_w - 1) // 2)
    tree.append(f"{last_spaces}#{last_spaces}")
    tree.append(f"{last_spaces}#{last_spaces}")
    return "\n".join(tree)


print(createXmasTree(5, "*"))
