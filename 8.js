function drawRace(indices, length) {
  // 5 stars translated from py
  let raceLanes = [];
  let isometricSpaces = indices.length - 1;

  indices.forEach((ind, i) => {
    let lane = "~".repeat(length);
    let position = ind >= 0 ? ind : length + ind;

    if (position > 0) {
      lane = lane.slice(0, position) + "r" + lane.slice(position + 1);
    }

    let spaces = " ".repeat(isometricSpaces - i);
    raceLanes.push(`${spaces}${lane} /${i + 1}`);
  });

  return raceLanes.join("\n");
}
