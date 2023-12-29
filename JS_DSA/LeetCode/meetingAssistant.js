function getEarliestMeetTime(events, k) {
    const schedule = {};

    // Parse events and update the schedule
    for (const event of events) {
        const [person, action, start, end] = event.split(' ');
        const startTime = convertToMinutes(start);
        const endTime = convertToMinutes(end);

        if (!schedule[person]) {
            schedule[person] = [];
        }

        schedule[person].push({ startTime, endTime });
    }

    // Find the earliest available time for all people
    const allPeople = Object.keys(schedule);

    for (let time = 0; time <= 24 * 60; time++) {
        const endTime = time + k;

        if (allPeople.every(person => isPersonAvailableAtTime(schedule[person], time, endTime))) {
            return convertToTimeFormat(time);
        }
    }

    return '-1';
}

function convertToMinutes(time) {
    const [hours, minutes] = time.split(':');
    return parseInt(hours) * 60 + parseInt(minutes);
}

function convertToTimeFormat(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

function isPersonAvailableAtTime(events, startTime, endTime) {
    for (const event of events) {
        if (!(event.endTime <= startTime || event.startTime >= endTime)) {
            return false; // Person is busy at this time
        }
    }

    return true; // Person is available at this time
}

// Example usage:
const events = ["Alex sleep 00:00 08:00", "Sam sleep 07:00 13:00", "Alex lunch 12:30 13:59"];
const k = 60;
const earliestMeetTime = getEarliestMeetTime(events, k);
console.log(earliestMeetTime);
