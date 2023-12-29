function preprocessDate(dates) {
    return dates.map((date) => {
        const [day, month, year] = date.split(' ');
        const dayWithoutSuffix = day.slice(0, -2);
        // Create a Date object to handle month conversion
        const dateObj = new Date(`${month} ${dayWithoutSuffix}, ${year}`);
        // Get the formatted date components
        const formattedYear = dateObj.getFullYear();
        const formattedMonth = String(dateObj.getMonth() + 1).padStart(2, '0');
        const formattedDay = String(dateObj.getDate()).padStart(2, '0');
        // Return the formatted date string
        return `${formattedYear}-${formattedMonth}-${formattedDay}`;
    });
}
// Example usage:
const inputDates = ['1st Mar 1974', '22nd Jan 2013', '7th Apr 1904'];
const convertedDates = preprocessDate(inputDates);
console.log(convertedDates);
// Output: ['1974-03-01', '2013-01-22', '1904-04-07']
