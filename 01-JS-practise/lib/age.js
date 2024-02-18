const calculateAge = (year, month, date) => {
    //先取得今天的年月日
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDate = today.getDate();

    //先算出生日年份與今天年份的差值
    let age = todayYear - year;

    //若今天的月份小於生日月分
    //或
    //月份相等而今天的日期小於生日日期
    //則表示今年的生日未到
    //將年齡扣除1年
    if (todayMonth < month) {
        age--;
    } else if (todayMonth == month && todayDate < date) {
        age--;
    }

    //回傳計算後的年齡
    return age;
};

const handleAgeSubmit = (e) => {
    e.preventDefault();
    const ageMonth = document.getElementById("age-month");
    const yearMonth = ageMonth.value.split("-");
    const year = yearMonth[0];
    const month = yearMonth[1];
    const date = document.getElementById("age-date").value;
    const age = calculateAge(year, month, date);

    const ageResult = document.getElementById("age-result");
    ageResult.innerHTML = age >= 0 ? `您目前的歲數為 ${age} 歲` : "您尚未出生";
};

const handleMonthChange = () => {
    const ageMonth = document.getElementById("age-month");
    const yearMonth = ageMonth.value.split("-");
    const year = yearMonth[0];
    const month = yearMonth[1];

    let days = 0;

    const isLeapYear = (year) => {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    };

    switch (Number(month)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 2:
            days = isLeapYear(year) ? 29 : 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
    }

    const ageDate = document.getElementById("age-date");
    ageDate.innerHTML = "";

    for (let i = 1; i < days + 1; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        ageDate.appendChild(option);
    }
};

window.addEventListener("DOMContentLoaded", () => {
    const ageForm = document.getElementById("age-form");
    const ageMonth = document.getElementById("age-month");
    handleMonthChange();
    ageMonth.addEventListener("change", handleMonthChange);

    ageForm.addEventListener("submit", handleAgeSubmit);
});
