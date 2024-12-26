"""
Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, but the frame must follow specific rules. Your task is to help the elves generate this magical frame.

Rules:

    Given an array of names, you must create a rectangular frame that contains all of them.
    Each name must be on a line, aligned to the left.
    The frame is built with * and has a border one line thick.
    The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.

Example of how it works:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Expected result:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Expected result:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Expected result:
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
