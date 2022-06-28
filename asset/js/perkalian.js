var angka1 = parseInt($("#angka1").val());
var angka2 = parseInt($("#angka2").val());
function generateKali(){
    reset();
 
    angka1 = parseInt($("#angka1").val());
    angka2 = parseInt($("#angka2").val());

	if(isNaN(angka1) || isNaN(angka2)){
	    swal("error","Input tidak valid", "error");
	    return;
	}

	if(angka2 == 0){
	    swal("error", "Pengali tidak boleh 0","error");
	    return;
	}

	var positifangka1 = angka1 > 0 ? angka1 : angka1 * (-1);
	var positifangka2 = angka2 > 0 ? angka2 : angka2 * (-1);

	loopCreateTape(1, "B");
    loopCreateTape(1, angka1 < 0 ? "N" :"P");
    loopCreateTape(positifangka1, "0");
    loopCreateTape(1, angka2 < 0 ? "N" :"P");
    loopCreateTape(positifangka2, "0");
    loopCreateTape(1, "P");
    loopCreateTape(positifangka1*positifangka2+1, "B");

    perkalianState0(1);
}

function perkalianState0(position) {
    console.log(0);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) { 
         case "P":
            value.text("B");
            perkalianState1(position+1);
          break;
         case "N":
            value.text("B");
            perkalianState3(position+1);
          break; 
         default: 
        }       
    });
}

function perkalianState1(position) {
    console.log(1);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            perkalianState1(position+1);
          break;
         case "P":
            value.text("P");
            perkalianState2(position+1);
          break;
         case "N":
            value.text("N");
            perkalianState4(position+1);
          break; 
         default: 
        }   
    });
}

function perkalianState2(position) {
    console.log(2);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            perkalianState2(position+1);
          break;
         case "P":
            value.text("P");
            perkalianState5(position-1);
          break; 
         default: 
        }   
    });
}

function perkalianState3(position) {
    console.log(3);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            perkalianState3(position+1);
          break;
         case "P":
            value.text("P");
            perkalianState4(position+1);
          break;
         case "N":
            value.text("N");
            perkalianState2(position+1);
          break; 
         default: 
        }   
    });
}

function perkalianState4(position) {
    console.log(4);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            perkalianState4(position+1);
          break;
         case "P":
            value.text("N");
            perkalianState5(position-1);
          break; 
         default: 
        }   
    });
}

function perkalianState5(position) {
    console.log(5);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            perkalianState5(position-1);
          break;
         case "P":
            value.text("P");
            perkalianState6(position-1);
          break;
         case "N":
            value.text("N");
            perkalianState6(position-1);
          break; 
         default: 
        }   
    });
}

function perkalianState6(position) {
    console.log(6);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            perkalianState6(position-1);
          break; 
         case "B":
            value.text("B");
            perkalianState7(position+1);
          break;
         default: 
        }   
    });
}

function perkalianState7(position) {
    console.log(7);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("B");
            perkalianState8(position+1);
          break;
         case "P":
            value.text("B");
            perkalianState17(position+1);
          break;
         case "N":
            value.text("B");
            perkalianState17(position+1);
          break; 
         default: 
        }   
    });
}

function perkalianState8(position) {
    console.log(8);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            perkalianState8(position+1);
          break;
         case "P":
            value.text("P");
            perkalianState9(position+1);
          break;
         case "N":
            value.text("N");
            perkalianState9(position+1);
          break; 
         default: 
        }   
    });
}

function perkalianState9(position) {
    console.log(9);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            perkalianState9(position+1);
          break;
         case "P":
            value.text("P");
            perkalianState10(position-1);
          break;
         case "N":
            value.text("N");
            perkalianState10(position-1);
          break;
         case "X":
            value.text("X");
            perkalianState9(position+1);
          break; 
         default: 
        }   
    });
}

function perkalianState10(position) {
    console.log(10);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("X");
            perkalianState11(position+1);
          break; 
         case "X":
            value.text("0");
            perkalianState11(position+1);
          break; 
         default: 
        }   
    });
}

function perkalianState11(position) {
    console.log(11);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            perkalianState11(position+1);
          break;
         case "P":
            value.text("P");
            perkalianState12(position+1);
          break;
         case "N":
            value.text("N");
            perkalianState12(position+1);
          break;
         case "X":
            value.text("X");
            perkalianState11(position+1);
          break; 
         default: 
        }   
    });
}

function perkalianState12(position) {
    console.log(12);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            perkalianState12(position+1);
          break; 
         case "B":
            value.text("0");
            perkalianState13(position-1);
          break;
         default: 
        }   
    });
}

function perkalianState13(position) {
    console.log(13);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0":
            value.text("0");
            perkalianState13(position-1);
          break;
         case "P":
            value.text("P");
            perkalianState14(position-1);
          break;
         case "N":
            value.text("N");
            perkalianState14(position-1);
          break; 
         default: 
        }   
    });
}

function perkalianState14(position) {
    console.log(14);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            perkalianState16(position-1);
          break; 
         case "X":
            value.text("X");
            perkalianState15(position-1);
          break; 
         default: 
        }   
    });
}

function perkalianState15(position) {
    console.log(15);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("X");
            perkalianState11(position+1);
          break;
         case "P":
            value.text("P");
            perkalianState6(position-1);
          break;
         case "N":
            value.text("N");
            perkalianState6(position-1);
          break;
         case "X":
            value.text("X");
            perkalianState15(position-1);
          break; 
         default: 
        }   
    });
}

function perkalianState16(position) {
    console.log(16);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            perkalianState16(position-1);
          break;
         case "P":
            value.text("P");
            perkalianState6(position-1);
          break;
         case "N":
            value.text("N");
            perkalianState6(position-1);
          break;
         case "X":
            value.text("0");
            perkalianState11(position+1);
          break; 
         default: 
        }   
    });
}

function perkalianState17(position) {
    console.log(17);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("B");
            perkalianState17(position+1);
          break; 
         case "X":
            value.text("B");
            perkalianState17(position+1);
          break; 
         default: 
        }   
    });
    $("#hasil").text(angka1 *  angka2);
    swal("Berhasil", "Proses perkalian telah selesai", "success");
}
