
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2() {
  input[1] += 'Elsharawy'; //untuk nambahin di array index 1
  console.log(input);
  var bln = input[3]
  var splitBulan = bln.split('/')
  var string = '';

  switch (string){
    case '01' :
    bulan = 'Januari'; 
    break;
    case '02' :
    bulan = 'Februari';
    break;
    case '03' :
    bulan = 'Maret';
    break;
    case '04' :
    bulan = 'April';
    break;
    case '05' :
    bulan = 'Mei';
    break;
    case '06' :
    bulan = 'Juni';
    break;
    case '07' :
    bulan = 'Juli';
    break;
    case '08' :
    bulan = 'Agustus';
    break;
    case '09' :
    bulan = 'September';
    break;
    case '10' :
    bulan = 'Oktober';
    break;
    case '11' :
    bulan = 'November';
    break;
    case '12' :
    bulan = 'Desember';
    break;
  };
  console.log(bln);

  var splitTgl = [splitBulan[2], splitBulan[0], splitBulan[1]];
  console.log(splitTgl);
  console.log(splitBulan.join('-'));
  var nama = input[1].slice(0, 15);
  console.log(nama);
}
dataHandling2(input);
