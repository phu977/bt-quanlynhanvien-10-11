// var arrNhanVien = getStorageJSON("arrNhanVien");
// renderTableNhanVien(arrNhanVien)
var arrNhanVien = [];

document.querySelector("#btnThemNV").onclick = function () {
  var nhanVienNew = new NhanVien();
  nhanVienNew.tknv = document.querySelector("#tknv").value;
  nhanVienNew.name = document.querySelector("#name").value;
  nhanVienNew.email = document.querySelector("#email").value;
  nhanVienNew.password = document.querySelector("#password").value;
  nhanVienNew.datepicker = document.querySelector("#datepicker").value;
  nhanVienNew.luongCB = document.querySelector("#luongCB").value;
  nhanVienNew.chucvu = document.querySelector("#chucvu").value;
  nhanVienNew.gioLam = document.querySelector("#gioLam").value * 1;
  // kiem tra rong
  var valid =
    validation.kiemTraRong(nhanVienNew.tknv, "taikhoan") &
    validation.kiemTraRong(nhanVienNew.name, "name");
  // kiem tra number
  var valid =
    validation.kiemTraNumber(nhanVienNew.luongCB, "luongCB") &
    validation.kiemTraNumber(nhanVienNew.luongCB,"gioLam");
  if (!valid) {
    return;
  }
  console.log(nhanVienNew);
  console.log(nhanVienNew.tongLuong().toLocaleString());
  console.log(nhanVienNew.xepLoai());
  arrNhanVien.push(nhanVienNew);
  console.log(arrNhanVien);
  renderTableNhanVien(arrNhanVien);
  saveStorageArrNhanVien();
  document.querySelector("#tknv").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#datepicker").value = "";
  document.querySelector("#luongCB").value = "";
  document.querySelector("#chucvu").value = "";
  document.querySelector("#gioLam").value = "";
};

function xoaNhanVien(indexDel) {
  arrNhanVien.splice(indexDel, 1);
  //Sau khi xoá thì tạo lại table
  renderTableNhanVien(arrNhanVien);
}
function suaNhanVien(indexFix) {
  var NhanVienFix = arrNhanVien[indexFix];
  document.querySelector("#tknv").value = NhanVienFix.tknv;
  document.querySelector("#name").value = NhanVienFix.name;
  document.querySelector("#email").value = NhanVienFix.email;
  document.querySelector("#password").value = NhanVienFix.password;
  document.querySelector("#datepicker").value = NhanVienFix.datepicker;
  document.querySelector("#luongCB").value = NhanVienFix.luongCB;
  document.querySelector("#chucvu").value = NhanVienFix.chucvu;
  document.querySelector("#gioLam").value = NhanVienFix.gioLam;
}
document.querySelector("#btnCapNhat").onclick = function () {
  var nhanVienUpdate = new NhanVien();
  nhanVienUpdate.tknv = document.querySelector("#tknv").value;
  nhanVienUpdate.name = document.querySelector("#name").value;
  nhanVienUpdate.email = document.querySelector("#email").value;
  nhanVienUpdate.password = document.querySelector("#password").value;
  nhanVienUpdate.datepicker = document.querySelector("#datepicker").value;
  nhanVienUpdate.luongCB = document.querySelector("#luongCB").value;
  nhanVienUpdate.chucvu = document.querySelector("#chucvu").value;
  nhanVienUpdate.gioLam = document.querySelector("#gioLam").value;
  var indexUpdate = -1;
  for (var index = 0; index < arrNhanVien.length; index++) {
    if (arrNhanVien[index].tknv === nhanVienUpdate.tknv) {
      indexUpdate = index;
      break;
    }
  }
  if (indexUpdate !== -1) {
    arrNhanVien[indexUpdate].name = nhanVienUpdate.name;
    arrNhanVien[indexUpdate].email = nhanVienUpdate.email;
    arrNhanVien[indexUpdate].password = nhanVienUpdate.password;
    arrNhanVien[indexUpdate].datepicker = nhanVienUpdate.datepicker;
    arrNhanVien[indexUpdate].luongCB = nhanVienUpdate.luongCB;
    arrNhanVien[indexUpdate].chucvu = nhanVienUpdate.chucvu;
    arrNhanVien[indexUpdate].gioLam = nhanVienUpdate.gioLam;
    renderTableNhanVien(arrNhanVien);
    saveStorageArrNhanVien();
    document.querySelector("#tknv").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#datepicker").value = "";
    document.querySelector("#luongCB").value = "";
    document.querySelector("#chucvu").value = "";
    document.querySelector("#gioLam").value = "";
  }
};

document.querySelector("#btnTimNV").onclick = function () {
  console.log("yes");
  var tuKhoa = document.querySelector("#searchName").value;
  tuKhoa = stringToSlug(tuKhoa);
  if (tuKhoa === "") {
    alert("Vui lòng nhập xếp loại để tìm kiếm!");
    return;
  }

  var danhSachTimThay = arrNhanVien.filter(function (nhan_vien) {
    return stringToSlug(xepLoai(nhan_vien.gioLam)) === tuKhoa;
  });
  console.log(danhSachTimThay);
  if (danhSachTimThay.length > 0) {
    renderTableNhanVien(danhSachTimThay);
  } else {
    console.log(`Không tìm thấy nhân viên nào có xếp loại "${tuKhoa}".`);
    document.querySelector("#tableDanhSach").innerHTML = "";
  }
};

//Phương thức lưu vào application storage
function saveStorageArrNhanVien() {
  //Chuyển arr về chuỗi
  var strNhanVien = JSON.stringify(arrNhanVien); // '[{},{},{}]'
  //Lưu string vào storage
  localStorage.setItem("arrNhanVien", strNhanVien);
}

//Phương thức lấy dữ liệu từ localstorage
function getStorageJSON(name) {
  var json = localStorage.getItem(name);
  //kiểm tra xem giá trị lấy về từ local có giá trị nào không, nếu k có thì return về mảng rỗng
  if (!json) {
    return [];
  }
  var list = JSON.parse(json);
  for (var index = 0; index < list.length; index++) {
    var nhanVien = list[index];
    list[index] = new NhanVien();
    (list[index].tknv = nhanVien.tknv),
      (list[index].name = nhanVien.name),
      (list[index].email = nhanVien.email),
      (list[index].password = nhanVien.password),
      (list[index].luongCB = nhanVien.luongCB),
      (list[index].chucvu = nhanVien.chucvu),
      (list[index].gioLam = nhanVien.gioLam),
      (list[index].datepicker = nhanVien.datepicker);
  }
  return list;
}

window.onload = function () {
  //Sự kiện khi windown load xong html css js
  //Khi trang web load lên thì lấy dữ liệu từ storage arrSinhVien nếu có thì gán vào
  if (getStorageJSON("arrNhanVien")) {
    //Lấy ra
    arrNhanVien = getStorageJSON("arrNhanVien");
    console.log(arrNhanVien);
    //Tạo table
    renderTableNhanVien(arrNhanVien);
  }
};
