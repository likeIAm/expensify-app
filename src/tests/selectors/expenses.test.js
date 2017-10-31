import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
    { id: '1', description: 'Water bill', amount: 33000, createdAt: 0 },
    { id: '2', description: 'Gas bill', amount: 45000, createdAt: moment(0).add(4, 'days').valueOf() },
    { id: '3', description: 'Rent', amount: 123000, createdAt: moment(0).add(-4, 'days').valueOf() },
];

test('should filter by text value', () => {
    const filters = { 
        text: 'bill',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    };
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should filter by start date', () => {
    const filters = { 
        text: '',
        startDate: moment(0),
        endDate: undefined,
        sortBy: 'date'
    };
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should filter by end date', () => {
    const filters = { 
        text: '',
        startDate: undefined,
        endDate: moment(0),
        sortBy: 'date'
    };
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    };
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
})