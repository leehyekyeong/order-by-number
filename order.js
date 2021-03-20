var menu = ["아메리카노", "카페라떼", "바닐라라떼", "헤이즐넛라떼", "카푸치노", "카페모카"];

var list = document.getElementById("list");
for (var i=0; i<menu.length; i++) {
    list.innerHTML += "<li>" + menu[i] + "</li>";
}

var button = document.querySelector("button");
button.onclick = function() {
    var input = prompt("주문할 메뉴 번호를 입력하세요", "");
    var number = Number(input) - 1;
    // 잘 입력한 경우
    if (number <= menu.length) {
        alert(menu[number] + "를 주문했습니다.");
    }
    // 잘못 입력한 경우
    else {
        alert("잘못된 주문입니다.")
    }
}