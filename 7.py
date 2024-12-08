"""
¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

    Recibirás un string que contiene letras y paréntesis.
    Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
    Si hay paréntesis anidados, resuelve primero los más internos.
    Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.

Nos ha dejado algunos ejemplos:

fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
"""


def fix_packages(packages):
    # recursion works locally but timeouts after 1000ms in remote
    return_package = ''
    i = 0
    while i < len(packages):
        char = packages[i]
        if char == '(':
            closing_bracket_index = len(
                packages) - 1 - packages[::-1].find(')')
            fixed_packages_brackets = fix_packages(
                packages[i+1: closing_bracket_index])
            return_package += fixed_packages_brackets[::-1]
            i = closing_bracket_index + 1
        else:
            return_package += char
            i += 1

    return return_package


print(fix_packages('abc(def(gh)i)jk'))
