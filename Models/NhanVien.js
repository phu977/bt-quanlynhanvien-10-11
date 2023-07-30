function NhanVien() {
  this.tknv = "";
  this.name = "";
  this.email = "";
  this.password = "";
  this.luongCB = "";
  this.chucvu = "";
  this.gioLam = "";
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
      xepLoai = "nhân viên xuất sắc";
    } else if (this.chucvu == "Nhân viên" && this.gioLam >= 176) {
      xepLoai = "nhân viên giỏi";
    } else if (this.chucvu == "Nhân viên" && this.gioLam >= 160) {
      xepLoai = "nhân viên khá";
    } else if(this.chucvu == "Nhân viên" && this.gioLam < 160) {
        xepLoai = "nhân viên trung bình";
    }
    return xepLoai;  
  };
}
