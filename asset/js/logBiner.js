function generateLogBiner(){
    reset();

    var a = parseInt($("#angka1").val());
    
    if(isNaN(a)){
        swal("error","Input tidak valid", "error");
        return;
    }

    if (a < 0) {
        swal("error","Input tidak valid", "error");
    }

    loopCreateTape(1, "B");
    loopCreateTape(a, "1");
    loopCreateTape(3, "B");

    logState0(1);
}

function logState0(position) {
    console.log(0);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "1"){
            value.text("1");
            logState1(position+1);
        }
        else if(value.text() == "B"){
            value.text("B");
            logState12(position+1);
        }
    });
}

function logState1(position) {
    console.log(1);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "1"){
            value.text("1");
            logState2(position+1);
        }
        else if(value.text() == "B"){
            value.text("B");
            logState11(position-1);
        }
    });
}

function logState2(position) {
    console.log(2);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "1"){
            value.text("C");
            logState3(position+1);
        }
        else if(value.text() == "B"){
            value.text("B");
            logState11(position-1);
        }
    });
}

function logState3(position) {
    console.log(3);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "1"){
            value.text("C");
            logState4(position-1);
        }
        else if(value.text() == "C"){
            value.text("C");
            logState3(position+1);
        }
        else if(value.text() == "B"){
            value.text("B");
            logState7(position-1);
        }
    });
}

function logState4(position) {
    console.log(4);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            logState4(position-1);
        }
        else if(value.text() == "1"){
            value.text("1");
            logState4(position-1);
        }
        else if(value.text() == "C"){
            value.text("C");
            logState4(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            logState5(position+1);
        }
    });
}

function logState5(position) {
    console.log(5);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("1");
            logState6(position+1);
        }
        else if(value.text() == "1"){
            value.text("0");
            logState5(position+1);
        }
        else if(value.text() == "C"){
            value.text("1");
            logState6(position+1);
        }
    });
}

function logState6(position) {
    console.log(6);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            logState6(position+1);
        }
        else if(value.text() == "1"){
            value.text("1");
            logState6(position+1);
        }
        else if(value.text() == "C"){
            value.text("C");
            logState3(position+1);
        }
    });
}

function logState7(position) {
    console.log(7);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            logState7(position-1);
        }
        else if(value.text() == "1"){
            value.text("1");
            logState7(position-1);
        }
        else if(value.text() == "C"){
            value.text("B");
            logState7(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            logState8(position+1);
        }
    });
}

function logState8(position) {
    console.log(8);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("1");
            logState8(position+1);
        }
        else if(value.text() == "1"){
            value.text("1");
            logState9(position+1);
        }
    });
}


function logState9(position) {
    console.log(9);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("1");
            logState9(position+1);
        }
        else if(value.text() == "1"){
            value.text("1");
            logState10(position+1);
        }
        else if(value.text() == "B"){
            value.text("B");
            logState11(position-1);
        }
    });
}


function logState10(position) {
    console.log(10);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("1");
            logState10(position+1);
        }
        else if(value.text() == "1"){
            value.text("1");
            logState10(position+1);
        }
        else if(value.text() == "B"){
            value.text("B");
            logState12(position-1);
        }
    });
}

function logState11(position) {
    console.log(11);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "1"){
            value.text("B");
            logState12(position+1);
        }
    });
}

function logState12(position) {
    swal("Berhasil", "Proses logaritma biner telah selesai", "success");
}