/**
 *
 * @param {*} chucvu input là vị trí của user
 * @param {*} gioLam input là số giờ mà người đó làm
 * @returns output là loại
 */
function xepLoai(gioLam) {
  var xepLoai = "";
  if (gioLam >= 196) {
    xepLoai = "xuất sắc";
  } else if (gioLam >= 176) {
    xepLoai = "giỏi";
  } else if (gioLam >= 160) {
    xepLoai = "khá";
  } else if (gioLam < 160) {
    xepLoai = "trung bình";
  }
  return xepLoai;
}
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
function stringToSlug(title) {
  //Đổi chữ hoa thành chữ thường
  slug = title.toLowerCase();

  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
  slug = slug.replace(/đ/gi, "d");
  //Xóa các ký tự đặt biệt
  slug = slug.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
    ""
  );
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, "-");
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-/gi, "-");
  slug = slug.replace(/\-\-/gi, "-");
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = "@" + slug + "@";
  slug = slug.replace(/\@\-|\-\@|\@/gi, "");

  return slug;
}
