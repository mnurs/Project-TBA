function generateTambah(){
    reset();

    var a = parseInt($("#angka1").val());
    var b = parseInt($("#angka2").val());
    
    if(isNaN(a) || isNaN(b)){
        swal("error","Input tidak valid", "error");
        return;
    }

    var pa = a > 0 ? a : a * (-1);
    var pb = b > 0 ? b : b * (-1);

    loopCreateTape(1, "B");
    loopCreateTape(pa, "0");
    loopCreateTape(1, "1");
    loopCreateTape(pb, "0");
    loopCreateTape(1, "1");
    loopCreateTape(1, "B");

    penjumlahanState0(1);
}

function penjumlahanState0(position) {
    console.log(0);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("B");
            penjumlahanState1(position+1);
        }
        else if(value.text() == "1"){
            value.text("B");
            penjumlahanState2(position+1);
        }
    });
}

function penjumlahanState1(position) {
    console.log(1);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            penjumlahanState1(position+1);
        }
        else if(value.text() == "1"){
           value.text("0");
            penjumlahanState2(position+1);
        }
    });
}

function penjumlahanState2(position) {
    console.log(2);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            penjumlahanState2(position+1);
        }
        else if(value.text() == "1"){
            value.text("B");
            penjumlahanState3(position+1);
        }
    });
}

function penjumlahanState3(position) {
    swal("Berhasil", "Proses penjumlahan telah selesai", "success");
}