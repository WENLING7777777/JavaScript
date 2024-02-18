const convertTemp = (degree, unit) => {
    //第一個參數為溫度度數, 第二個參數為溫度單位

    if (unit === "c") {
        //若溫度單為c為攝氏, 計算攝氏轉華氏
        return (degree * (9 / 5) + 32).toFixed(3).replace(/\.?0+$/, "");
    } else if (unit === "f") {
        //若溫度單為f為華氏, 計算華氏轉攝氏
        return ((degree - 32) * (5 / 9)).toFixed(3).replace(/\.?0+$/, "");
    }
};

const handleTempSubmit = (e) => {
    e.preventDefault();
    const degree = document.getElementById("temp-degree").value;
    const unit = document.getElementById("temp-unit").value;
    const tempResult = document.getElementById("temp-result");

    //將輸入轉換為數字
    const d = Number(degree);
    const converted = convertTemp(d, unit);

    let resultText = "請輸入溫度";

    if (d) {
        resultText = `${
            unit === "c" ? `攝氏 ${degree} ˚C` : `華氏 ${degree} ˚F`
        } = ${unit === "c" ? `華氏 ${converted} ˚F` : `攝氏 ${converted} ˚C`}`;
    }

    tempResult.innerHTML = resultText;
};

window.addEventListener("DOMContentLoaded", () => {
    const tempForm = document.getElementById("temp-form");
    tempForm.addEventListener("submit", handleTempSubmit);
});
