const getVisibleExpenses = (expenses, { startDate, endDate, text, sortBy }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || startDate >= expense.startDate;
        const endDateMatch = typeof endDate !== 'number' || endDate >= expense.endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

export default getVisibleExpenses;