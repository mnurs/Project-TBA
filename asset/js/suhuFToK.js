var angka1 = parseInt($("#angka1").val());
function generateFToK(){
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
        fTkState4(1);
    }else{ 
        loopCreateTape(1, "B");
        loopCreateTape(1,angka1 < 0 ? "N" :"0");  
        loopCreateTape(angka1 < 0 ? positifangka1 : positifangka1-1,"0");    
        loopCreateTape(1, "B");
        fTkState0(1);    
    } 

}

function fTkState0(posisi) {
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
            fTkState0(posisi+1);
          break;
         case "F":
            value.text("B"); 
            fTkState1(posisi-1);
          break; 
         case "N":
            value.text("N"); 
            fTkState10(posisi+1);
          break; 
         default: 
        }       
    });
}


function fTkState1(posisi) {
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
            fTkState1(posisi-1);
          break; 
          case "B":
            value.text("B"); 
            fTkState2(posisi+1);
          break; 
          case "N":
            value.text("N"); 
            fTkState2(posisi+1);
          break; 
         default: 
        }       
    });
}

function fTkState2(posisi) {
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
            fTkState3(posisi+1);
          break; 
        case "Y":
            value.text("Y"); 
            fTkState6(posisi);
          break; 
         default: 
        }       
    });
}


function fTkState3(posisi) {  
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
            fTkState3(posisi+1);
          break; 
        case "B":
            value.text("B"); 
            fTkState4(posisi-1);
          break; 
        case "Y":
            value.text("Y"); 
            fTkState4(posisi+1);
          break; 
        case "Y":
            value.text("Y"); 
            fTkState6(posisi);
          break; 
         default: 
        }       
    });
}

function fTkState4(posisi) { 
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
            fTkState5(posisi-1);
          break;   
         default: 
        }       
    });
}

function fTkState5(posisi) { 
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
            fTkState5(posisi-1);
          break;  
         case "X":
            value.text("X"); 
            fTkState2(posisi+1);
          break;  
         default: 
        }       
    });
}

function fTkState6(posisi) { 
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
            fTkState6(posisi+1);
          break;   
         case "B":
            value.text("B"); 
            fTkState7(posisi-1);
          break; 
         default: 
        }       
    });
}

function fTkState7(posisi) { 
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
            fTkState7(posisi-1);
          break;  
         case "X":
            value.text("0"); 
            fTkState8(posisi+1);
          break;  
         default: 
        }       
    });
}

function fTkState8(posisi) { 
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
            fTkState8(posisi-1);
          break;  
         case "B":
            value.text("B"); 
            fTkState10(posisi+1);
          break;  
         case "N":
            value.text("N"); 
            fTkState10(posisi+1);
          break;  
         default: 
        }       
    });
}

function fTkState9(posisi) { 
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
         case "B":
            value.text("K"); 
            fTkState12(posisi+1);
          break;  
         case "N":
            value.text("K"); 
            fTkState11(posisi+1);
          break;  
         case "0":
            value.text("K"); 
            fTkState10(posisi+1);
          break;  
         default: 
        }       
    });
}

function fTkState10(posisi) { 
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
            fTkState10(posisi+1);
          break;  
         case "B":
            value.text("0"); 
            fTkState11(posisi+1);
          break;  
         default: 
        }       
    });
}

function fTcStat12(posisi) { 
    console.log(10); 
    $("#hasil").text((angka1 * 2) + "F");
    swal("Berhasil", "Proses perhitungan suhu Kalvin Ke Fahrenheit telah selesai", "success");
}
