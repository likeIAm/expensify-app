import moment from 'moment';

const getVisibleExpenses = (expenses, { startDate, endDate, text, sortBy }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? -1 : 1; 
        } else if (sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1;// strange -1 means that a is putted in the array before than b, means with a lower index
        }
    });
};

export default getVisibleExpenses;