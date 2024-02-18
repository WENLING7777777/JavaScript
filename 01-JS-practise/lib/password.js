const veifyPassword = (password) => {
    //首先確認有密碼資料
    if (!password) {
        return "請輸入密碼";
    } else {
        const noticeArray = [];

        //確認密碼是否符合規範, 若不符合將該項目加到 noticeArray 中
        if (password.length < 8) noticeArray.push("密碼少於八碼");
        if (!/[A-Z]/.test(password)) noticeArray.push("必須包含大寫字母");
        if (!/[a-z]/.test(password)) noticeArray.push("必須包含小寫字母");
        if (!/[0-9]/.test(password)) noticeArray.push("必須包含數字");
        if (!/[^A-Za-z0-9\s]/.test(password)) noticeArray.push("必須包含符號");

        //若有一項不符合需求將 noticeArray 轉為字串回傳
        if (noticeArray.length === 0) {
            return "密碼符合需求";
        } else {
            return noticeArray.join(", ");
        }
    }
};

const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const password = document.getElementById("password-text").value;
    const passwordResult = document.getElementById("password-result");
    passwordResult.innerHTML = veifyPassword(password);
};

window.addEventListener("DOMContentLoaded", () => {
    const passwordForm = document.getElementById("password-form");
    passwordForm.addEventListener("submit", handlePasswordSubmit);
});
