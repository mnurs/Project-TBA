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

function fTcState0(posisi) {
    console.log(0);
    var value = $("#item-"+posisi); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+posisi);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0":
            value.text("0"); 
            fTcState0(posisi+1);
          break;
         case "F":
            value.text("B"); 
            fTcState1(posisi-1);
          break; 
         case "N":
            value.text("N"); 
            fTcState10(posisi+1);
          break; 
         default: 
        }       
    });
}


function fTcState1(posisi) {
    console.log(1);
    var value = $("#item-"+posisi); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+posisi);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0":
            value.text("0"); 
            fTcState1(posisi-1);
          break; 
          case "B":
            value.text("B"); 
            fTcState2(posisi+1);
          break; 
          case "N":
            value.text("N"); 
            fTcState2(posisi+1);
          break; 
         default: 
        }       
    });
}

function fTcState2(posisi) {
    console.log(2);
    var value = $("#item-"+posisi); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+posisi);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) { 
        case "0":
            value.text("X"); 
            fTcState3(posisi+1);
          break; 
        case "Y":
            value.text("Y"); 
            fTcState6(posisi);
          break; 
         default: 
        }       
    });
}


function fTcState3(posisi) {  
    console.log(3);
    var value = $("#item-"+posisi); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+posisi);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0":
            value.text("0"); 
            fTcState3(posisi+1);
          break; 
        case "B":
            value.text("B"); 
            fTcState4(posisi-1);
          break; 
        case "Y":
            value.text("Y"); 
            fTcState4(posisi+1);
          break; 
        case "Y":
            value.text("Y"); 
            fTcState6(posisi);
          break; 
         default: 
        }       
    });
}

function fTcState4(posisi) { 
    console.log(4);
    var value = $("#item-"+posisi); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+posisi);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0":
            value.text("Y"); 
            fTcState5(posisi-1);
          break;   
         default: 
        }       
    });
}

function fTcState5(posisi) { 
    console.log(5);
    var value = $("#item-"+posisi); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+posisi);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "0":
            value.text("0"); 
            fTcState5(posisi-1);
          break;  
         case "X":
            value.text("X"); 
            fTcState2(posisi+1);
          break;  
         default: 
        }       
    });
}

function fTcState6(posisi) { 
    console.log(6);
    var value = $("#item-"+posisi); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+posisi);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "Y":
            value.text("B"); 
            fTcState6(posisi+1);
          break;   
         case "B":
            value.text("B"); 
            fTcState7(posisi-1);
          break; 
         default: 
        }       
    });
}

function fTcState7(posisi) { 
    console.log(7);
    var value = $("#item-"+posisi); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+posisi);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "B":
            value.text("B"); 
            fTcState7(posisi-1);
          break;  
         case "X":
            value.text("0"); 
            fTcState8(posisi+1);
          break;  
         default: 
        }       
    });
}

function fTcState8(posisi) { 
    console.log(8);
    var value = $("#item-"+posisi); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+posisi);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) {
         case "X":
            value.text("0"); 
            fTcState8(posisi-1);
          break;  
         case "B":
            value.text("B"); 
            fTcState9(posisi+1);
          break;  
         case "N":
            value.text("N"); 
            fTcState9(posisi+1);
          break;  
         default: 
        }       
    });
}

function fTcState9(posisi) { 
    console.log(10); 
    $("#hasil").text(angka1 + "C");
    swal("Berhasil", "Proses perhitungan suhu Celcius Ke Fahrenheit telah selesai", "success");
}

function fTcState10(posisi) { 
    console.log(11); 
    var value = $("#item-"+posisi); 
    if(value.text() != null && value.text() != ""){ 
        value.addClass("bg-dark");
    }else{
        loopCreateTape(1, "B");
        var value = $("#item-"+posisi);
        value.addClass("bg-dark");
    } 
    waktu(waktuPindah).then(() => {
        value.removeClass("bg-dark");
        switch(value.text()) { 
         case "0":
            value.text("0"); 
            fTcState0(posisi);
          break;  
         default: 
        }       
    });
}