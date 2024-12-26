"""
The grinch 👹 has passed through Santa Claus's workshop! And what a mess he has made. He has changed the order of some packages, so shipments cannot be made.

Luckily, the elf Pheralb has detected the pattern the grinch followed to jumble them. He has written the rules that we must follow to reorder the packages. The instructions are as follows:

    You will receive a string containing letters and parentheses.
    Every time you find a pair of parentheses, you need to reverse the content within them.
    If there are nested parentheses, solve the innermost ones first.
    Return the resulting string with parentheses removed, but with the content correctly reversed.

He left us some examples:

fixPackages('a(cb)de')
// ➞ "abcde"
// We reverse "cb" inside the parentheses

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"
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
