var angka1 = parseInt($("#angka1").val());
function generateLogBiner(){
    reset();

    angka1 = parseInt($("#angka1").val());
    
    if(isNaN(angka1)){
        swal("error","Input tidak valid", "error");
        return;
    }

    if (angka1 < 0) {
        swal("error","Input tidak valid", "error");
    }

    loopCreateTape(1, "B");
    loopCreateTape(angka1, "1");
    loopCreateTape(3, "B");

    logState0(1);
}

function logState0(posisi) {
    console.log(0);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "1": 
            value.text("1");
            logState1(posisi+1);
          break; 
         case "B":
            value.text("B");
            logState12(posisi+1);
          break; 
         default: 
        }      
    });
}

function logState1(posisi) {
    console.log(1);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "1": 
            value.text("1");
            logState2(posisi+1);
          break; 
         case "B":
            value.text("B");
            logState11(posisi-1);
          break; 
         default: 
        }     
    });
}

function logState2(posisi) {
    console.log(2);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "1": 
            value.text("C");
            logState3(posisi+1);
          break; 
         case "B":
            value.text("B");
            logState11(posisi-1);
          break; 
         default: 
        }     
    });
}

function logState3(posisi) {
    console.log(3);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "1": 
            value.text("C");
            logState4(posisi-1);
          break; 
         case "C":
            value.text("C");
            logState3(posisi+1);
          break;
         case "B":
            value.text("B");
            logState7(posisi-1);
          break;
         default: 
        }     
    });
}

function logState4(posisi) {
    console.log(4);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            logState4(posisi-1);
          break;
         case "1": 
            value.text("1");
            logState4(posisi-1);
          break;
         case "C":
            value.text("C");
            logState4(posisi-1);
          break;
         case "B":
            value.text("B");
            logState5(posisi+1);
          break;
         default: 
        }   
    });
}

function logState5(posisi) {
    console.log(5);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("1");
            logState6(posisi+1);
          break;
         case "1": 
            value.text("0");
            logState5(posisi+1);
          break; 
         case "C":
            value.text("1");
            logState6(posisi+1);
          break;
         default: 
        }     
    });
}

function logState6(posisi) {
    console.log(6);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            logState6(posisi+1);
          break; 
         case "1": 
            value.text("1");
            logState6(posisi+1);
          break;
         case "C":
            value.text("C");
            logState3(posisi+1);
          break;
         default: 
        }     
    });
}

function logState7(posisi) {
    console.log(7);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            logState7(posisi-1);
          break;
         case "1": 
            value.text("1");
            logState7(posisi-1);
          break;
         case "C":
            value.text("B");
            logState7(posisi-1);
          break;
         case "B":
            value.text("B");
            logState8(posisi+1);
          break;
         default: 
        }     
    });
}

function logState8(posisi) {
    console.log(8);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("1");
            logState8(posisi+1);
          break;
         case "1": 
            value.text("1");
            logState9(posisi+1);
          break; 
         default: 
        }     
    });
}


function logState9(posisi) {
    console.log(9);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("1");
            logState9(posisi+1);
          break;
         case "1": 
            value.text("1");
            logState10(posisi+1);
          break;
         case "B":
            value.text("B");
            logState11(posisi-1);
          break; 
         default: 
        }     
    });
}


function logState10(posisi) {
    console.log(10);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("1");
            logState10(posisi+1);
          break;
         case "1": 
            value.text("1");
            logState10(posisi+1);
          break;
         case "B":
            value.text("B");
            logState12(posisi-1);
          break; 
         default: 
        }     
    });
}

function logState11(posisi) {
    console.log(11);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "1": 
            value.text("B");
            logState12(posisi+1);
          break; 
         default: 
        }     
    });
}

function logState12(posisi) { 
    $("#hasil").text(Math.log2(angka1));
    swal("Berhasil", "Proses logaritma biner telah selesai", "success");
}