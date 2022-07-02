var angka1 = parseInt($("#angka1").val());
function generateKToF(){
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
        kTfState4(1);
    }else{ 
        loopCreateTape(1, "B");
        loopCreateTape(1, "K");
        loopCreateTape(1,angka1 < 0 ? "N" :"0");  
        loopCreateTape(angka1 < 0 ? positifangka1 : positifangka1-1,"0");   
        loopCreateTape(1, "B");
        kTfState0(1);    
    } 

}

function kTfState0(posisi) {
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
         case "K":
            value.text("B"); 
            kTfState1(posisi+1);
          break; 
         default: 
        }       
    });
}


function kTfState1(posisi) {
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
            kTfState2(posisi+1);
          break; 
          case "B":
            value.text("B"); 
            kTfState5(posisi+1);
          break; 
          case "N":
            value.text("N"); 
            kTfState3(posisi+1);
          break; 
         default: 
        }       
    });
}

function kTfState2(posisi) {
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
            value.text("0"); 
            kTfState2(posisi+1);
          break; 
        case "B":
            value.text("B"); 
            kTfState5(posisi+1);
          break; 
         default: 
        }       
    });
}


function kTfState3(posisi) {  
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
            kTfState2(posisi+1);
          break;  
         default: 
        }       
    });
}

// function kTfState4(posisi) { 
//     console.log(4);
//     var value = $("#item-"+posisi); 
//     if(value.text() != null && value.text() != ""){ 
//         value.addClass("bg-dark");
//     }else{
//         loopCreateTape(1, "B");
//         var value = $("#item-"+posisi);
//         value.addClass("bg-dark");
//     } 
//     waktu(waktuPindah).then(() => {
//         value.removeClass("bg-dark");
//         switch(value.text()) {
//          case "0":
//             value.text("Y"); 
//             kTfState5(posisi-1);
//           break;   
//          default: 
//         }       
//     });
// }

function kTfState5(posisi) { 
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
            kTfState5(posisi+1);
          break;  
         case "N":
            value.text("N"); 
            kTfState16(posisi+1);
          break;  
         case "B":
            value.text("C"); 
            kTfState6(posisi+1);
          break;  
         default: 
        }       
    });
}

function kTfState6(posisi) { 
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
         case "0":
            value.text("X"); 
            kTfState7(posisi+1);
          break;   
         case "B":
            value.text("B"); 
            kTfState17(posisi+1);
          break; 
         default: 
        }       
    });
}

function kTfState7(posisi) { 
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
         case "C":
            value.text("C"); 
            kTfState8(posisi+1);
          break;   
         default: 
        }       
    });
}

function kTfState8(posisi) { 
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
            kTfState8(posisi+1);
          break;  
         case "B":
            value.text("0"); 
            kTfState9(posisi-1);
          break;   
         default: 
        }       
    });
}

function kTfState9(posisi) { 
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
            value.text("0"); 
            kTfState9(posisi-1);
          break;  
         case "C":
            value.text("C"); 
            kTfState10(posisi-1);
          break;  
         default: 
        }       
    });
}

function kTfState10(posisi) { 
    console.log(10); 
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
            kTfState11(posisi+1);
          break;  
         case "N":
            value.text("N"); 
            kTfState12(posisi+1);
          break;  
         case "B":
            value.text("B"); 
            kTfState12(posisi+1);
          break;  
         case "X":
            value.text("X"); 
            kTfState10(posisi-1);
          break;  
         default: 
        }       
    });
}

function kTfState11(posisi) { 
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
         case "C":
            value.text("C"); 
            kTfState8(posisi+1);
          break;  
         case "X":
            value.text("X"); 
            kTfState11(posisi-1);
          break;  
         default: 
        }       
    });
}

function kTfState12(posisi) { 
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
         case "0":
            value.text("X"); 
            kTfState12(posisi+1);
          break;  
         case "C":
            value.text("0"); 
            kTfState13(posisi-1);
          break;  
         default: 
        }       
    });
}

function kTfState13(posisi) { 
    console.log(13); 
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
            kTfState13(posisi+1);
          break;  
         case "B":
            value.text("B"); 
            kTfState14(posisi-1);
          break;  
         default: 
        }       
    });
}

function kTfState14(posisi) { 
    console.log(14); 
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
            kTfState15(posisi+1);
          break;  
         default: 
        }       
    });
}

function kTfState15(posisi) { 
    console.log(15); 
    $("#hasil").text((angka1 * 2) + "F");
    swal("Berhasil", "Proses perhitungan suhu Kelvin Ke Fahrenheit telah selesai", "success");
}

function kTfState17(posisi) { 
    console.log(17); 
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
            kTfState15(posisi+1);
          break;  
         default: 
        }       
    });
}

function kTfState16(posisi) { 
    console.log(17); 
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
            kTfState5(posisi);
          break;  
         default: 
        }       
    });
}