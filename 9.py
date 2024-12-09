"""
Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.

El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

Recibirás dos parámetros board y mov.

board es un array de strings que representa el tablero:

    @ es la locomotora del tren.
    o son los vagones del tren.
    * es una fruta mágica.
    · son espacios vacíos.

mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

    'L': izquierda
    'R': derecha
    'U': arriba
    'D': abajo.

Con esta información, debes devolver una cadena de texto:

    'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
    'eat': Si el tren recoge una fruta mágica (*).
    'none': Si avanza sin chocar ni recoger ninguna fruta mágica.

Ejemplo:

const board = ['·····', '*····', '@····', 'o····', 'o····']

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
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
