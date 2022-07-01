var angka1 = parseInt($("#angka1").val());
function generateFToC(){
    reset();

    angka1 = parseInt($("#angka1").val());

    if(isNaN(angka1)){
        swal("error","Input tidak valid", "error");
        return;
    } 
     var positifangka1 = angka1 > 0 ? angka1 : angka1 * (-1);
    
    if(angka1 == 0){
        loopCreateTape(1, "B"); 
        loopCreateTape(1, "B");
        fTcState4(1);
    }else{ 
        loopCreateTape(1, "B");
        loopCreateTape(1,angka1 < 0 ? "N" :"0");  
        loopCreateTape(angka1 < 0 ? positifangka1 : positifangka1-1,"0");   
        loopCreateTape(1, "F");
        loopCreateTape(1, "B");
        fTcState0(1);    
    } 

}

function fTcState0(position) {
    console.log(0);
    var value = $("#item-"+position); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+position);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0":
            value.text("0"); 
            fTcState0(position+1);
          break;
         case "F":
            value.text("B"); 
            fTcState1(position-1);
          break; 
         case "N":
            value.text("N"); 
            fTcState10(position+1);
          break; 
         default: 
        }       
    });
}


function fTcState1(position) {
    console.log(1);
    var value = $("#item-"+position); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+position);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0":
            value.text("0"); 
            fTcState1(position-1);
          break; 
          case "B":
            value.text("B"); 
            fTcState2(position+1);
          break; 
          case "N":
            value.text("N"); 
            fTcState2(position+1);
          break; 
         default: 
        }       
    });
}

function fTcState2(position) {
    console.log(2);
    var value = $("#item-"+position); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+position);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) { 
        case "0":
            value.text("X"); 
            fTcState3(position+1);
          break; 
        case "Y":
            value.text("Y"); 
            fTcState6(position);
          break; 
         default: 
        }       
    });
}


function fTcState3(position) {  
    console.log(3);
    var value = $("#item-"+position); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+position);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0":
            value.text("0"); 
            fTcState3(position+1);
          break; 
        case "B":
            value.text("B"); 
            fTcState4(position-1);
          break; 
        case "Y":
            value.text("Y"); 
            fTcState4(position+1);
          break; 
        case "Y":
            value.text("Y"); 
            fTcState6(position);
          break; 
         default: 
        }       
    });
}

function fTcState4(position) { 
    console.log(4);
    var value = $("#item-"+position); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+position);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0":
            value.text("Y"); 
            fTcState5(position-1);
          break;   
         default: 
        }       
    });
}

function fTcState5(position) { 
    console.log(5);
    var value = $("#item-"+position); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+position);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0":
            value.text("0"); 
            fTcState5(position-1);
          break;  
         case "X":
            value.text("X"); 
            fTcState2(position+1);
          break;  
         default: 
        }       
    });
}

function fTcState6(position) { 
    console.log(6);
    var value = $("#item-"+position); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+position);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "Y":
            value.text("B"); 
            fTcState6(position+1);
          break;   
         case "B":
            value.text("B"); 
            fTcState7(position-1);
          break; 
         default: 
        }       
    });
}

function fTcState7(position) { 
    console.log(7);
    var value = $("#item-"+position); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+position);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "B":
            value.text("B"); 
            fTcState7(position-1);
          break;  
         case "X":
            value.text("0"); 
            fTcState8(position+1);
          break;  
         default: 
        }       
    });
}

function fTcState8(position) { 
    console.log(8);
    var value = $("#item-"+position); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+position);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "X":
            value.text("0"); 
            fTcState8(position-1);
          break;  
         case "B":
            value.text("B"); 
            fTcState9(position+1);
          break;  
         case "N":
            value.text("N"); 
            fTcState9(position+1);
          break;  
         default: 
        }       
    });
}

function fTcState9(position) { 
    console.log(10); 
    $("#hasil").text(angka1 + "C");
    swal("Berhasil", "Proses perhitungan suhu Celcius Ke Fahrenheit telah selesai", "success");
}

function fTcState10(position) { 
    console.log(11); 
    var value = $("#item-"+position); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+position);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) { 
         case "0":
            value.text("0"); 
            fTcState0(position);
          break;  
         default: 
        }       
    });
}