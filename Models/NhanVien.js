function NhanVien() {
  this.tknv = "";
  this.name = "";
  this.email = "";
  this.password = "";
  this.luongCB = "";
  this.chucvu = "";
  this.gioLam = 0;
  this.tongLuong = function () {
    var sum = 0;
    if (this.chucvu == "Sếp") {
      sum = this.luongCB * 3;
    } else if (this.chucvu == "Trưởng phòng") {
      sum = this.luongCB * 2;
    } else {
      sum = this.luongCB * 1;
    }
    return sum;
  };
  this.xepLoai = function () {
    var xepLoai = "";
    if (this.chucvu == "Nhân viên" && this.gioLam >= 196) {
      xepLoai = "xuất sắc";
    } else if (this.chucvu == "Nhân viên" && this.gioLam >= 176) {
      xepLoai = "giỏi";
    } else if (this.chucvu == "Nhân viên" && this.gioLam >= 160) {
      xepLoai = "khá";
    } else if (this.chucvu == "Nhân viên" && this.gioLam < 160) {
      xepLoai = "trung bình";
    }
    return xepLoai;
  };
}
