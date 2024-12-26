"""
It's time to put up the Christmas tree at home! 🎄 But this year we want it to be special. We're going to create a function that receives the height of the tree (a positive integer between 1 and 100) and a special character to decorate it.

The function should return a string that represents the Christmas tree, constructed as follows:

    The tree is made up of triangles of special characters.
    The spaces on the sides of the tree are represented with underscores _.
    All trees have a trunk of two lines, represented by the # character.
    The tree should always have the same length on each side.
    You must ensure the tree has the correct shape using line breaks \n for each line.

Examples:

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

Make sure to use line breaks \n at the end of each line, except for the last one.
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
