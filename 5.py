"""
Santa Claus's elves 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. Each boot is described by two values:

    type indicates if it's a left boot (I) or a right boot (R).
    size indicates the size of the boot.

Your task is to help the elves pair all the boots of the same size having a left and a right one. To do this, you should return a list of the available boots after pairing them.

Note: You can have more than one pair of boots of the same size!

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []
"""


def organizeShoes(shoes):
    # first solution
    groups = {}
    for shoe in shoes:
        if shoe["size"] not in groups:
            groups[shoe["size"]] = {}

        if shoe["type"] not in groups[shoe["size"]]:
            groups[shoe["size"]][shoe["type"]] = 0
        groups[shoe["size"]][shoe["type"]] += 1

    res = []
    for size, v in groups.items():
        if len(v.keys()) > 1:
            min_pair = min(v.values())
            res.extend([size for _ in range(min_pair)])
    return res


def organizeShoes(shoes):
    # optimized 5 stars
    groups = {}
    for shoe in shoes:
        if shoe['size'] not in groups:
            groups[shoe['size']] = [0, 0]
        index = 0 if shoe['type'] == 'I' else 1
        groups[shoe['size']][index] += 1

    result = []
    for k, v in groups.items():
        minv = min(v)
        # if minv > 0: no need to check this, if its zero -> none added
        result.extend([k]*minv)
    # oneliner (worse perf)     return [k for k, v in groups.items() for _ in range(min(v)) if min(v) > 0]
    return result


print(organizeShoes([
    {"type": 'I', "size": 38},
    {"type": 'R', "size": 38},
    {"type": 'I', "size": 38},
    {"type": 'R', "size": 38},
    {"type": 'I', "size": 38},
    {"type": 'R', "size": 38},
    {"type": 'R', "size": 42},
    {"type": 'I', "size": 41},
    {"type": 'I', "size": 42}
]))
