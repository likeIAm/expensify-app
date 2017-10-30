import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../../actions/filters';

test('should generate set start date action object', () => {
    const startDate = moment(0);
    const action = setStartDate(startDate);

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const endDate = moment(0);
    const action = setEndDate(endDate);

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set text filter action object with string provided', () => {
    const action = setTextFilter('Rent');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    });
});

test('should generate set text filter action object with no value provided', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sort by amount action object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate sort by date action object', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

