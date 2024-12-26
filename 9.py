"""
The elves are playing with a magical train 🚂 that carries gifts. This train moves on a board represented by an array of strings.

The train consists of an engine (@), followed by its carriages (o), and must collect magical fruits (*) which serve as fuel. The movement of the train follows these rules:

You will receive two parameters board and mov.

board is an array of strings that represents the board:

    @ is the train's engine.
    o are the train's carriages.
    * is a magical fruit.
    · are empty spaces.

mov is a string that indicates the next movement of the train from the train's head @:

    'L': left
    'R': right
    'U': up
    'D': down.

With this information, you must return a string:

    'crash': If the train crashes into the edges of the board or itself.
    'eat': If the train collects a magical fruit (*).
    'none': If it moves without crashing or collecting any magical fruit.

Example:

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// The train moves to the right and there is empty space on the right
"""

from typing import List, Literal


def move_train(board: List[str], mov: Literal['U', 'D', 'R', 'L']) -> Literal['none', 'crash', 'eat']:
    # initial (abandoned as py works bad)
    engine = '@'
    wagon = 'o'
    magic_fruit = '*'
    empty_space = '·'
    engine_y = [i for i, b in enumerate(board) if engine in b]
    if len(engine_y) <= 0:
        return 'crash'
    engine_y = engine_y[0]
    engine_x = board[engine_y].index(engine)

    actions = {
        'U': lambda x, y: (x, y-1),
        'D': lambda x, y: (x, y+1),
        'R': lambda x, y: (x+1, y),
        'L': lambda x, y: (x-1, y),
    }

    new_x, new_y = actions[mov](engine_x, engine_y)
    if new_x < 0 or new_y < 0 or new_x >= len(board[new_y]) or new_y >= len(board):
        return 'crash'

    results = {
        wagon: 'crash',
        magic_fruit: 'eat',
        empty_space: 'none'
    }

    return results[board[new_y][new_x]]


print(move_train(['·····', '*····', '@····', 'o····', 'o····'], 'R'))
