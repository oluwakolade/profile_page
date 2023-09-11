const day = document.querySelector('[data-testid ="currentDayOfTheWeek"]');
const timeUtc = document.querySelector('[data-testid =currenUTCTime]');




Date.prototype.getWeekDay = function() {
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[this.getDay()];
};

const date = new Date();

const dayOfWeek = date.getWeekDay();
const time = date.getUTCMilliseconds();

day.innerHTML = dayOfWeek;
timeUtc.textContent = time;
