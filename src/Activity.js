import UserRepository from "../src/UserRepository";

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
        return activityDataById
    }

    // findMilesWalkedByDate(userID, date) {
    // // For a specific day (specified by a date), return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)

    //     const stepsByDate = this.findActivityDataById(userID).find(activityData => activityData.date === date).numSteps
    //     // find user by id √
    //     //.find(user => user.date).numSteps √
    //     // receive date info, find number of steps for that day. √
    //     // multiply # of steps by user's stridelength = n
    //     // 5280ft / n = miles walked that day
    //     const distanceWalked = 5280 / (stepsByDate * UserRepository.findUserData(userID).strideLength)
    //     // <= this is the point I got lost.
    //     // do we need to const a new UserRepository for this test?
    //     // otherwise I don't know how to get the user's stridelength
    //     console.log(distanceWalked());
    // }

    findActiveMinutesByDate(userID, date) {
      const userData = this.findActivityDataById(userID)
      const findActiveMinutesByDate = userData.find(user => user.date === date)
      return findActiveMinutesByDate.minutesActive
    }

    // findWeeklyActiveMinutesData(userID, date) {
    //     const weeklyActiveMinutes = []
    //     this.findActivityDataById(userID, date).forEach(week => weeklyActiveMinutes.push(week.minutesActive))
    //     return weeklyActiveMinutes
    // }

    findWeeklyActiveMinutes(userID, date) {
        const activityData = this.findActivityDataById(userID)
        const getDates = activityData.map(user => user.date)
        const dateIndex = getDates.indexOf(date)
        const weeklyRange = activityData.slice(dateIndex -6, dateIndex +1)

        const weeklyActiveMinutes = weeklyRange.reduce((acc, minutes) => {
            acc += minutes.minutesActive / 7
            return acc
        }, 0)
        
        return weeklyActiveMinutes.toFixed(1)
    }

  

    findStepGoalByDate(userID, date) {
    const userData = this.findActivityDataById(userID)
    const findStepGoalByDate = userData.find(user => user.date === date)
    return findStepGoalByDate.numSteps
   }

    findUsersStairsClimbedAvg(date) {
        const findDay = this.activityData.filter(day => day.date === date)
        
        const avgStairsClimbed = findDay.reduce((acc, activity) => {
            acc += activity.flightsOfStairs
            return acc
        }, 0)
        return avgStairsClimbed / findDay.length
    }

    findAverageStepsByDate(date) {
        const findDay = this.activityData.filter(day => day.date === date)
        
        const avgSteps = findDay.reduce((acc, activity) => {
            acc += activity.numSteps
            return acc
        }, 0)
        return avgSteps / findDay.length
    }

    findAverageMinutesActiveByDate(date) {
        const findDay = this.activityData.filter(day => day.date === date)
        
        const avgActiveMinutes = findDay.reduce((acc, activity) => {
            acc += activity.minutesActive
            return acc
        }, 0)
        return avgActiveMinutes / findDay.length
    }
}


export default Activity;
