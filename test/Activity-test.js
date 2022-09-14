import { expect } from 'chai';
import Activity from '../src/Activity';
import User from '../src/User';

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

    it('should find user by ID', () => {
        expect()
    })




})