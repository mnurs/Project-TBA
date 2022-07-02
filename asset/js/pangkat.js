
var angka1 = parseInt($("#angka1").val());
var angka2 = parseInt($("#angka2").val());
function generatePangkat(){
    reset();

    angka1 = parseInt($("#angka1").val());
    angka2 = parseInt($("#angka2").val());
    
    if(isNaN(angka1) || isNaN(angka2)){
        swal("error","Input tidak valid", "error");
        return;
    }

    if(angka2 == 0){
        swal("error", "Pangkat tidak boleh 0","error");
        return;
    } 
    
    loopCreateTape(1, "B");
    for (let i = 0; i < angka2; i++) {
        loopCreateTape(angka1, "0");
        loopCreateTape(1, "C");
    }
    loopCreateTape(Math.pow(angka1,angka2) * 2, "B");

    pangkatState0(1);
}

function pangkatState0(posisi) {
    console.log(0);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("B");
            pangkatState1(posisi+1);
          break; 
         case "C":
            value.text("B");
            pangkatState7(posisi+1);
          break; 
         default:
         
        }     
    });
}

function pangkatState1(posisi) {
    console.log(1);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState1(posisi+1);
          break; 
         case "C":
            value.text("C");
            pangkatState2(posisi+1);
          break; 
         default: 
        }    
    });
}

function pangkatState2(posisi) {
    console.log(2);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("Y");
            pangkatState3(posisi+1);
          break; 
         case "C":
            value.text("C");
            pangkatState5(posisi-1);
          break; 
         case "B":
            value.text("1");
            pangkatState15(posisi-1);
          break;
         default: 
        }    
    });
}

function pangkatState3(posisi) {
    console.log(3);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState3(posisi+1);
          break;
         case "1":
            value.text("1");
            pangkatState3(posisi+1);
          break;
         case "C":
            value.text("C");
            pangkatState3(posisi+1);
          break; 
         case "B":
            value.text("1");
            pangkatState4(posisi-1);
          break;
         default: 
        }    
    });
}

function pangkatState4(posisi) {
    console.log(4);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState4(posisi-1);
          break;
         case "1":
            value.text("1");
            pangkatState4(posisi-1);
          break;
         case "Y":
            value.text("Y");
            pangkatState2(posisi+1);
          break; 
         case "C":
            value.text("C");
            pangkatState4(posisi-1);
          break;
         default: 
        }   
    });
}

function pangkatState5(posisi) {
    console.log(5);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) { 
         case "Y":
            value.text("0");
            pangkatState5(posisi-1);
          break; 
         case "C":
            value.text("C");
            pangkatState6(posisi-1);
          break;
         default: 
        }    
    });
}

function pangkatState6(posisi) {
    console.log(6);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState6(posisi-1);
          break; 
         case "B":
            value.text("B");
            pangkatState0(posisi+1);
          break;
         default: 
        }    
    });
}

function pangkatState7(posisi) {
    console.log(7);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("B");
            pangkatState8(posisi+1);
          break; 
         default:
         
        }    
    });
}

function pangkatState8(posisi) {
    console.log(8);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("B");
            pangkatState8(posisi+1);
          break; 
         case "C":
            value.text("B");
            pangkatState9(posisi+1);
          break; 
         default: 
        }    
    });
}

function pangkatState9(posisi) {
    console.log(9);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState10(posisi+1);
          break;
         case "1":
            value.text("1");
            pangkatState13(posisi-1);
          break; 
         default: 
        }    
    });
}

function pangkatState10(posisi) {
    console.log(10);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState10(posisi+1);
          break;
         case "1":
            value.text("0");
            pangkatState11(posisi+1);
          break;
         case "C":
            value.text("C");
            pangkatState10(posisi+1);
          break; 
         default: 
        }    
    });
}

function pangkatState11(posisi) {
    console.log(11);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) { 
         case "1":
            value.text("0");
            pangkatState11(posisi+1);
          break; 
         case "B":
            value.text("C");
            pangkatState12(posisi-1);
          break;
         default:
         
        }    
    });
}

function pangkatState12(posisi) {
    console.log(12);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState12(posisi-1);
          break; 
         case "C":
            value.text("C");
            pangkatState12(posisi-1);
          break; 
         case "B": 
            value.text("B");
            pangkatState0(posisi+1);
          break;
         default: 
        }    
    });
}

function pangkatState13(posisi) {
    console.log(13);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
            console.log(value.text());
        value.removeClass("bg-dark");
        switch(value.text()) { 
         case "C":
            value.text("B");
            pangkatState14(posisi+1); 
          break; 
         case "B":
            value.text("B");
            pangkatState14(posisi+1);
          break;
         default: 
        }    
    });
}

function pangkatState14(posisi) {  
    $("#hasil").text(Math.pow(angka1,angka2)); 
    swal("Berhasil", "Proses perpangkatan telah selesai", "success");
}

function pangkatState15(posisi) {
    console.log(15);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState15(posisi-1);
          break;
         case "1":
            value.text("1");
            pangkatState15(posisi-1);
          break;
         case "C":
            value.text("C");
            pangkatState15(posisi-1);
          break; 
         case "B":
            value.text("B");
            pangkatState16(posisi+1);
          break;
         default:
         
        }    
    });
}

function pangkatState16(posisi) {
    console.log(16);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("B");
            pangkatState17(posisi+1);
          break; 
         case "C":
            value.text("B");
            pangkatState14(posisi+1);
          break; 
         default: 
        }    
    });
}

function pangkatState17(posisi) {
    console.log(17);
    var value = $("#item-"+posisi);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState17(posisi+1);
          break;
         case "1":
            value.text("1");
            pangkatState17(posisi+1);
          break;
         case "C":
            value.text("C");
            pangkatState17(posisi+1);
          break; 
         case "B":
            value.text("1");
            pangkatState15(posisi-1);
          break;
         default: 
        }    
    });
}