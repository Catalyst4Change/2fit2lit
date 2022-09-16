import { expect } from 'chai';
import Activity from '../src/Activity';
import User from '../src/User';
import UserRepository from "../src/UserRepository";


describe('Activity', () => {
    let activityData;
    let activity;
    let user1;
    let user2;

    beforeEach(() => {
        activityData = [
        {
            userID: 1,
            date: "2019/06/15",
            numSteps: 3577,
            minutesActive: 140,
            flightsOfStairs: 16
        },
        {
            userID: 1,
            date: "2019/06/16",
            numSteps: 6637,
            minutesActive: 175,
            flightsOfStairs: 36
        },
        {
            userID: 1,
            date: "2019/06/17",
            numSteps: 14329,
            minutesActive: 168,
            flightsOfStairs: 18
        },
        {
            userID: 1,
            date: "2019/06/18",
            numSteps: 4419,
            minutesActive: 165,
            flightsOfStairs: 33
        },
        {
            userID: 1,
            date: "2019/06/19",
            numSteps: 8429,
            minutesActive: 275,
            flightsOfStairs: 2
        },
        {
            userID: 1,
            date: "2019/06/20",
            numSteps: 14478,
            minutesActive: 140,
            flightsOfStairs: 12
        },
        {
            userID: 1,
            date: "2019/06/21",
            numSteps: 6760,
            minutesActive: 135,
            flightsOfStairs: 6
        },
        {
            userID: 1,
            date: "2019/06/22",
            numSteps: 10289,
            minutesActive: 119,
            flightsOfStairs: 6
        },
        {
            userID: 2,
            date: "2019/06/15",
            numSteps: 4294,
            minutesActive: 138,
            flightsOfStairs: 10
        },
        {
            userID: 2,
            date: "2019/06/16",
            numSteps: 4112,
            minutesActive: 220,
            flightsOfStairs: 37
        },
        {
            userID: 2,
            date: "2019/06/17",
            numSteps: 13750,
            minutesActive: 65,
            flightsOfStairs: 4
        },
        {
            userID: 2,
            date: "2019/06/18",
            numSteps: 4662,
            minutesActive: 181,
            flightsOfStairs: 31
        },
        {
            userID: 2,
            date: "2019/06/19",
            numSteps: 9858,
            minutesActive: 243,
            flightsOfStairs: 44
        },
        {
            userID: 2,
            date: "2019/06/20",
            numSteps: 8153,
            minutesActive: 74,
            flightsOfStairs: 10
        },
        {
            userID: 2,
            date: "2019/06/21",
            numSteps: 10225,
            minutesActive: 174,
            flightsOfStairs: 26
        },
        {
            userID: 2,
            date: "2019/06/22",
            numSteps: 3605,
            minutesActive: 124,
            flightsOfStairs: 31
        }
        ];

        activity = new Activity(activityData)

        user1 = new User({
            id: 1,
            name: "Luisa Hane",
            address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
            email: "Diana.Hayes1@hotmail.com",
            strideLength: 4.3,
            dailyStepGoal: 10000,
            friends: [
            16,
            4,
            8
            ]
        });

        user2 = new User({
            id: 2,
            name: "Jarvis Considine",
            address: "30086 Kathryn Port, Ciceroland NE 07273",
            email: "Dimitri.Bechtelar11@gmail.com",
            strideLength: 4.5,
            dailyStepGoal: 5000,
            friends: [
            9,
            18,
            24,
            19
            ]
        });
    });

    it('should be a function', () => {
        expect(Activity).to.be.a('function')
    });

    it('should be an instance of Activity', () => {
        expect(activity).to.be.an.instanceOf(Activity)
    });

    it('should find activity data for a user by their id', () => {
        expect(activity.findActivityDataById(1)).to.deep.equal([
            {
                userID: 1,
                date: "2019/06/15",
                numSteps: 3577,
                minutesActive: 140,
                flightsOfStairs: 16
            },
            {
                userID: 1,
                date: "2019/06/16",
                numSteps: 6637,
                minutesActive: 175,
                flightsOfStairs: 36
            },
            {
                userID: 1,
                date: "2019/06/17",
                numSteps: 14329,
                minutesActive: 168,
                flightsOfStairs: 18
            },
            {
                userID: 1,
                date: "2019/06/18",
                numSteps: 4419,
                minutesActive: 165,
                flightsOfStairs: 33
            },
            {
                userID: 1,
                date: "2019/06/19",
                numSteps: 8429,
                minutesActive: 275,
                flightsOfStairs: 2
            },
            {
                userID: 1,
                date: "2019/06/20",
                numSteps: 14478,
                minutesActive: 140,
                flightsOfStairs: 12
            },
            {
                userID: 1,
                date: "2019/06/21",
                numSteps: 6760,
                minutesActive: 135,
                flightsOfStairs: 6
            },
            {
                userID: 1,
                date: "2019/06/22",
                numSteps: 10289,
                minutesActive: 119,
                flightsOfStairs: 6
            }
        
        ])
        expect(activity.findActivityDataById(2)).to.deep.equal([
            {
                userID: 2,
                date: "2019/06/15",
                numSteps: 4294,
                minutesActive: 138,
                flightsOfStairs: 10
            },
            {
                userID: 2,
                date: "2019/06/16",
                numSteps: 4112,
                minutesActive: 220,
                flightsOfStairs: 37
            },
            {
                userID: 2,
                date: "2019/06/17",
                numSteps: 13750,
                minutesActive: 65,
                flightsOfStairs: 4
            },
            {
                userID: 2,
                date: "2019/06/18",
                numSteps: 4662,
                minutesActive: 181,
                flightsOfStairs: 31
            },
            {
                userID: 2,
                date: "2019/06/19",
                numSteps: 9858,
                minutesActive: 243,
                flightsOfStairs: 44
            },
            {
                userID: 2,
                date: "2019/06/20",
                numSteps: 8153,
                minutesActive: 74,
                flightsOfStairs: 10
            },
            {
                userID: 2,
                date: "2019/06/21",
                numSteps: 10225,
                minutesActive: 174,
                flightsOfStairs: 26
            },
            {
                userID: 2,
                date: "2019/06/22",
                numSteps: 3605,
                minutesActive: 124,
                flightsOfStairs: 31
            }
        ])
    })

    it.skip('should find the miles walked based on number of steps by a date', () => {
        expect(activity.findMilesWalkedByDate(1, '2019/06/10')).to.equal(4092)
    });

    it('should find active minutes for a given day', () => {
        expect(activity.findActiveMinutesByDate(1, '2019/06/15')).to.equal(140)
        expect(activity.findActiveMinutesByDate(2, '2019/06/15')).to.equal(138)
    });

    it('should find average active minutes for a given week', () => {
        expect(activity.findWeeklyActiveMinutes(1, '2019/06/15')).to.equal(130)
        expect(activity.findWeeklyActiveMinutes(2, '2019/06/15')).to.equal(120)
    });

    it('should find user step goal for a given date', () => {
        expect(activity.findStepGoalByDate(1, '2019/06/15')).to.equal(3577)
        expect(activity.findStepGoalByDate(2, '2019/06/15')).to.equal(4294)
    });

    it.skip('should find all days where user exceeded step goal', () => {
        expect(activity.findExceededStepGoalByDate()).to.equal()
    });

    it.skip('should find user all time stair climbing record', () => {
        expect(activity.findStairClimbingRecord()).to.equal()
    });

    it('should find average stairs climbed for all users on specific date', () => {
        expect(activity.findUsersStairsClimbedAvg('2019/06/15')).to.equal(13)
    });

    it('should find average steps taken for all users on specific date', () => {
        expect(activity.findAverageStepsByDate('2019/06/15')).to.equal(3935.5)
    });

    it('should find average minutes active for a specific date', () => {
        expect(activity.findAverageMinutesActiveByDate('2019/06/15')).to.equal(139)
    });
})
