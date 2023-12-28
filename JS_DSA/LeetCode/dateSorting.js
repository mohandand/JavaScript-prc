const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function sortDate(dateArray){
    dateArray.sort((a,b) => {
        let [day1, month1, year1] = a.split(" ");
        let [day2, month2, year2] = b.split(" ");
        if(year1 !== year2) return parseInt(year1) - parseInt(year2);
        const monthIndex1 =    months.indexOf(month1)
        const monthIndex2 =    months.indexOf(month2)
        if(monthIndex1 !== monthIndex2) return monthIndex1-monthIndex2;
        return parseInt(day1)-parseInt(day2);
    })
    return dateArray
}
// Example usage:
const dates = ['01 Mar 2017', '03 Feb 2017', '15 Jan 1998','15 Jan 2008'];
const sortedDates = sortDate(dates);
console.log(sortedDates);