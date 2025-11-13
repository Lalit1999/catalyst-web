const generateDates = (n) => {
    let dateObj = {};
    const today = new Date(); // Get the current date

    for (let i = 0; i < n; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() - i);
        currentDate.setHours(0, 0, 0, 0);
        dateObj[currentDate.toISOString().split('T')[0]] = 0;
    }

    return dateObj;
};

const generateDateSeries = (data = [], num) => {
    if (!Array.isArray(data)) return [];

    const dates = data.map((timestamp) => {
        const date = new Date(timestamp);
        date.setHours(0, 0, 0, 0);
        return date.toISOString().split('T')[0];
    });
    const dateObj = generateDates(num);

    for (const date of Object.keys(dateObj)) {
        const count = dates.reduce((total, val) => {
            // console.log(total, val, parseInt(date));
            if (val === date) return total + 1;
            return total;
        }, 0);
        dateObj[date] = count;
    }

    return Object.keys(dateObj).map((one) => ({ x: one, y: dateObj[one] }));
};

const generateDateSeriesViews = (data = [], numDays) => {
    if (!Array.isArray(data)) return [];

    const base = generateDates(numDays); // All dates set to 0

    for (const item of data) {
        if (base[item.date] !== undefined) {
            base[item.date] = item.views;
        }
    }

    return Object.keys(base).sort().map((date) => ({ x: date, y: base[date] }));
};

export { generateDates, generateDateSeries, generateDateSeriesViews };