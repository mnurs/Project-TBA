var angka1 = parseInt($("#angka1").val());
var angka2 = parseInt($("#angka2").val());

function generateTambah(){
    reset();

    angka1 = parseInt($("#angka1").val());
    angka2 = parseInt($("#angka2").val());
    
    if(isNaN(angka1) || isNaN(angka2)){
        swal("error","Input tidak valid", "error");
        return;
    }

    var positifangka1 = angka1 > 0 ? angka1 : angka1 * (-1);
    var positifangka2 = angka2 > 0 ? angka2 : angka2 * (-1);

    loopCreateTape(1, "B");
    loopCreateTape(positifangka1, "0");
    loopCreateTape(1, "1");
    loopCreateTape(positifangka2, "0");
    loopCreateTape(1, "1");
    loopCreateTape(1, "B");

    penjumlahanState0(1);
}

function penjumlahanState0(posisi) {
    console.log(0);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("B");
            penjumlahanState1(posisi+1);
          break;
         case "1":
            value.text("B");
            penjumlahanState2(posisi+1);
          break; 
         default: 
        }       
    });
}

function penjumlahanState1(posisi) {
    console.log(1);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            penjumlahanState1(posisi+1);
          break;
         case "1":
            value.text("0");
            penjumlahanState2(posisi+1);
          break; 
         default: 
        }       
    });
}

function penjumlahanState2(posisi) {
    console.log(2);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            penjumlahanState2(posisi+1);
          break;
         case "1":
            value.text("B");
            penjumlahanState3(posisi+1);
          break; 
         default: 
        }       
    });
}

function penjumlahanState3(posisi) {
    $("#hasil").text(angka1 + angka2);
    swal("Berhasil", "Proses penjumlahan telah selesai", "success");
}