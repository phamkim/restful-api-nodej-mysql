const db = require("../common/connect");

const BangDia = (bangDia) => {
  //this.id = bangDia.id;
  //this.tenBangDia = bangDia.tenBangDia;
  //this.theLoai = bangDia.theLoai;
  //this.nhaSX = bangDia.nhaSX;
  //this.noiDung = bangDia.noiDung;
  //this.gia = bangDia.gia;
};

BangDia.getById = (id, callback) => {
  const sqlString = "SELECT * FROM bangDia WHERE id = ? ";
  db.query(sqlString, id, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

BangDia.getAll = (callback) => {
  const sqlString = "SELECT * FROM bangDia ";
  db.query(sqlString, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

BangDia.insert = (bangDia, callBack) => {
  const sqlString = "INSERT INTO bangDia SET ?";
  db.query(sqlString, bangDia, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack({ id: res.insertId, ...bangDia });
  });
};

BangDia.update = (bangDia, id, callBack) => {
  const sqlString = "UPDATE bangDia SET ? WHERE id = ?";
  db.query(sqlString, [bangDia, id], (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack("cập nhật băng đĩa id = " + id + " thành công");
  });
};

BangDia.delete = (id, callBack) => {
  db.query(`DELETE FROM bangDia WHERE id = ?`, id, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack("xóa băng đĩa id = " + id + " thành công");
  });
};

module.exports = BangDia;

// class BangDia {
//   #id = id;
//   #tenBangDia = tenBangDia;
//   #theLoai = theLoai;
//   #nhaSX = nhaSX;
//   #noiDung = noiDung;
//   #gia = gia;

//   getById = (id, callback) => {
//     const sqlString = "SELECT * FROM bangDia WHERE id = ? ";
//     db.query(sqlString, id, (err, result) => {
//       if (err) {
//         return callback(err);
//       }
//       callback(result);
//     });
//   };

//   getAll = (callback) => {
//     const sqlString = "SELECT * FROM bangDia ";
//     db.query(sqlString, (err, result) => {
//       if (err) {
//         return callback(err);
//       }
//       callback(result);
//     });
//   };

//   insert = (callBack) => {
//     const sqlString = "INSERT INTO bangDia SET ?";
//     db.query(sqlString, this, (err, res) => {
//       if (err) {
//         callBack(err);
//         return;
//       }
//       callBack({ id: res.insertId, ...this });
//     });
//   };

//   update = (callBack) => {
//     const sqlString = "UPDATE bangDia SET ? WHERE id = ?";
//     db.query(sqlString, [this, this.#id], (err, res) => {
//       if (err) {
//         callBack(err);
//         return;
//       }
//       callBack("cập nhật băng đĩa id = " + this.#id + " thành công");
//     });
//   };

//   del = (id, callBack) => {
//     db.query(`DELETE FROM bangDia WHERE id = ?`, id, (err, res) => {
//       if (err) {
//         callBack(err);
//         return;
//       }
//       callBack("xóa băng đĩa id = " + id + " thành công");
//     });
//   };
// }

module.exports = BangDia;
