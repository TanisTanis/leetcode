function findElevatorPath(elevatorStates, startingElevator, finalDestination) {
  const end = finalDestination.split("-");
  const endObject = {
    floor: Number(end[0]),
    time: Number(end[1]),
  };

  if (elevatorStates.length === 0 || !Array.isArray(elevatorStates)) {
    throw new Error("Empty or invalid elevator states");
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (
    !startingElevator ||
    typeof startingElevator !== "string" ||
    !alphabet.includes(startingElevator)
  ) {
    throw new Error(
      "Invalid starting elevator, must be a string and a capital letter"
    );
  }

  if (
    !endObject.floor ||
    endObject.floor < 1 ||
    endObject.floor > elevatorStates[0].split("\n").length
  ) {
    throw new Error("End floor is invalid or out of bounds");
  }

  if (
    !endObject.time ||
    endObject.time < 1 ||
    endObject.time > elevatorStates.length
  ) {
    throw new Error("End time is invalid or out of bounds");
  }

  let finalPath = [];

  findFullPath(elevatorStates, 1, "", startingElevator, endObject, finalPath);

  if (finalPath.length === 0) {
    return "No available paths found";
  } else if (finalPath.length === 1) {
    return finalPath[0];
  }

  return finalPath;
}

function findFullPath(
  states,
  currentTime,
  path,
  currentElevator,
  endObject,
  finalPath
) {
  if (currentTime > states.length || currentTime > endObject.time) {
    return;
  }

  const currentState = states[currentTime - 1].split("\n").reverse();
  const currentFloor = findElevator(currentState, currentElevator);

  if (currentFloor === -1) return;

  if (currentFloor === endObject.floor && currentTime === endObject.time) {
    finalPath.push(path + currentElevator);
    return;
  }

  const elevatorsOnFloor = findAllElevatorsOnFloor(currentState, currentFloor);

  for (let i = 0; i < elevatorsOnFloor.length; i++) {
    let newPath = "";

    if (elevatorsOnFloor[i] !== currentElevator) {
      newPath = path + `${currentElevator}.${elevatorsOnFloor[i]} -> `;
    } else {
      newPath = path + `${elevatorsOnFloor[i]} -> `;
    }

    findFullPath(
      states,
      currentTime + 1,
      newPath,
      elevatorsOnFloor[i],
      endObject,
      finalPath
    );
  }
}

function findElevator(state, elevator) {
  for (let i = 0; i < state.length; i++) {
    if (state[i].includes(elevator)) {
      return i + 1;
    }
  }
  return -1;
}

function findAllElevatorsOnFloor(state, floor) {
  const index = floor - 1;

  const elevators = state[index]
    .split("x")
    .join("")
    .split(".")
    .join("")
    .split(" ")
    .join("")
    .split("");

  return elevators;
}

let elevatorStates = [
  `xx.x.x.xDxx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.xBx.x.xx
   xx.x.x.x.xx
   xxAx.xCx.xx`,

  `xx.xBx.xDxx
   xx.x.xCx.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xxAx.x.x.xx`,

  `xx.x.xCx.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xxAxBx.xDxx`,

  `xx.x.xCx.xx
   xxAx.x.x.xx
   xx.x.x.x.xx
   xx.x.x.xDxx
   xx.x.x.x.xx
   xx.xBx.x.xx`,
];

console.log(findElevatorPath(elevatorStates, "D", "5-4"));

module.exports = findElevatorPath;
