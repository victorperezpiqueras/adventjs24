"""
Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

    type indica si es una bota izquierda (I) o derecha (R).
    size indica el tamaño de la bota.

Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los tamaños disponibles después de emparejar las botas.

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
    # optimized
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
