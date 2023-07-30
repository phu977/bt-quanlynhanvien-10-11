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

  console.log(nhanVienNew);
  console.log(nhanVienNew.tongLuong().toLocaleString());
  console.log(nhanVienNew.xepLoai());
  arrNhanVien.push(nhanVienNew);
  console.log(arrNhanVien);
  renderTableNhanVien(arrNhanVien);
  saveStorageArrNhanVien();
  // document.querySelector("#tknv").value = "";
  // document.querySelector("#name").value = "";
  // document.querySelector("#email").value = "";
  // document.querySelector("#password").value = "";
  // document.querySelector("#datepicker").value = "";
  // document.querySelector("#luongCB").value = "";
  // document.querySelector("#chucvu").value = "";
  // document.querySelector("#gioLam").value = "";
};
/**
 *
 * @param {*} arrNV input của hàm là một mảng chứa các đối tượng
 * Mục đích hiện thị danh sách đối tượng lên UI/UX
 *
 */
function renderTableNhanVien(arrNV) {
  var outputHTML = "";
  for (var index = 0; index < arrNV.length; index++) {
    var nhanVien = arrNV[index];
    outputHTML += `
            <tr>
                <td>${nhanVien.tknv}</td>
                <td>${nhanVien.name}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.datepicker}</td>
                <td>${nhanVien.chucvu}</td>
                <td>${nhanVien.tongLuong().toLocaleString()}</td>
                <td>${nhanVien.xepLoai()}</td>
                <td class="d-flex">
                    <button class="btn btn-danger" onclick="xoaNhanVien('${index}')">Xoá</button>
                    <button class="btn btn-primary mx-2" data-toggle="modal" data-target="#myModal"  onclick="suaNhanVien('${index}')">Sửa</button>
                </td>
            </tr>
        `;
  }
  document.querySelector("#tableDanhSach").innerHTML = outputHTML;
}
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
document.querySelector("#btnCapNhat").onclick = function() {
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
  for(var index = 0 ; index < arrNhanVien.length;index++){
    if(arrNhanVien[index].tknv === nhanVienUpdate.tknv){
      indexUpdate = index;
      break
    }
  }
  if(indexUpdate !== -1){
    arrNhanVien[indexUpdate].name = nhanVienUpdate.name;
    arrNhanVien[indexUpdate].email = nhanVienUpdate.email;
    arrNhanVien[indexUpdate].password = nhanVienUpdate.password;
    arrNhanVien[indexUpdate].datepicker = nhanVienUpdate.datepicker;
    arrNhanVien[indexUpdate].luongCB = nhanVienUpdate.luongCB;
    arrNhanVien[indexUpdate].chucvu = nhanVienUpdate.chucvu;
    arrNhanVien[indexUpdate].gioLam = nhanVienUpdate.gioLam;
    renderTableNhanVien(arrNhanVien);
    saveStorageArrNhanVien();
  }
}
//Phương thức lưu vào application storage
function saveStorageArrNhanVien() {
  //Chuyển arr về chuỗi
  var strNhanVien = JSON.stringify(arrNhanVien); // '[{},{},{}]'
  //Lưu string vào storage
  localStorage.setItem("arrNhanVien", strNhanVien);
}

//Phương thức lấy dữ liệu từ localstorage
function getStorageJSON(name) {
  if (localStorage.getItem(name)) {
    //Nếu có storage name đó thì mới đi vào if
    var str = localStorage.getItem(name);
    var  NhanVienList= JSON.parse(str);
    for(var index = 0; index < NhanVienList.length; index++){
      var nhanVien = NhanVienList[index];
      NhanVienList[index] = new NhanVien(nhanVien.tknv,nhanVien.name,nhanVien.email,nhanVien.password,nhanVien.luongCB,nhanVien.chucvu,nhanVien.gioLam,nhanVien.datepicker);
    }
    console.log(NhanVienList);
    return NhanVienList;
  }
  return [];
 
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

