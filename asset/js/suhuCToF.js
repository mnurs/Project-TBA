var angka1 = parseInt($("#angka1").val());
function generateCToF(){
    reset();

    angka1 = parseInt($("#angka1").val());

    if(isNaN(angka1)){
        swal("error","Input tidak valid", "error");
        return;
    } 
    
    if(angka1 == 0){
        loopCreateTape(1, "B"); 
        loopCreateTape(1, "B");
        cTfState4(1);
    }else{ 
        loopCreateTape(1, "B");
        loopCreateTape(angka1,"0");   
        loopCreateTape(1, "B");
        cTfState0(1);    
    } 

}

function cTfState0(position) {
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
            cTfState0(position+1);
          break;
         case "B":
            value.text("C"); 
            cTfState1(position+1);
          break; 
         default: 
        }       
    });
}


function cTfState1(position) {
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
            cTfState1(position-1);
          break; 
          case "B":
            value.text("0"); 
            cTfState2(position-1);
          break; 
         default: 
        }       
    });
}

function cTfState2(position) {
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
            cTfState2(position-1);
          break; 
        case "C":
            value.text("C"); 
            cTfState3(position-1);
          break; 
         default: 
        }       
    });
}


function cTfState3(position) {  
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
            cTfState3(position-1);
          break; 
        case "B":
            value.text("B"); 
            cTfState4(position+1);
          break; 
         default: 
        }       
    });
}

function cTfState4(position) { 
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
            value.text("X"); 
            cTfState5(position+1);
          break;  
         default: 
        }       
    });
}

function cTfState5(position) { 
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
            cTfState5(position+1);
          break;  
         case "C":
            value.text("C"); 
            cTfState6(position+1);
          break;  
         default: 
        }       
    });
}

function cTfState6(position) { 
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
            value.text("0"); 
            cTfState6(position+1);
          break;  
         case "B":
            value.text("0"); 
            cTfState7(position-1);
          break;  
         default: 
        }       
    });
}

function cTfState7(position) { 
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
         case "0":
            value.text("0"); 
            cTfState7(position-1);
          break;  
         case "C":
            value.text("C"); 
            cTfState8(position-1);
          break;  
         default: 
        }       
    });
}

function cTfState8(position) { 
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
            cTfState8(position-1);
          break;  
         case "X":
            value.text("X"); 
            cTfState9(position+1);
          break;  
         default: 
        }       
    });
}

function cTfState9(position) { 
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
            value.text("X"); 
            cTfState10(position+1);
          break;   
         default: 
        }       
    });
}

function cTfState10(position) { 
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
            value.text("0"); 
            cTfState5(position+1);
          break;  
         case "C":
            value.text("0"); 
            cTfState11(position-1);
          break;    
         default: 
        }       
    });
}

function cTfState11(position) {
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
         case "X":
            value.text("0"); 
            cTfState11(position-1);
          break;  
         case "B":
            value.text("B"); 
            cTfState12(position+1);
          break;    
         default: 
        }       
    });
}

function cTfState12(position) { 
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
            value.text("B"); 
            cTfState13(position+1);
          break;   
         default: 
        }       
    });
}

function cTfState13(position) { 
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
            cTfState13(position+1);
          break;  
         case "B":
            value.text("F"); 
            cTfState14(position+1);
          break;    
         default: 
        }       
    });
}

function cTfState14(position) {
    console.log(14); 
    $("#hasil").text((angka1 * 2) + "F");
    swal("Berhasil", "Proses perhitungan suhu Celcius Ke Fahrenheit telah selesai", "success");
}
