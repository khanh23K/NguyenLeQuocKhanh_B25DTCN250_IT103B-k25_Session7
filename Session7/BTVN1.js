let playerIds = [];
let playerPositions = [];

n = parseInt(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng? (số nguyên dương)"));

function trungLap(id) {
    for(let i=0; i<playerIds.length ;i++){
        if(playerIds[i] === id){
            return true;
        }
    }
    return false;
}
for (let i=0; i < n;i++){
    let id;
    do {
        id = prompt("Nhập mã cầu thủ" + (i+1) + ":");
        if(trungLap(id)){
            alert("Mã bị trùng mời nhập lại");
        }
    }while(trungLap(id));
playerIds.push(id);

let choice;
let position;

do{
    choice = parseInt(prompt(
            "Chọn vị trí:\n1. Thủ môn\n2. Hậu vệ\n3. Tiền vệ\n4. Tiền đạo"
        ));

        switch (choice) {
            case 1:
                position = "Thủ môn";
                break;
            case 2:
                position = "Hậu vệ";
                break;
            case 3:
                position = "Tiền vệ";
                break;
            case 4:
                position = "Tiền đạo";
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    } while (choice < 1 || choice > 4);

    playerPositions.push(position);
}

function printTeamRoster() {
    console.log("=== DANH SÁCH ĐỘI BÓNG ===");
    for (let i = 0; i < playerIds.length; i++) {
        console.log(
            (i + 1) + ". Mã: " + playerIds[i] +
            " | Vị trí: " + playerPositions[i]
        );
    }
}

function findPlayersByPosition(position) {
    let result = [];

    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            result.push(i);
        }
    }

    return result;
}

printTeamRoster();

let pos = prompt("Nhập vị trí muốn tìm (Thủ môn / Hậu vệ / Tiền vệ / Tiền đạo):");
let indexes = findPlayersByPosition(pos);

console.log("Các cầu thủ ở vị trí " + pos + ": ", indexes);