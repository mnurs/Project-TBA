var angka1 = parseInt($("#angka1").val());  
function generateKtoC(){
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
        kTcState4(1);
    }else{
        loopCreateTape(1, "B");
        loopCreateTape(1, "K");
        loopCreateTape(1,angka1 < 0 ? "N" :"B");  
        loopCreateTape(positifangka1,"0");  
        loopCreateTape(1, "B");
        kTcState0(1);    
    } 

}

function kTcState0(position) {
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
            kTcState1(position+1);
          break; 
         default: 
        }       
    });
}

function kTcState1(position) {
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
            kTcState2(position+1);
          break;
         case "N":
            value.text("N"); 
            kTcState3(position+1);
          break;
         case "B":
            value.text("B"); 
            kTcState6(position+1);
          break;
         default: 
        }       
    });
}

function kTcState2(position) {
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
            kTcState2(position+1);
          break; 
          case "B":
            value.text("B"); 
            kTcState5(position+1);
          break; 
         default: 
        }       
    });
}

function kTcState3(position) {
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
            kTcState2(position+1);
          break; 
         default: 
        }       
    });
}


function kTcState5(position) { 
    $("#hasil").text(angka1+"C");
    swal("Berhasil", "Proses perhitungan suhu Celcius Ke Kalvin telah selesai", "success");
}

function kTcState6(position) { 
    $("#hasil").text(angka1+"C");
    swal("Berhasil", "Proses perhitungan suhu Celcius Ke Kalvin telah selesai", "success");
}