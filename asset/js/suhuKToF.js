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

function kTfState0(position) {
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
         case "K":
            value.text("B"); 
            kTfState1(position+1);
          break; 
         default: 
        }       
    });
}


function kTfState1(position) {
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
            kTfState2(position+1);
          break; 
          case "B":
            value.text("B"); 
            kTfState5(position+1);
          break; 
          case "N":
            value.text("N"); 
            kTfState3(position+1);
          break; 
         default: 
        }       
    });
}

function kTfState2(position) {
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
            value.text("0"); 
            kTfState2(position+1);
          break; 
        case "B":
            value.text("B"); 
            kTfState5(position+1);
          break; 
         default: 
        }       
    });
}


function kTfState3(position) {  
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
            kTfState2(position+1);
          break;  
         default: 
        }       
    });
}

// function kTfState4(position) { 
//     console.log(4);
//     var value = $("#item-"+position); 
//     if(value.text() != null && value.text() != ""){ 
//         value.addClass("bg-dark");
//     }else{
//         loopCreateTape(1, "B");
//         var value = $("#item-"+position);
//         value.addClass("bg-dark");
//     } 
//     waktu(waktuPindah).then(() => {
//         value.removeClass("bg-dark");
//         switch(value.text()) {
//          case "0":
//             value.text("Y"); 
//             kTfState5(position-1);
//           break;   
//          default: 
//         }       
//     });
// }

function kTfState5(position) { 
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
            kTfState5(position+1);
          break;  
         case "N":
            value.text("N"); 
            kTfState16(position+1);
          break;  
         case "B":
            value.text("C"); 
            kTfState6(position+1);
          break;  
         default: 
        }       
    });
}

function kTfState6(position) { 
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
         case "0":
            value.text("X"); 
            kTfState7(position+1);
          break;   
         case "B":
            value.text("B"); 
            kTfState17(position+1);
          break; 
         default: 
        }       
    });
}

function kTfState7(position) { 
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
         case "C":
            value.text("C"); 
            kTfState8(position+1);
          break;   
         default: 
        }       
    });
}

function kTfState8(position) { 
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
         case "0":
            value.text("0"); 
            kTfState8(position+1);
          break;  
         case "B":
            value.text("0"); 
            kTfState9(position-1);
          break;   
         default: 
        }       
    });
}

function kTfState9(position) { 
    console.log(9); 
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
            kTfState9(position-1);
          break;  
         case "C":
            value.text("C"); 
            kTfState10(position-1);
          break;  
         default: 
        }       
    });
}

function kTfState10(position) { 
    console.log(10); 
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
            kTfState11(position+1);
          break;  
         case "N":
            value.text("N"); 
            kTfState12(position+1);
          break;  
         case "B":
            value.text("B"); 
            kTfState12(position+1);
          break;  
         case "X":
            value.text("X"); 
            kTfState10(position-1);
          break;  
         default: 
        }       
    });
}

function kTfState11(position) { 
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
         case "C":
            value.text("C"); 
            kTfState8(position+1);
          break;  
         case "X":
            value.text("X"); 
            kTfState11(position-1);
          break;  
         default: 
        }       
    });
}

function kTfState12(position) { 
    console.log(12); 
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
            kTfState12(position+1);
          break;  
         case "C":
            value.text("0"); 
            kTfState13(position-1);
          break;  
         default: 
        }       
    });
}

function kTfState13(position) { 
    console.log(13); 
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
            kTfState13(position+1);
          break;  
         case "B":
            value.text("B"); 
            kTfState14(position-1);
          break;  
         default: 
        }       
    });
}

function kTfState14(position) { 
    console.log(14); 
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
            value.text("F"); 
            kTfState15(position+1);
          break;  
         default: 
        }       
    });
}

function kTfState15(position) { 
    console.log(15); 
    $("#hasil").text((angka1 * 2) + "F");
    swal("Berhasil", "Proses perhitungan suhu Kelvin Ke Fahrenheit telah selesai", "success");
}

function kTfState17(position) { 
    console.log(17); 
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
         case "C":
            value.text("F"); 
            kTfState15(position+1);
          break;  
         default: 
        }       
    });
}

function kTfState16(position) { 
    console.log(17); 
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
            kTfState5(position);
          break;  
         default: 
        }       
    });
}