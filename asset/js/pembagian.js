var angka1 = parseInt($("#angka1").val());
var angka2 = parseInt($("#angka2").val());
function generateBagi(){
    reset();

    angka1 = parseInt($("#angka1").val());
    angka2 = parseInt($("#angka2").val());
    
    if(isNaN(angka1) || isNaN(angka2)){
        swal("error","Input tidak valid", "error");
        return;
    }

    if(angka2 == 0){
        swal("error", "Pembagi tidak boleh 0","error");
        return;
    }

    var positifangka1 = angka1 > 0 ? angka1 : angka1 * (-1);
    var positifangka2 = angka2 > 0 ? angka2 : angka2 * (-1);

    loopCreateTape(1, "B");
    if(angka1 < 0) loopCreateTape(1, "N");
    loopCreateTape(positifangka1, "1");
    loopCreateTape(1, "0");
    if(angka2 < 0) loopCreateTape(1, "N");
    loopCreateTape(positifangka2, "1");
    loopCreateTape(((positifangka1/positifangka2)+(positifangka1%positifangka2)+3), "B");

    pembagiState0(1);
}

function pembagiState0(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState0(posisi+1);
          break;
         case "1":
            value.text("1");
            pembagiState0(posisi+1);
          break; 
         case "Y":
            value.text("Y");
            pembagiState0(posisi+1);
          break;
         case "N":
            value.text("N");
            pembagiState0(posisi+1);
          break; 
         case "B":
            value.text("Q");
            pembagiState1(posisi-1);
          break;
         default: 
        } 
    });
}

function pembagiState1(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState1(posisi-1);
          break;
         case "1": 
            value.text("1");
            pembagiState1(posisi-1);
          break; 
         case "Y":
            value.text("Y");
            pembagiState1(posisi-1);
          break;
         case "N":
            value.text("N");
            pembagiState1(posisi-1);
          break; 
         case "B":
            value.text("B");
            pembagiState2(posisi+1);
          break;
         default: 
        }   
    });
}

function pembagiState2(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState3(posisi+1);
          break;
         case "1":
            value.text("1");
            pembagiState2(posisi+1);
          break; 
         case "N":
            value.text("N");
            pembagiState2(posisi+1);
          break; 
         default: 
        }    
    });
}

function pembagiState3(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState3(posisi+1);
          break;
         case "1":
            value.text("1");
            pembagiState3(posisi+1);
          break; 
         case "Y":
            value.text("Y");
            pembagiState3(posisi+1);
          break;
         case "N":
            value.text("N");
            pembagiState3(posisi+1);
          break;
         case "Q":
            value.text("Q");
            pembagiState4(posisi-1);
          break; 
         default: 
        }    
    });
}

function pembagiState4(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) { 
         case "1":
            value.text("Y");
            pembagiState5(posisi-1);
          break; 
         default: 
        }    
    });
}

function pembagiState5(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState6(posisi-1);
          break;
         case "1":
            value.text("1");
            pembagiState5(posisi-1);
          break; 
         case "N":
            value.text("N");
            pembagiState5(posisi-1);
          break; 
         default: 
        }    
    });
}

function pembagiState6(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState6(posisi-1);
          break;
         case "1":
            value.text("X");
            pembagiState7(posisi+1);
          break;
         case "X":
            value.text("X");
            pembagiState6(posisi-1);
          break; 
         case "N":
            value.text("N");
            pembagiState16(posisi+1);
          break; 
         case "B":
            value.text("B");
            pembagiState16(posisi+1);
          break;
         default: 
        }    
    });
}

function pembagiState7(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState8(posisi+1);
          break; 
         case "X":
            value.text("X");
            pembagiState7(posisi+1);
          break; 
         default: 
        }    
    });
}

function pembagiState8(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState8(posisi+1);
          break;
         case "1":
            value.text("1");
            pembagiState8(posisi+1);
          break; 
         case "Y":
            value.text("Y");
            pembagiState8(posisi+1);
          break;
         case "N":
            value.text("N");
            pembagiState8(posisi+1);
          break;
         case "Q":
            value.text("Q");
            pembagiState9(posisi-1);
          break; 
         default: 
        }    
    });
}

function pembagiState9(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState13(posisi+1);
          break;
         case "1":
            value.text("Y");
            pembagiState10(posisi-1);
          break; 
         case "Y":
            value.text("Y");
            pembagiState9(posisi-1);
          break;
         case "N":
            value.text("N");
            pembagiState13(posisi+1);
          break; 
         default: 
        }    
    });
}

function pembagiState10(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState11(posisi-1);
          break;
         case "1":
            value.text("1");
            pembagiState10(posisi-1);
          break; 
         case "N":
            value.text("N");
            pembagiState10(posisi-1);
          break; 
         default: 
        }    
    });
}

function pembagiState11(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState11(posisi-1);
          break;
         case "1":
            value.text("X");
            pembagiState12(posisi+1);
          break;
         case "X":
            value.text("X");
            pembagiState11(posisi-1);
          break; 
         case "N":
            value.text("N");
            pembagiState17(posisi+1);
          break; 
         case "B":
            value.text("B");
            pembagiState17(posisi+1);
          break;
         default: 
        }    
    });
}

function pembagiState12(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState8(posisi+1);
          break; 
         case "X": 
            value.text("X");
            pembagiState12(posisi+1);
          break; 
         default: 
        }    
    });
}

function pembagiState13(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) { 
         case "Y":
            value.text("Y");
            pembagiState13(posisi+1);
          break; 
         case "Q":
            value.text("Q");
            pembagiState14(posisi+1);
          break; 
         default:
         
        }    
    });
}

function pembagiState14(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) { 
         case "1":
            value.text("1");
            pembagiState14(posisi+1);
          break; 
         case "B":
            value.text("1");
            pembagiState15(posisi-1);
          break;
         default:
        }    
    });
}

function pembagiState15(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState15(posisi-1);
          break;
         case "1":
            value.text("1");
            pembagiState15(posisi-1);
          break;
         case "X":
            value.text("0");
            pembagiState15(posisi-1);
          break;
         case "Y":
            value.text("1");
            pembagiState15(posisi-1);
          break;
         case "N":
            value.text("N");
            pembagiState15(posisi-1);
          break;
         case "Q": 
            value.text("Q");
            pembagiState15(posisi-1);
          break;
         case "B":
            value.text("B");
            pembagiState2(posisi+1);
          break;
         default: 
        }    
    });
}

function pembagiState16(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState16(posisi+1);
          break;
         case "1":
            value.text("1");
            pembagiState16(posisi+1);
          break;
         case "X":
            value.text("X");
            pembagiState16(posisi+1);
          break;
         case "Y":
            value.text("0");
            pembagiState16(posisi+1);
          break;
         case "N":
            value.text("N");
            pembagiState16(posisi+1);
          break;
         case "Q":
            value.text("Q");
            pembagiState16(posisi+1);
          break;
         case "B":
            value.text("B");
            pembagiState18(posisi-1);
          break;
         default: 
        }    
    });
}

function pembagiState17(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState17(posisi+1);
          break;
         case "1":
            value.text("1");
            pembagiState17(posisi+1);
          break;
         case "X": 
            value.text("X");
            pembagiState17(posisi+1);
          break;
         case "Y":
            value.text("0");
            pembagiState17(posisi+1);
          break;
         case "N":
            value.text("N");
            pembagiState17(posisi+1);
          break;
         case "Q":
            value.text("Q");
            pembagiState17(posisi+1);
          break;
         case "B":
            value.text("0");
            pembagiState18(posisi-1);
          break;
         default:
         
        }    
    });
}

function pembagiState18(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState18(posisi-1);
          break;
         case "1":
            value.text("1");
            pembagiState18(posisi-1);
          break;
         case "X":
            value.text("0");
            pembagiState19(posisi+1);
          break; 
         case "N": 
            value.text("N");
            pembagiState18(posisi-1);
          break;
         case "Q":
            value.text("Q");
            pembagiState18(posisi-1);
          break;
         case "B":
            value.text("B");
            pembagiState20(posisi+1);
          break;
         default:
         
        }    
    });
}

function pembagiState19(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState19(posisi+1);
          break;
         case "1":
            value.text("1");
            pembagiState19(posisi+1);
          break; 
         case "N":
            value.text("N");
            pembagiState19(posisi+1);
          break;
         case "Q":
            value.text("Q");
            pembagiState19(posisi+1);
          break;
         case "B":
            value.text("1");
            pembagiState18(posisi-1);
          break;
         default: 
        }    
    });
}

function pembagiState20(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState20(posisi+1);
          break; 
         case "N":
            value.text("0");
            pembagiState21(posisi+1);
          break;
         case "Q":
            value.text("B");
            pembagiState22(posisi-1);
          break; 
         case "1":
            value.text("0");
            pembagiState20(posisi+1);
          break;
         default:
         
        }    
    });
}

function pembagiState21(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pembagiState21(posisi+1);
          break;
         case "1":
            value.text("1");
            pembagiState21(posisi+1);
          break; 
         case "N":
            value.text("0");
            pembagiState20(posisi+1);
          break;
         case "Q":
            value.text("N");
            pembagiState22(posisi-1);
          break; 
         default: 
        }    
    });
}

function pembagiState22(posisi) {
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0":  
            value.text("B");
            pembagiState22(posisi-1);
          break;
         case "1":
            value.text("B");
            pembagiState22(posisi-1);
          break; 
         case "B":
            value.text("B");
            pembagiState23(posisi+1);
          break;
         default: 
        }    
    });
}

function pembagiState23(posisi){
    $("#hasil").text(angka1 / angka2);
    swal("Berhasil", "Proses pembagian telah selesai", "success");
}