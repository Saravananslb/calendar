export const getDays = (startDay, endDay) => {
    const days = [];
    for (let i = 0; i < startDay; i++) {
        days.push('');
    }
    for (let i = 1; i <= endDay; i++ ) {
        days.push(i);
    }
    return days
}
