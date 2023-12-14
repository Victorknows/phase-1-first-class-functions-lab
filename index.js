const returnFirstTwoDrivers = (drivers) => {
  return[drivers[0], drivers[1]];
};

returnLastTwoDrivers = (drivers) => {
  return[drivers[drivers.length-2], drivers[drivers.length-1]];
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(i){
  return function (x){
    return i * x;
  }
}
 
const fareDoubler = createFareMultiplier(2);
let fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
};

