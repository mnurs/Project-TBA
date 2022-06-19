function generateBagi(){
    reset();

    var a = parseInt($("#angka1").val());
    var b = parseInt($("#angka2").val());
    
    if(isNaN(a) || isNaN(b)){
        swal("error","Input tidak valid", "error");
        return;
    }

    if(b == 0){
        swal("error", "Pembagi tidak boleh 0","error");
        return;
    }

    var pa = a > 0 ? a : a * (-1);
    var pb = b > 0 ? b : b * (-1);

    loopCreateTape(1, "B");
    if(a < 0) loopCreateTape(1, "N");
    loopCreateTape(pa, "1");
    loopCreateTape(1, "0");
    if(b < 0) loopCreateTape(1, "N");
    loopCreateTape(pb, "1");
    loopCreateTape(((pa/pb)+(pa%pb)+3), "B");

    pembagiState0(1);
}

function pembagiState0(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "1" || value.text() == "N" || value.text() == "Y" || value.text() == "0"){
            pembagiState0(position+1);
        }
        else if(value.text() == "B"){
            value.text("Q");
            pembagiState1(position-1);
        }
    });
}

function pembagiState1(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0" || value.text() == "N" || value.text() == "1" || value.text() == "Y"){
            pembagiState1(position-1);
        }
        else if(value.text() == "B"){
            pembagiState2(position+1);
        }
    });
}

function pembagiState2(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "1" || value.text() == "N"){
            pembagiState2(position+1);
        }
        else if(value.text() == "0"){
            pembagiState3(position+1);
        }
    });
}

function pembagiState3(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0" || value.text() == "N" || value.text() == "1" || value.text() == "Y"){
            pembagiState3(position+1);
        }
        else if(value.text() == "Q"){
            pembagiState4(position-1);
        }
    });
}

function pembagiState4(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "1"){
            value.text("Y");
            pembagiState5(position-1);
        }
    });
}

function pembagiState5(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "N" || value.text() == "1"){
            pembagiState5(position-1);
        }
        else if(value.text() == "0"){
            pembagiState6(position-1);
        }
    });
}

function pembagiState6(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "X" || value.text() == "0"){
            pembagiState6(position-1);
        }
        else if(value.text() == "N" || value.text() == "B"){
            pembagiState16(position+1);
        }
        else if(value.text() == "1"){
            value.text("X");
            pembagiState7(position+1);
        }
    });
}

function pembagiState7(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "X"){
            pembagiState7(position+1);
        }
        else if(value.text() == "0"){
            pembagiState8(position+1);
        }
    });
}

function pembagiState8(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0" || value.text() == "N" || value.text() == "1" || value.text() == "Y"){
            pembagiState8(position+1);
        }
        else if(value.text() == "Q"){
            pembagiState9(position-1);
        }
    });
}

function pembagiState9(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "Y"){
            pembagiState9(position-1);
        }
        else if(value.text() == "1"){
            value.text("Y");
            pembagiState10(position-1);
        }
        else if(value.text() == "0" || value.text() == "N"){
            pembagiState13(position+1);
        }
    });
}

function pembagiState10(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "N" || value.text() == "1"){
            pembagiState10(position-1);
        }
        else if(value.text() == "0"){
            pembagiState11(position-1);
        }
    });
}

function pembagiState11(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "X" || value.text() == "0"){
            pembagiState11(position-1);
        }
        else if(value.text() == "N" || value.text() == "B"){
            pembagiState17(position+1);
        }
        else if(value.text() == "1"){
            value.text("X");
            pembagiState12(position+1);
        }
    });
}

function pembagiState12(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "X"){
            pembagiState12(position+1);
        }
        else if(value.text() == "0"){
            pembagiState8(position+1);
        }
    });
}

function pembagiState13(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "Y"){
            pembagiState13(position+1);
        }
        else if(value.text() == "Q"){
            pembagiState14(position+1);
        }
    });
}

function pembagiState14(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "1"){
            pembagiState14(position+1);
        }
        else if(value.text() == "B"){
            value.text("1");
            pembagiState15(position-1);
        }
    });
}

function pembagiState15(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "N" || value.text() == "0" || value.text() == "1" || value.text() == "Q"){
            pembagiState15(position-1);
        }
        else if(value.text() == "Y"){
            value.text("1");
            pembagiState15(position-1);
        }
        else if(value.text() == "X"){
            value.text("0");
            pembagiState15(position-1);
        }
        else if(value.text() == "B"){
            pembagiState2(position+1);
        }
    });
}

function pembagiState16(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "X" || value.text() == "N" || value.text() == "0" || value.text() == "1" || value.text() == "Q"){
            pembagiState16(position+1);
        }
        else if(value.text() == "Y"){
            value.text("0");
            pembagiState16(position+1);
        }
        else if(value.text() == "B"){
            pembagiState18(position-1);
        }
    });
}

function pembagiState17(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "X" || value.text() == "N" || value.text() == "0" || value.text() == "1" || value.text() == "Q"){
            pembagiState17(position+1);
        }
        else if(value.text() == "Y"){
            value.text("0");
            pembagiState17(position+1);
        }
        else if(value.text() == "B"){
            value.text("0");
            pembagiState18(position-1);
        }
    });
}

function pembagiState18(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if( value.text() == "N" || value.text() == "0" || value.text() == "1" || value.text() == "Q"){
            pembagiState18(position-1);
        }
        else if(value.text() == "X"){
            value.text("0");
            pembagiState19(position+1);
        }
        else if(value.text() == "B"){
            value.text("B");
            pembagiState20(position+1);
        }
    });
}

function pembagiState19(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if( value.text() == "N" || value.text() == "0" || value.text() == "1" || value.text() == "Q"){
            pembagiState19(position+1);
        }
        else if(value.text() == "B"){
            value.text("1");
            pembagiState18(position-1);
        }
    });
}

function pembagiState20(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if( value.text() == "0"){
            pembagiState20(position+1);
        }
        else if(value.text() == "N"){
            value.text("0");
            pembagiState21(position+1);
        }
        else if(value.text() == "Q"){
            value.text("B");
            pembagiState22(position-1);
        }
        else if(value.text() == "1"){
            value.text("0");
            pembagiState20(position+1);
        }
    });
}

function pembagiState21(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if( value.text() == "0" || value.text() == "1"){
            pembagiState21(position+1);
        }
        else if(value.text() == "N"){
            value.text("0");
            pembagiState20(position+1);
        }
        else if(value.text() == "Q"){
            value.text("N");
            pembagiState22(position-1);
        }
    });
}

function pembagiState22(position) {
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if( value.text() == "0" || value.text() == "1"){
            value.text("B");
            pembagiState22(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            pembagiState23(position+1);
        }
    });
}

function pembagiState23(position){
    swal("Berhasil", "Proses pembagian telah selesai", "success");
}