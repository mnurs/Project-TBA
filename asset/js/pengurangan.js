function generateKurang(){
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
    loopCreateTape(1, a < 0 ? "N" :"P");
    loopCreateTape(pa, "0");
    loopCreateTape(1, b < 0 ? "N" :"P");
    loopCreateTape(pb, "0");
    loopCreateTape(pa+pb+5, "B");

    penguranganState0(1);
}

function penguranganState0(position) {
    console.log(0);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "P"){
            value.text("P");
            penguranganState1(position+1);
        }
        else if(value.text() == "N"){
            value.text("N");
            penguranganState13(position+1);
        }
    });
}

function penguranganState1(position) {
    console.log(1);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState1(position+1);
        }
        else if(value.text() == "P"){
            value.text("P");
            penguranganState2(position+1);
        }
        else if(value.text() == "N"){
            value.text("P");
            penguranganState14(position-1);
        }
    });
}

function penguranganState2(position) {
    console.log(2);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState2(position-1);
        }
        else if(value.text() == "P"){
            value.text("P");
            penguranganState2(position-1);
        }
        else if(value.text() == "N"){
            value.text("N");
            penguranganState2(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            penguranganState3(position+1);
        }
    });
}

function penguranganState3(position) {
    console.log(0);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "P"){
            value.text("P");
            penguranganState4(position+1);
        }
        else if(value.text() == "N"){
            value.text("N");
            penguranganState4(position+1);
        }
    });
}

function penguranganState4(position) {
    console.log(4);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("B");
            penguranganState5(position+1);
        }
        else if(value.text() == "P"){
            value.text("N");
            penguranganState10(position+1);
        }
        else if(value.text() == "N"){
            value.text("P");
            penguranganState10(position+1);
        }
    });
}

function penguranganState5(position) {
    console.log(5);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState5(position+1);
        }
        else if(value.text() == "P"){
            value.text("P");
            penguranganState6(position+1);
        }
        else if(value.text() == "N"){
            value.text("N");
            penguranganState6(position+1);
        }
    });
}

function penguranganState6(position) {
    console.log(6);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState6(position+1);
        }
        else if(value.text() == "Y"){
            value.text("Y");
            penguranganState7(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            penguranganState7(position-1);
        }
    });
}

function penguranganState7(position) {
    console.log(7);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("Y");
            penguranganState8(position-1);
        }
        else if(value.text() == "P"){
            value.text("P");
            penguranganState11(position+1);
        }
        else if(value.text() == "N"){
            value.text("N");
            penguranganState11(position+1);
        }
    });
}

function penguranganState8(position) {
    console.log(8);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){ 
            value.text("0");
            penguranganState8(position-1);
        }
        else if(value.text() == "P"){
            value.text("P");
            penguranganState9(position-1);
        }
        else if(value.text() == "N"){
            value.text("N");
            penguranganState9(position-1);
        }
    });
}

function penguranganState9(position) {
    console.log(9);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState9(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            penguranganState4(position+1);
        }
    });
}

function penguranganState10(position) {
    console.log(0);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState10(position+1);
        }
        else if(value.text() == "Y"){
            value.text("B");
            penguranganState10(position+1);
        }
        else{
            swal("Berhasil", "Proses pengurangan telah selesai", "Success");
        }
    });
}

function penguranganState11(position) {
    console.log(11);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "Y"){
            value.text("B");
            penguranganState11(position+1);
        }
        else if(value.text() == "B"){
            value.text("B");
            penguranganState12(position-1);
        }
    });
}

function penguranganState12(position) {
    console.log(12);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "P"){
            value.text("B");
            penguranganState21(position-1);
        }
        else if(value.text() == "N"){
            value.text("B");
            penguranganState21(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            penguranganState12(position-1);
        }
    });
}

function penguranganState13(position) {
    console.log(13);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState13(position+1);
        }
        else if(value.text() == "P"){
            value.text("N");
            penguranganState14(position-1);
        }
        else if(value.text() == "N"){
            value.text("N");
            penguranganState2(position+1);
        }
    });
}

function penguranganState14(position) {
    console.log(14);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState14(position-1);
        }
        else if(value.text() == "P"){
            value.text("B");
            penguranganState15(position+1);
        }
        else if(value.text() == "N"){
            value.text("B");
            penguranganState15(position+1);
        }
    });
}

function penguranganState15(position) {
    console.log(15);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("B");
            penguranganState16(position+1);
        }
        else if(value.text() == "P"){
            value.text("P");
            penguranganState20(position+1);
        }
        else if(value.text() == "N"){
            value.text("N");
            penguranganState20(position+1);
        }
    });
}

function penguranganState16(position) {
    console.log(16);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState16(position+1);
        }
        else if(value.text() == "P"){
            value.text("P");
            penguranganState17(position+1);
        }
        else if(value.text() == "N"){
            value.text("N");
            penguranganState17(position+1);
        }
    });
}

function penguranganState17(position) {
    console.log(17);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState17(position+1);
        }
        else if(value.text() == "B"){
            value.text("0");
            penguranganState18(position-1);
        }
    });
}

function penguranganState18(position) {
    console.log(18);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState18(position-1);
        }
        else if(value.text() == "P"){
            value.text("P");
            penguranganState19(position-1);
        }
        else if(value.text() == "N"){
            value.text("N");
            penguranganState19(position-1);
        }
    });
}

function penguranganState19(position) {
    console.log(19);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState19(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            penguranganState15(position+1);
        }
    });
}

function penguranganState20(position) {
    swal("Berhasil", "Proses pengurangan telah selesai", "success");
}

function penguranganState21(position) {
    console.log(21);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState21(position-1);
        }
        else if(value.text() == "B"){
            value.text("0");
            penguranganState22(position-1);
        }
    });
}

function penguranganState22(position) {
    console.log(22);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "P"){
            value.text("B");
            penguranganState23(position+1);
        }
        else if(value.text() == "N"){
            value.text("B");
            penguranganState26(position+1);
        }
        else if(value.text() == "B"){
            value.text("B");
            penguranganState22(position-1);
        }
    });
}

function penguranganState23(position) {
    console.log(23);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState24(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            penguranganState23(position+1);
        }
    });
}

function penguranganState24(position) {
    console.log(24);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "B"){
            value.text("P");
            penguranganState25(position+1);
        }
    });
}

function penguranganState25(position) {
    swal("Berhasil", "Proses pengurangan telah selesai", "success");
}

function penguranganState26(position) {
    console.log(26);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            penguranganState27(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            penguranganState26(position+1);
        }
    });
}

function penguranganState27(position) {
    console.log(27);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "B"){
            value.text("N");
            penguranganState25(position+1);
        }
    });
}