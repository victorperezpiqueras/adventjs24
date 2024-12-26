"""
We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk *, is inside the box.

The box has a present (*) and counts as "inside the box" if:

    It is completely surrounded by # on the box's edges.
    The * is not on the box's edges.

Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box and false otherwise.

Examples:

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
