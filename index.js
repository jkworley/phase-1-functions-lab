// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let distanceFromHqInBlocks = Math.abs(someValue - 42);
    return distanceFromHqInBlocks;
}

function distanceFromHqInFeet(someValue) {
    let distanceFromHqInFeet = distanceFromHqInBlocks(someValue) * 264;
    return distanceFromHqInFeet;
}

function distanceTravelledInFeet(start, destination) {
    let distanceTravelledInFeet = Math.abs(start - destination) * 264;
    return distanceTravelledInFeet;
}

function calculatesFarePrice(start, destination) {
    let calculatesFarePrice = distanceTravelledInFeet(start, destination);
    if (calculatesFarePrice < 400) {
        return 0;
    } else if (calculatesFarePrice >= 400 && calculatesFarePrice <= 2000) {
        return (calculatesFarePrice - 400) * 0.02;
    } else if (calculatesFarePrice >= 2001 && calculatesFarePrice < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}