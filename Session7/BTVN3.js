let players = [];

// Nhập số lượng cầu thủ
let n = parseInt(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

while (isNaN(n) || n <= 0) {
    n = parseInt(prompt("Nhập lại số hợp lệ (>0):"));
}

// Hàm chuyển số thành vị trí
function getPosition(choice) {
    switch (choice) {
        case "1": return "Thủ môn";
        case "2": return "Hậu vệ";
        case "3": return "Tiền vệ";
        case "4": return "Tiền đạo";
        default: return null;
    }
}

for (let i = 0; i < n; i++) {

    let id;
    let isDuplicate;

    do {
        id = prompt("Nhập mã cầu thủ:");
        isDuplicate = false;

        for (let j = 0; j < players.length; j++) {
            let parts = players[j].split("-");
            if (parts[0] === id) {
                isDuplicate = true;
                alert("Mã bị trùng! Nhập lại.");
                break;
            }
        }

    } while (!id || isDuplicate);

    let name;
    do {
        name = prompt("Nhập tên cầu thủ:");
    } while (!name || name.trim() === "");

    let positionChoice;
    let position;

    do {
        positionChoice = prompt("Chọn vị trí: 1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo");
        position = getPosition(positionChoice);

        if (!position) alert("Chọn sai! Nhập lại.");
    } while (!position);

    players.push(id + "-" + name + "-" + position);
}
function printTeamRoster() {
    console.log("===== DANH SÁCH ĐỘI BÓNG =====");

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        console.log(
            (i + 1) + ". Mã: " + parts[0] +
            " | Tên: " + parts[1] +
            " | Vị trí: " + parts[2]
        );
    }
}

function pushPlayer(name, positionChoice) {
    let id;
    let isDuplicate;

    do {
        id = prompt("Nhập mã cầu thủ mới:");
        isDuplicate = false;

        for (let i = 0; i < players.length; i++) {
            let parts = players[i].split("-");
            if (parts[0] === id) {
                isDuplicate = true;
                alert("Mã bị trùng! Nhập lại.");
                break;
            }
        }

    } while (!id || isDuplicate);

    let position = getPosition(positionChoice);

    if (!position) {
        console.log("Vị trí không hợp lệ!");
        return;
    }

    players.push(id + "-" + name + "-" + position);
    console.log("Đã thêm cầu thủ!");
}
printTeamRoster();
