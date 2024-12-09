function organizeShoes(shoes) {
  let a = shoes.reduce((previousValue, currentValue, currentIndex) => {
    if (currentValue[shoes[currentIndex].size] == null) {
      currentValue[shoes[currentIndex].size] = {};
    }
    if (
      currentValue[shoes[currentIndex].size][shoes[currentIndex].type] == null
    ) {
      currentValue[shoes[currentIndex].size][shoes[currentIndex].type] = 0;
    }
    currentValue[shoes[currentIndex].size][shoes[currentIndex].type] += 1;

    return { ...previousValue, currentValue };
  }, {});
  return Object.keys(a).map((key) => Math.min(a[key]["I"], a[key]["R"]));
}
console.log(
  organizeShoes([
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 42 },
  ])
);
/* function organizeShoes(shoes: Shoe[]): number[] {
    let a = shoes.reduce((previousValue, currentValue, currentIndex: number) =>{
        if(previousValue[shoes[currentIndex].size]){

        }else{
            currentValue[shoes[currentIndex].size]
        }
        return currentValue;
    }, {})
    return [];
}
 */
