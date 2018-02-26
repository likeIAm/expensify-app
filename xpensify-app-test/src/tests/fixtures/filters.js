import moment from 'moment';

const filters = {
    text: '',
    orderBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bill',
    orderBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(5, 'days')
};

export { filters, altFilters };