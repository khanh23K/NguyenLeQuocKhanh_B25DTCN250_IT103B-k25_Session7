let list = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Văn B-Hậu vệ",
  "P003-Lê Văn C-Tiền vệ",
  "P004-Phạm Văn D-Tiền đạo",
  "P005-Hoàng Văn E-Tiền đạo",
  "P006-Nguyễn Thành Long-Hậu vệ"
];
function getAllPositions() {
    let positions = [];

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let position = parts[2];

        if (!positions.includes(position)) {
            positions.push(position);
        }
    }

    return positions;
}

function findPlayersWithLongestName() {
    let longestName = "";

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let name = parts[1];

        if (name.length > longestName.length) {
            longestName = name;
        }
    }

    return longestName;
}

function countPlayersStartingWithLetter(letter) {
    let count = 0;
    letter = letter.toLowerCase();

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let name = parts[1].toLowerCase();

        if (name.startsWith(letter)) {
            count++;
        }
    }

    return count;
}

console.log("Các vị trí:", getAllPositions());

console.log("Tên dài nhất:", findPlayersWithLongestName());

console.log("Số cầu thủ bắt đầu bằng chữ 'N':", countPlayersStartingWithLetter("N"));