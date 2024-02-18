const isLeapYear = (year) => {
    //判斷輸入年份是否為閏年

    // if (year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0)) {
    //     return true;
    // } else {
    //     return false;
    // }

    //簡化邏輯為
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

const handleLeapYearSubmit = (e) => {
    e.preventDefault();
    const year = document.getElementById("leap-year-year").value;
    const leapYearResult = document.getElementById("leap-year-result");

    //確認輸入資料存在
    const y = Number(year);

    let resultTest = "請輸入正確年份";

    //確認輸入年份為數字且>0
    if (y && y > 0) {
        resultTest = `西元 ${year} 年 為 ${isLeapYear(y) ? "閏年" : "平年"}`;
    }

    leapYearResult.innerHTML = resultTest;
};

window.addEventListener("DOMContentLoaded", () => {
    const leapYearForm = document.getElementById("leap-year-form");
    leapYearForm.addEventListener("submit", handleLeapYearSubmit);
});
