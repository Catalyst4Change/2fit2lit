class Activity {
    constructor(activityData, userID) {
        this.userID = userID;
        this.activityData = activityData;
    }
    

    findActivityDataById(userID) {
        const activityDataById = this.activityData.filter(user => {
            if (userID === user.userID) {
                return user
            }
        })
        console.log(activityDataById)
        return activityDataById
    }

    // findMilesWalkedByDate(userID, date) {

    // }

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