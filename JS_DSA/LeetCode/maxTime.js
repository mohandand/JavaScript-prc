function maxNetworkingPeriod(start, finish, k) {
    const n = start.length;
    const intervals = [];

    // Create an array of intervals with start and end times
    for (let i = 0; i < n; i++) {
        intervals.push({ start: start[i], end: finish[i] });
    }

    // Sort intervals based on end times
    intervals.sort((a, b) => a.end - b.end);

    // Calculate the free time between intervals
    let maxBreaks = [];
    let maxBreak = intervals[0].start; // Initial break before the first presentation

    for (let i = 1; i < n; i++) {
        const currentBreak = intervals[i].start - intervals[i - 1].end;
        maxBreak += currentBreak;
        maxBreaks.push({ index: i, breakLength: currentBreak });
    }

    // Sort the breaks in descending order of length
    maxBreaks.sort((a, b) => b.breakLength - a.breakLength);

    // Reschedule k meetings to maximize the length of the longest break
    for (let i = 0; i < k && i < maxBreaks.length; i++) {
        maxBreak += maxBreaks[i].breakLength;
    }

    return maxBreak;
}

// Example usage:
const startTimes = [0,6,7];
const endTimes = [5,7,8];
const maxReschedules = 2;

const maxBreakLength = maxNetworkingPeriod(startTimes, endTimes, maxReschedules);
console.log("Maximum Length of Longest Networking Period:", maxBreakLength);
