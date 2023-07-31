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