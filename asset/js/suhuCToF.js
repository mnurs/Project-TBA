var angka1 = parseInt($("#angka1").val());
function generateCToF(){
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
        cTfState4(1);
    }else{ 
        loopCreateTape(1, "B");
        loopCreateTape(1,angka1 < 0 ? "N" :"0");  
        loopCreateTape(angka1 < 0 ? positifangka1 : positifangka1-1,"0");   
        loopCreateTape(1, "B");
        cTfState0(1);    
    } 

}

function cTfState0(posisi) {
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
            cTfState0(posisi+1);
          break;
         case "B":
            value.text("C"); 
            cTfState1(posisi+1);
          break; 
         case "N":
            value.text("N"); 
            cTfState11(posisi+1);
          break; 
         default: 
        }       
    });
}


function cTfState1(posisi) {
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
            value.text("X"); 
            cTfState2(posisi+1);
          break; 
          case "B":
            value.text("B"); 
            cTfState12(posisi+1);
          break; 
         default: 
        }       
    });
}

function cTfState2(posisi) {
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
        case "C":
            value.text("C"); 
            cTfState3(posisi+1);
          break; 
         default: 
        }       
    });
}


function cTfState3(posisi) {  
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
            cTfState3(posisi+1);
          break; 
        case "B":
            value.text("0"); 
            cTfState4(posisi-1);
          break; 
         default: 
        }       
    });
}

function cTfState4(posisi) { 
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
            value.text("0"); 
            cTfState4(posisi-1);
          break;  
         case "C":
            value.text("C"); 
            cTfState6(posisi-1);
          break;  
         default: 
        }       
    });
}

function cTfState5(posisi) { 
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
         case "X":
            value.text("X"); 
            cTfState5(posisi+1);
          break;  
         case "C":
            value.text("C"); 
            cTfState3(posisi+1);
          break;  
         default: 
        }       
    });
}

function cTfState6(posisi) { 
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
         case "X":
            value.text("X"); 
            cTfState6(posisi-1);
          break;  
         case "0":
            value.text("X"); 
            cTfState5(posisi+1);
          break;  
         case "N":
            value.text("N"); 
            cTfState7(posisi+1);
          break; 
         case "B":
            value.text("B"); 
            cTfState7(posisi+1);
          break; 
         default: 
        }       
    });
}

function cTfState7(posisi) { 
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
         case "X":
            value.text("0"); 
            cTfState7(posisi+1);
          break;  
         case "C":
            value.text("0"); 
            cTfState8(posisi+1);
          break;  
         default: 
        }       
    });
}

function cTfState8(posisi) { 
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
         case "0":
            value.text("0"); 
            cTfState8(posisi+1);
          break;  
         case "B":
            value.text("B"); 
            cTfState9(posisi-1);
          break;  
         default: 
        }       
    });
}

function cTfState9(posisi) { 
    console.log(9);
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
            value.text("F"); 
            cTfState10(posisi+1);
          break;   
         default: 
        }       
    });
}

function cTfState10(posisi) { 
    console.log(10); 
    $("#hasil").text((angka1 * 2) + "F");
    swal("Berhasil", "Proses perhitungan suhu Celcius Ke Fahrenheit telah selesai", "success");
}

function cTfState11(posisi) {
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
            cTfState0(posisi);
          break;  
         default: 
        }       
    });
}

function cTfState12(posisi) { 
    console.log(12);
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
         case "C":
            value.text("F"); 
            cTfState10(posisi+1);
          break;   
         default: 
        }       
    });
}