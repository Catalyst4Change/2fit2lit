import UserRepository from "./UserRepository";

class Activity {
    constructor(activityData, /* userID */) {
        // this.userID = userID;
        this.activityData = activityData;
    }

    findActivityDataById(userID) {
        const activityDataById = this.activityData.filter(user => {
            if (userID === user.userID) {
                return user
            }
        })
        return activityDataById
    }

    findMilesWalkedByDate(userID, date) {
    // For a specific day (specified by a date), return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)
    
        const stepsByDate = this.findActivityDataById(userID).find(activityData => activityData.date === date).numSteps
        // find user by id √
        //.find(user => user.date).numSteps √
        // receive date info, find number of steps for that day. √
        // multiply # of steps by user's stridelength = n
        // 5280ft / n = miles walked that day
        const distanceWalked = 5280 / (stepsByDate * UserRepository.findUserData(userID).strideLength)
        // <= this is the point I got lost.
        // do we need to const a new UserRepository for this test?
        // otherwise I don't know how to get the user's stridelength
        console.log(distanceWalked()); 
    }

    //findActiveMinutesByDate(userID, date) {

    //}

    //findActiveMinutesForWeek(userID) {

   // }

   //findStepGoalByDate() {

   //}

   //findExceededStepGoalByDate() {

   //}

   //findStairClimbingRecord() {

   //}


}

export default Activity;