function generateKali(){
    reset();
 
    var a = parseInt($("#angka1").val());
    var b = parseInt($("#angka2").val());

	if(isNaN(a) || isNaN(b)){
	    swal("error","Input tidak valid", "error");
	    return;
	}

	if(b == 0){
	    swal("error", "Pengali tidak boleh 0","error");
	    return;
	}

	var pa = a > 0 ? a : a * (-1);
	var pb = b > 0 ? b : b * (-1);

	loopCreateTape(1, "B");
    loopCreateTape(1, a < 0 ? "N" :"P");
    loopCreateTape(pa, "0");
    loopCreateTape(1, b < 0 ? "N" :"P");
    loopCreateTape(pb, "0");
    loopCreateTape(1, "P");
    loopCreateTape(pa*pb+1, "B");

    perkalianState0(1);
}

function perkalianState0(position) {
    console.log(0);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "P"){
        	value.text("B");
            perkalianState1(position+1);
        }
        else if(value.text() == "N"){
        	value.text("B");
            perkalianState3(position+1);
        }
    });
}

function perkalianState1(position) {
    console.log(1);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            perkalianState1(position+1);
        }
        else if(value.text() == "P"){
            value.text("P");
            perkalianState2(position+1);
        }
        else if(value.text() == "N"){
            value.text("N");
            perkalianState4(position+1);
        }
    });
}

function perkalianState2(position) {
    console.log(2);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            perkalianState2(position+1);
        }
        else if(value.text() == "P"){
            value.text("P");
            perkalianState5(position-1);
        }
    });
}

function perkalianState3(position) {
    console.log(3);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            perkalianState3(position+1);
        }
        else if(value.text() == "P"){
            value.text("P");
            perkalianState4(position+1);
        }
        else if(value.text() == "N"){
            value.text("N");
            perkalianState2(position+1);
        }
    });
}

function perkalianState4(position) {
    console.log(4);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            perkalianState4(position+1);
        }
        else if(value.text() == "P"){
        	value.text("N");
            perkalianState5(position-1);
        }
    });
}

function perkalianState5(position) {
    console.log(5);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            perkalianState5(position-1);
        }
        else if(value.text() == "P"){
            value.text("P");
            perkalianState6(position-1);
        }
        else if(value.text() == "N"){
            value.text("N");
            perkalianState6(position-1);
        }
    });
}

function perkalianState6(position) {
    console.log(6);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            perkalianState6(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            perkalianState7(position+1);
        }
    });
}

function perkalianState7(position) {
    console.log(7);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
        	value.text("B");
            perkalianState8(position+1);
        }
        else if(value.text() == "P"){
        	value.text("B");
            perkalianState17(position+1);
        }
        else if(value.text() == "N"){
        	value.text("B");
            perkalianState17(position+1);
        }
    });
}

function perkalianState8(position) {
    console.log(8);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            perkalianState8(position+1);
        }
        else if(value.text() == "P"){
            value.text("P");
            perkalianState9(position+1);
        }
        else if(value.text() == "N"){
            value.text("N");
            perkalianState9(position+1);
        }
    });
}

function perkalianState9(position) {
    console.log(9);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            perkalianState9(position+1);
        }
        else if(value.text() == "P"){
            value.text("P");
            perkalianState10(position-1);
        }
        else if(value.text() == "N"){
            value.text("N");
            perkalianState10(position-1);
        }
         else if(value.text() == "X"){
            value.text("X");
            perkalianState9(position+1);
        }
    });
}

function perkalianState10(position) {
    console.log(10);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
        	value.text("X");
            perkalianState11(position+1);
        }
        else if(value.text() == "X"){
        	value.text("0");
            perkalianState11(position+1);
        }
    });
}

function perkalianState11(position) {
    console.log(11);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            perkalianState11(position+1);
        }
        else if(value.text() == "P"){
            value.text("P");
            perkalianState12(position+1);
        }
        else if(value.text() == "N"){
            value.text("N");
            perkalianState12(position+1);
        }
        else if(value.text() == "X"){
            value.text("X");
            perkalianState11(position+1);
        }
    });
}

function perkalianState12(position) {
    console.log(12);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            perkalianState12(position+1);
        }
        else if(value.text() == "B"){
        	value.text("0");
            perkalianState13(position-1);
        }
    });
}

function perkalianState13(position) {
    console.log(13);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            perkalianState13(position-1);
        }
        else if(value.text() == "P"){
            value.text("P");
            perkalianState14(position-1);
        }
        else if(value.text() == "N"){
            value.text("N");
            perkalianState14(position-1);
        }
    });
}

function perkalianState14(position) {
    console.log(14);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            perkalianState16(position-1);
        }
        else if(value.text() == "X"){
            value.text("X");
            perkalianState15(position-1);
        }
    });
}

function perkalianState15(position) {
    console.log(15);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
        	value.text("X");
            perkalianState11(position+1);
        }
        else if(value.text() == "P"){
            value.text("P");
            perkalianState6(position-1);
        }
        else if(value.text() == "N"){
            value.text("N");
            perkalianState6(position-1);
        }
        else if(value.text() == "X"){
            value.text("X");
            perkalianState15(position-1);
        }
    });
}

function perkalianState16(position) {
    console.log(16);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
            value.text("0");
            perkalianState16(position-1);
        }
        else if(value.text() == "P"){
            value.text("P");
            perkalianState6(position-1);
        }
        else if(value.text() == "N"){
            value.text("N");
            perkalianState6(position-1);
        }
        else if(value.text() == "X"){
        	value.text("0");
            perkalianState11(position+1);
        }
    });
}

function perkalianState17(position) {
    console.log(17);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        if(value.text() == "0"){
        	value.text("B");
            perkalianState17(position+1);
        }
        else if(value.text() == "X"){
        	value.text("B");
            perkalianState17(position+1);
        }
    });
    swal("Berhasil", "Proses perkalian telah selesai", "success");
}
