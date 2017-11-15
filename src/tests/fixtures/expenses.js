import moment from 'moment';

export default [
    { id: '1', description: 'Water bill', amount: 33000, createdAt: 0 },
    { id: '2', description: 'Gas bill', amount: 45000, createdAt: moment(0).add(4, 'days').valueOf() },
    { id: '3', description: 'Rent', amount: 123000, createdAt: moment(0).add(-4, 'days').valueOf() },
];