const searhBtn = document.querySelector("#searchBtn");
const pastDate = document.querySelector("#anniDateInput");




// *create Function calculate
let today = new Date();
let monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let monthDay = today.getMonth();
let anniversary = "";
const anniCalculate = (date1, date2) => {
    const year = document.querySelector("#year");
    const month = document.querySelector("#month");
    let yearCheck = year.checked;
    let monthCheck = month.checked;
    let diff = Math.floor(date2.getTime() - date1.getTime());
    let day = 1000 * 60 * 60 * 24;
    let days = Math.floor(diff / day);
    let months = Math.round(days / monthDays[monthDay]);
    let years = Math.floor(months / 12);
    months = months > 12 ? months -= 12 : months
    if (yearCheck && monthCheck) {
        anniversary = `
        <h1>Happy Anniversary Day</h1>
        <img src="./images/In love-pana.png" alt="love1" class="img1">
        <p>It has been ${years} year and ${months} months and ${days} days since you started your relationship.</p>
       <a href="index.html">Back</a>
        `;
    } else if (yearCheck) {
        anniversary = `
        <h1>Happy Anniversary Day</h1>
         <img src="./images/In love-pana.png" alt="love1" class="img1">
        <p>It has been ${years} years and ${days} days since you started your relationship.</p>
        <a href="index.html">Back</a>
        `;
    } else if (monthCheck) {
        anniversary = `
        <h1>Happy Anniversary Day</h1>
         <img src="./images/In love-pana.png" alt="love1" class="img1">
        <p>It has been ${months} months and ${days} days since you started your relationship.</p>
        <a href="index.html">Back</a>
        `;
    } else {
        anniversary = `
        <h1>Happy Anniversary Day</h1>
        <img src="./images/In love-pana.png" alt="love1" class="img1">
        <p>It has been ${days} days since you started your relationship.</p>
        <a href="index.html">Back</a>
        `;
    }
    document.querySelector(".container").innerHTML = anniversary;
}
searhBtn.addEventListener("click", () => {
    const anniDate = pastDate.value;
    let past = new Date(anniDate);
    anniCalculate(past, today);
});