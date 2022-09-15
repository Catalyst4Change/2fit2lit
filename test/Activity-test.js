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
            userID: 2,
            date: "2019/06/15",
            numSteps: 4294,
            minutesActive: 138,
            flightsOfStairs: 10
            },
            {
            userID: 1,
            date: "2019/06/14",
            numSteps: 1200,
            minutesActive: 100,
            flightsOfStairs: 5
            },
            {
            userID: 2,
            date: "2019/06/14",
            numSteps: 1521,
            minutesActive: 155,
            flightsOfStairs: 11
            },
            {
            userID: 1,
            date: "2019/06/13",
            numSteps: 4001,
            minutesActive: 175,
            flightsOfStairs: 20
            },
            {
            userID: 2,
            date: "2019/06/13",
            numSteps: 5280,
            minutesActive: 160,
            flightsOfStairs: 9
            },
            {
            userID: 1,
            date: "2019/06/12",
            numSteps: 2500,
            minutesActive: 60,
            flightsOfStairs: 19
            },
            {
            userID: 2,
            date: "2019/06/12",
            numSteps: 3200,
            minutesActive: 145,
            flightsOfStairs: 15
            },
            {
            userID: 1,
            date: "2019/06/11",
            numSteps: 3577,
            minutesActive: 140,
            flightsOfStairs: 16
            },
            {
            userID: 2,
            date: "2019/06/11",
            numSteps: 4294,
            minutesActive: 138,
            flightsOfStairs: 10
            },
            {
            userID: 1,
            date: "2019/06/10",
            numSteps: 4092,
            minutesActive: 166,
            flightsOfStairs: 20
            },
            {
            userID: 2,
            date: "2019/06/10",
            numSteps: 6969,
            minutesActive: 420,
            flightsOfStairs: 13
            },
            {
            userID: 1,
            date: "2019/06/09",
            numSteps: 5413,
            minutesActive: 156,
            flightsOfStairs: 16
            },
            {
            userID: 2,
            date: "2019/06/09",
            numSteps: 4568,
            minutesActive: 153,
            flightsOfStairs: 12
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
            date: "2019/06/14",
            numSteps: 1200,
            minutesActive: 100,
            flightsOfStairs: 5
            },
            {
            userID: 1,
            date: "2019/06/13",
            numSteps: 4001,
            minutesActive: 175,
            flightsOfStairs: 20
            },
            {
            userID: 1,
            date: "2019/06/12",
            numSteps: 2500,
            minutesActive: 60,
            flightsOfStairs: 19
            },
            {
            userID: 1,
            date: "2019/06/11",
            numSteps: 3577,
            minutesActive: 140,
            flightsOfStairs: 16
            },
            {
            userID: 1,
            date: "2019/06/10",
            numSteps: 4092,
            minutesActive: 166,
            flightsOfStairs: 20
            },
            {
            userID: 1,
            date: "2019/06/09",
            numSteps: 5413,
            minutesActive: 156,
            flightsOfStairs: 16
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
            date: "2019/06/14",
            numSteps: 1521,
            minutesActive: 155,
            flightsOfStairs: 11
            },
            {
            userID: 2,
            date: "2019/06/13",
            numSteps: 5280,
            minutesActive: 160,
            flightsOfStairs: 9
            },
            {
            userID: 2,
            date: "2019/06/12",
            numSteps: 3200,
            minutesActive: 145,
            flightsOfStairs: 15
            },
            {
            userID: 2,
            date: "2019/06/11",
            numSteps: 4294,
            minutesActive: 138,
            flightsOfStairs: 10
            },
            {
            userID: 2,
            date: "2019/06/10",
            numSteps: 6969,
            minutesActive: 420,
            flightsOfStairs: 13
            },
            {
            userID: 2,
            date: "2019/06/09",
            numSteps: 4568,
            minutesActive: 153,
            flightsOfStairs: 12
            }
        ])
    })

    it('should find the miles walked based on number of steps by a date', () => {
        expect(activity.findMilesWalkedByDate(1, '2019/06/10')).to.equal(4092)
    });

    it('should find active minutes for a given day', () => {
        expect(activity.findActiveMinutesByDate(1, "2019/06/15")).to.equal(140)
    })

    it.skip('should find average active minutes for a given week', () => {
        expect(activity.findActiveMinutesForWeek()).to.equal()
    });

    it.skip('should find user step goal for a given date', () => {
        expect(activity.findStepGoalByDate()).to.equal()
    });

    it.skip('should find all days where user exceeded step goal', () => {
        expect(activity.findExceededStepGoalByDate()).to.equal()
    });

    it.skip('should find user all time stair climbing record', () => {
        expect(activity.findStairClimbingRecord()).to.equal()
    });

    it.skip('should find average stairs climbed for all users on specific date', () => {
        expect(activity.findAverageStairClimbedByDate()).to.equal()
    });

    it.skip('should find average steps taken for all users on specific date', () => {
        expect(activity.findAverageStepsByDate()).to.equal()
    });

    it.skip('should find average minutes active for a specific date', () => {
        expect(activity.findAverageMinutesActiveByDate()).to.equal()
    });





})
