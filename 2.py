"""
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

    Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
    Cada nombre debe estar en una línea, alineado a la izquierda.
    El marco está construido con * y tiene un borde de una línea de ancho.
    La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

Ejemplo de funcionamiento:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
"""


def createFrame(names):
    # first version
    frame = ""
    max_name = max(names, key=lambda name: len(name))
    frame_len = len(max_name)
    frame_border = "*" * (frame_len + 4)  # verticals + 2 spaces

    for name in names:
        remaining_spaces = frame_len - len(name)
        frame_line = "* " + name + " " * remaining_spaces + " *\n"
        frame += frame_line

    return frame_border + "\n" + frame + frame_border


def createFrame(names):
    # cleaner, reviewed version
    frame_len = len(max(names, key=len))  # Find the maximum name length
    frame_border = "*" * (frame_len + 4)  # Account for borders and spaces

    # Build the frame content
    frame_lines = [
        f"* {name}{' ' * (frame_len - len(name))} *"  # Name padded with spaces
        for name in names
    ]

    # Combine frame border and lines
    return f"{frame_border}\n" + "\n".join(frame_lines) + f"\n{frame_border}"


print(createFrame(['midu', 'madeval', 'educalvolpz']))
