window.addEventListener("DOMContentLoaded", () => {
    const multiplicationTableResult = document.getElementById(
        "multiplication-table-result"
    );

    //用 for loop 創建 elements

    //第一個迴圈從2到9
    for (let i = 2; i < 10; i++) {
        //先加入8個縱列(各代表2到9被乘數)
        const col = document.createElement("div");
        col.classList.add("col", `col-${i}`);
        multiplicationTableResult.appendChild(col);

        //第二個迴圈從1到9
        for (let k = 1; k < 10; k++) {
            //在每個縱列中加入1到9的乘法算式
            const item = document.createElement("div");
            item.textContent = `${i} x ${k} = ${i * k}`;
            item.classList.add("item");
            const col = document.querySelector(`.col-${i}`);
            col.appendChild(item);
        }
    }
});
