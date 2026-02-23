let playerIds = ["P001","P002","P003","P004","P005"];
let playerNames = [
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
    "Phạm Văn D",
    "Hoàng Thị E",
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];

function printTeamRoster() {
    console.log("=== DANH SÁCH CẦU THỦ ===");
    for (let i = 0; i < playerIds.length; i++) {
        console.log(
            (i + 1) + ". " +
            playerIds[i] + " - " +
            playerNames[i] + " - Áo số: " +
            playerJerseyNumbers[i]
        );
    }
}

function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
    let index = playerIds.indexOf(playerId);

    if (index !== -1) {
        playerNames[index] = newName;
        playerJerseyNumbers[index] = newJerseyNumber;

        console.log("Cập nhật thành công!");
        printTeamRoster();
    } else {
        console.log("Không tìm thấy cầu thủ với mã này!");
    }
}
printTeamRoster();

let inputId = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");

if (playerIds.includes(inputId)) {
    let newName = prompt("Nhập tên mới:");
    let newJersey = parseInt(prompt("Nhập số áo mới (1–99):"));

    if (newJersey >= 1 && newJersey <= 99 && !isNaN(newJersey)) {
        updatePlayerNameAndJersey(inputId, newName, newJersey);
    } else {
        console.log("Số áo không hợp lệ!");
    }
} else {
    console.log("Không tìm thấy cầu thủ với mã này!");
}