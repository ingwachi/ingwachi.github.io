$(document).ready(function () {
    console.log("Hello jQuery")

    let guessName = [];
    let numBuffer = [];
    let luckyName = [];

    $('button.add-click').on('click', function () {
        if (document.getElementById("name").value == "") {
            alert("กรุณากรอกชื่อผู้เข้าร่วมงาน");
        }
        else {
            guessName.push(document.getElementById("name").value);
            document.getElementById("guess-name").innerHTML = "";
            guessName.forEach(printAllGuess);
            document.getElementById("name").value = "";
        }
    })

    function printAllGuess(item, index) {
        document.getElementById("guess-name").innerHTML += (index + 1) + " : " + item + "<br>";
    }

    $('button.rand-click').on('click', function () {
        numBuffer = [];
        luckyName = [];
        if (guessName.length == 0) {
            alert("ไม่มีผู้ร่วมงาน");
        }
        if (document.getElementById("num-rw").value == 0) {
            alert("กรุณาใส่จำนวนของรางวัล");
        }
        else {
            for (i = 0; i < document.getElementById("num-rw").value; i++) {
                if (i == guessName.length) {
                    break;
                }
                let temp = Math.floor(Math.random() * guessName.length);
                if (numBuffer.includes(temp)) {
                    while (numBuffer.includes(temp)) {
                        temp = Math.floor(Math.random() * guessName.length);
                    }
                    numBuffer.push(temp);
                    luckyName.push(guessName[temp]);
                }
                else {
                    numBuffer.push(temp);
                    luckyName.push(guessName[temp]);
                }
            }
            console.log(numBuffer);
            console.log(luckyName);
        }
        document.getElementById("luckyName").innerHTML = "";
        luckyName.forEach(printAllLuckyName);
    })

    function printAllLuckyName(item, index) {
        document.getElementById("luckyName").innerHTML += "รางวัลหมายเลข " + (index + 1) + " : " + item + "<br>";
    }
})