export const selectedYear = new Date().getFullYear();
export const selectedMonth = new Date().getMonth();

export const daysInMonth = function (month, year) {
    return new Date(year, month + 1, 0).getDate();
}

export const monthDays = function (date) {
    return new Date(date).getDay();
}