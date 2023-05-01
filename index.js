// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let distanceFromHqInBlocks = Math.abs(someValue - 42);
    return distanceFromHqInBlocks;
}

function distanceFromHqInFeet(someValue) {
    let distanceFromHqInFeet = distanceFromHqInBlocks(someValue) * 264;
    return distanceFromHqInFeet;
}