const getBmi = (height, weight) => {
    let bmi = "未計算";
    let comment = "資料有誤";

    //確認輸入身高體重存在
    if (!height || !weight) return { bmi, comment };

    //將form的字串轉為數字
    const h = Number(height);
    const w = Number(weight);

    //確認身高體重為數字且>0
    if (h && w) {
        //計算BMI並四捨五入取小數點後三位
        bmi = (w / (h / 100) ** 2).toFixed(3).replace(/\.?0+$/, "");

        //根據BMI數值取得判定結果
        if (bmi < 18.5) {
            comment = "過輕";
        } else if (bmi < 24) {
            comment = "正常";
        } else if (bmi < 27) {
            comment = "過重";
        } else if (bmi < 30) {
            comment = "輕度肥胖";
        } else if (bmi < 35) {
            comment = "中度肥胖";
        } else {
            comment = "過重";
        }
    }

    return { bmi, comment };
};

const handleBmiSubmit = (e) => {
    e.preventDefault();
    const height = document.getElementById("bmi-height").value;
    const weight = document.getElementById("bmi-weight").value;
    const bmiResult = document.getElementById("bmi-result");
    const result = getBmi(height, weight);

    bmiResult.innerHTML = `${result.bmi} (${result.comment})`;
};

window.addEventListener("DOMContentLoaded", () => {
    const bmiForm = document.getElementById("bmi-form");
    bmiForm.addEventListener("submit", handleBmiSubmit);
});
