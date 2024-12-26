/* 
Santa Claus 🎅 is decorating a magical Christmas tree 🪄, which this year has a special structure in the form of a binary tree. Each node of the tree represents a gift, and Santa wants to know the height of the tree to place the magical star at the top.

Your task is to write a function that calculates the height of a binary tree. The height of a binary tree is defined as the maximum number of levels from the root to a leaf. An empty tree has a height of 0.

// Tree definition
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}

// Graphical representation of the tree:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Function call
treeHeight(tree)
// Returns: 3
*/

/**
 * @param {{ value: string; left: any; right: any }} tree
 * @returns {number} - Height of the tree.
 */
function treeHeight(tree) {
  // 5 stars
  if (!tree) return 0; // handle null (test case) or undefined (to avoid ifs: lines 54-55)
  const leftDepth = treeHeight(tree?.["left"]);
  const rightDepth = treeHeight(tree?.["right"]);

  const maxLeafDepth = Math.max(leftDepth, rightDepth);
  return maxLeafDepth + 1; // at least 1 for root
}

const tree = {
  value: "🎁",
  left: {
    value: "🎄",
    left: {
      value: "⭐",
      left: null,
      right: null,
    },
    right: {
      value: "🎅",
      left: null,
      right: null,
    },
  },
  right: {
    value: "❄️",
    left: null,
    right: {
      value: "🦌",
      left: null,
      right: null,
    },
  },
};

console.log(treeHeight(tree));
