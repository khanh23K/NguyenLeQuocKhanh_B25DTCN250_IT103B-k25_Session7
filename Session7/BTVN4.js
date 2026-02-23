let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Văn B-Hậu vệ",
  "P003-Lê Văn C-Tiền vệ",
  "P004-Phạm Văn D-Tiền đạo",
  "P005-Hoàng Văn E-Tiền đạo"
];

function hienThiDanhSach() {
  console.log("Danh sách đội bóng:");
  for (let i = 0; i < players.length; i++) {
    let tach = players[i].split("-");
    console.log(`${i + 1}. ${tach[0]} | ${tach[1]} | ${tach[2]}`);
  }
}

function demCauThuTheoViTri(ds) {
  let ketQua = {};

  for (let i = 0; i < ds.length; i++) {
    let viTri = ds[i].split("-")[2];
    ketQua[viTri] = (ketQua[viTri] || 0) + 1;
  }

  return ketQua;
}

function kiemTraThuMon() {
  for (let i = 0; i < players.length; i++) {
    if (players[i].split("-")[2] === "Thủ môn") {
      return true;
    }
  }
  return false;
}

hienThiDanhSach();

console.log("Số lượng cầu thủ theo vị trí:");
console.log(demCauThuTheoViTri(players));

console.log("\n Đội bóng có thủ môn không?");
console.log(kiemTraThuMon());