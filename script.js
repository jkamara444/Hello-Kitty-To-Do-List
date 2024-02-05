const tBox = document.getElementById("tbox");
const drpLst = document.getElementById("drplst");

function addTask() {
    if (tBox.value === '') {
        alert("Text is blank");
    } else {
        let li = document.createElement("li");
        li.innerHTML = tBox.value;
        drpLst.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);
    }
    tBox.value = ""; keepInfo();
}

drpLst.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        keepInfo();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        keepInfo();
    }
}, false);

function keepInfo() {
    localStorage.setItem("data", drpLst.innerHTML);
}
function showList() {
    drpLst.innerHTML = localStorage.getItem("data")
}

showList();

