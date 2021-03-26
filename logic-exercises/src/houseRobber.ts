export const houseRobber = (houses: number[]) => {
  if (houses.length === 1) {
    return houses[0]
  } else if (houses.length === 0) {
    return 0
  }


  let currentMax: number = 0;
  let prevMax: number = 0;

  for (let i = 0; i < houses.length; i++) {
    let currentHouse = houses[i];
    let newMax = Math.max(currentMax, prevMax + currentHouse)
    prevMax = currentMax;
    currentMax = newMax;
  }

  return currentMax
}


