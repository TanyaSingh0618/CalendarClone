import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
    month = Math.floor(month);
    const getYear = dayjs().year()
    const getDayofMonth = dayjs(new Date(getYear, month, 1)).day()
    let MonthCount = 0 - getDayofMonth;
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            MonthCount++;
            return dayjs(new Date(getYear, month, MonthCount));
        })
    })
    return daysMatrix;
}