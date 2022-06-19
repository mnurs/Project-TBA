function generatePangkat(){
    reset();

    var a = parseInt($("#angka1").val());
    var b = parseInt($("#angka2").val());
    
    if(isNaN(a) || isNaN(b)){
        swal("error","Input tidak valid", "error");
        return;
    }

    if(b == 0){
        swal("error", "Pangkat tidak boleh 0","error");
        return;
    }

    var pa = a > 0 ? a : a * (-1);
    var pb = b > 0 ? b : b * (-1);

    loopCreateTape(1, "B");
    for (let i = 0; i < b; i++) {
        loopCreateTape(a, "0");
        loopCreateTape(1, "C");
    }
    loopCreateTape(Math.pow(a,b) * 2, "B");

    pangkatState0(1);
}

function pangkatState0(position) {
    console.log(0);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("B");
            pangkatState1(position+1);
        }
        else if(value.text() == "C"){
            value.text("B");
            pangkatState7(position+1);
        }
    });
}

function pangkatState1(position) {
    console.log(1);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            pangkatState1(position+1);
        }
        else if(value.text() == "C"){
            value.text("C");
            pangkatState2(position+1);
        }
    });
}

function pangkatState2(position) {
    console.log(2);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("Y");
            pangkatState3(position+1);
        }
        else if(value.text() == "C"){
            value.text("C");
            pangkatState5(position-1);
        }
        else if(value.text() == "B"){
            value.text("1");
            pangkatState15(position-1);
        }
    });
}

function pangkatState3(position) {
    console.log(3);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            pangkatState3(position+1);
        }
        else if(value.text() == "1"){
            value.text("1");
            pangkatState3(position+1);
        }
        else if(value.text() == "C"){
            value.text("C");
            pangkatState3(position+1);
        }
        else if(value.text() == "B"){
            value.text("1");
            pangkatState4(position-1);
        }
    });
}

function pangkatState4(position) {
    console.log(4);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            pangkatState4(position-1);
        }
        else if(value.text() == "1"){
            value.text("1");
            pangkatState4(position-1);
        }
        else if(value.text() == "Y"){
            value.text("Y");
            pangkatState2(position+1);
        }
        else if(value.text() == "C"){
            value.text("C");
            pangkatState4(position-1);
        }
    });
}

function pangkatState5(position) {
    console.log(5);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "Y"){
            value.text("0");
            pangkatState5(position-1);
        }
        else if(value.text() == "C"){
            value.text("C");
            pangkatState6(position-1);
        }
    });
}

function pangkatState6(position) {
    console.log(6);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            pangkatState6(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            pangkatState0(position+1);
        }
    });
}

function pangkatState7(position) {
    console.log(7);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("B");
            pangkatState8(position+1);
        }
    });
}

function pangkatState8(position) {
    console.log(8);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("B");
            pangkatState8(position+1);
        }
        else if(value.text() == "C"){
            value.text("B");
            pangkatState9(position+1);
        }
    });
}

function pangkatState9(position) {
    console.log(9);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            pangkatState10(position+1);
        }
        else if(value.text() == "1"){
            value.text("1");
            pangkatState13(position-1);
        }
    });
}

function pangkatState10(position) {
    console.log(10);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            pangkatState10(position+1);
        }
        else if(value.text() == "1"){
            value.text("0");
            pangkatState11(position+1);
        }
        else if(value.text() == "C"){
            value.text("C");
            pangkatState10(position+1);
        }
    });
}

function pangkatState11(position) {
    console.log(11);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "1"){
            value.text("0");
            pangkatState11(position+1);
        }
        else if(value.text() == "B"){
            value.text("C");
            pangkatState12(position-1);
        }
    });
}

function pangkatState12(position) {
    console.log(12);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            pangkatState12(position-1);
        }
        else if(value.text() == "C"){
            value.text("C");
            pangkatState12(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            pangkatState0(position+1);
        }
    });
}

function pangkatState13(position) {
    console.log(13);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
            console.log(value.text());
        value.removeClass("bg-dark");
        if(value.text() == "C"){
            value.text("B");
            pangkatState14(position+1); 
        }else if(value.text() == "B"){
            value.text("B");
            pangkatState14(position+1);
        }
    });
}

function pangkatState14(position) { 
    swal("Berhasil", "Proses perpangkatan telah selesai", "success");
}

function pangkatState15(position) {
    console.log(15);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            pangkatState15(position-1);
        }
        else if(value.text() == "1"){
            value.text("1");
            pangkatState15(position-1);
        }
        else if(value.text() == "C"){
            value.text("C");
            pangkatState15(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            pangkatState16(position+1);
        }
    });
}

function pangkatState16(position) {
    console.log(16);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("B");
            pangkatState17(position+1);
        }
        else if(value.text() == "C"){
            value.text("B");
            pangkatState14(position+1);
        }
    });
}

function pangkatState17(position) {
    console.log(17);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            pangkatState17(position+1);
        }
        else if(value.text() == "1"){
            value.text("1");
            pangkatState17(position+1);
        }
        else if(value.text() == "C"){
            value.text("C");
            pangkatState17(position+1);
        }
        else if(value.text() == "B"){
            value.text("1");
            pangkatState15(position-1);
        }
    });
}