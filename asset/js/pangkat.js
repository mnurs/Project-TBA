function generatePangkat(){
    reset();

    var angka1 = parseInt($("#angka1").val());
    var angka2 = parseInt($("#angka2").val());
    
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

function pangkatState0(position) {
    console.log(0);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("B");
            pangkatState1(position+1);
          break; 
         case "C":
            value.text("B");
            pangkatState7(position+1);
          break; 
         default:
         
        }     
    });
}

function pangkatState1(position) {
    console.log(1);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState1(position+1);
          break; 
         case "C":
            value.text("C");
            pangkatState2(position+1);
          break; 
         default: 
        }    
    });
}

function pangkatState2(position) {
    console.log(2);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("Y");
            pangkatState3(position+1);
          break; 
         case "C":
            value.text("C");
            pangkatState5(position-1);
          break; 
         case "B":
            value.text("1");
            pangkatState15(position-1);
          break;
         default: 
        }    
    });
}

function pangkatState3(position) {
    console.log(3);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState3(position+1);
          break;
         case "1":
            value.text("1");
            pangkatState3(position+1);
          break;
         case "C":
            value.text("C");
            pangkatState3(position+1);
          break; 
         case "B":
            value.text("1");
            pangkatState4(position-1);
          break;
         default: 
        }    
    });
}

function pangkatState4(position) {
    console.log(4);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState4(position-1);
          break;
         case "1":
            value.text("1");
            pangkatState4(position-1);
          break;
         case "Y":
            value.text("Y");
            pangkatState2(position+1);
          break; 
         case "C":
            value.text("C");
            pangkatState4(position-1);
          break;
         default: 
        }   
    });
}

function pangkatState5(position) {
    console.log(5);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) { 
         case "Y":
            value.text("0");
            pangkatState5(position-1);
          break; 
         case "C":
            value.text("C");
            pangkatState6(position-1);
          break;
         default: 
        }    
    });
}

function pangkatState6(position) {
    console.log(6);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState6(position-1);
          break; 
         case "B":
            value.text("B");
            pangkatState0(position+1);
          break;
         default: 
        }    
    });
}

function pangkatState7(position) {
    console.log(7);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("B");
            pangkatState8(position+1);
          break; 
         default:
         
        }    
    });
}

function pangkatState8(position) {
    console.log(8);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("B");
            pangkatState8(position+1);
          break; 
         case "C":
            value.text("B");
            pangkatState9(position+1);
          break; 
         default: 
        }    
    });
}

function pangkatState9(position) {
    console.log(9);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState10(position+1);
          break;
         case "1":
            value.text("1");
            pangkatState13(position-1);
          break; 
         default: 
        }    
    });
}

function pangkatState10(position) {
    console.log(10);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState10(position+1);
          break;
         case "1":
            value.text("0");
            pangkatState11(position+1);
          break;
         case "C":
            value.text("C");
            pangkatState10(position+1);
          break; 
         default: 
        }    
    });
}

function pangkatState11(position) {
    console.log(11);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) { 
         case "1":
            value.text("0");
            pangkatState11(position+1);
          break; 
         case "B":
            value.text("C");
            pangkatState12(position-1);
          break;
         default:
         
        }    
    });
}

function pangkatState12(position) {
    console.log(12);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState12(position-1);
          break; 
         case "C":
            value.text("C");
            pangkatState12(position-1);
          break; 
         case "B": 
            value.text("B");
            pangkatState0(position+1);
          break;
         default: 
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
        switch(value.text()) { 
         case "C":
            value.text("B");
            pangkatState14(position+1); 
          break; 
         case "B":
            value.text("B");
            pangkatState14(position+1);
          break;
         default: 
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
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState15(position-1);
          break;
         case "1":
            value.text("1");
            pangkatState15(position-1);
          break;
         case "C":
            value.text("C");
            pangkatState15(position-1);
          break; 
         case "B":
            value.text("B");
            pangkatState16(position+1);
          break;
         default:
         
        }    
    });
}

function pangkatState16(position) {
    console.log(16);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("B");
            pangkatState17(position+1);
          break; 
         case "C":
            value.text("B");
            pangkatState14(position+1);
          break; 
         default: 
        }    
    });
}

function pangkatState17(position) {
    console.log(17);
    var value = $("#item-"+position);
    value.addClass("bg-dark");
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0": 
            value.text("0");
            pangkatState17(position+1);
          break;
         case "1":
            value.text("1");
            pangkatState17(position+1);
          break;
         case "C":
            value.text("C");
            pangkatState17(position+1);
          break; 
         case "B":
            value.text("1");
            pangkatState15(position-1);
          break;
         default: 
        }    
    });
}