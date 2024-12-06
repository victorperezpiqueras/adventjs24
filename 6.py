"""
Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

    Está rodeada por # en los bordes de la caja.
    El * no está en los bordes de la caja.

Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

Ejemplos:

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
"""


def in_box(box):
    # first solution (2stars)
    char = "*"
    is_ok = False
    for i, line in enumerate(box):
        # if top or bot border
        if i == 0 or i == len(box)-1:
            if char in line:
                return False
        # if left or right border
        if line[0] == char or line[-1] == char:
            return False

        if char in line:
            is_ok = True

    return is_ok


def in_box(box: list[str]):
    # 5 stars
    for i in range(1, len(box)-1):  # ignore first and last rows
        index = box[i].find("*")
        if index != -1:
            return (index > 0 and index < len(box[i]) - 1)
    return False


print(in_box([
    "###",
    "#*#",
    "###"
]))
