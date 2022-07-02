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

function kTcState0(posisi) {
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
            kTcState1(posisi+1);
          break; 
         default: 
        }       
    });
}

function kTcState1(posisi) {
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
            kTcState2(posisi+1);
          break;
         case "N":
            value.text("N"); 
            kTcState3(posisi+1);
          break;
         case "B":
            value.text("B"); 
            kTcState4(posisi+1);
          break;
         default: 
        }       
    });
}

function kTcState2(posisi) {
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
            kTcState2(posisi+1);
          break; 
          case "B":
            value.text("B"); 
            kTcState4(posisi+1);
          break; 
         default: 
        }       
    });
}

function kTcState3(posisi) {
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
            kTcState2(posisi+1);
          break; 
         default: 
        }       
    });
}


function kTcState4(posisi) { 
    $("#hasil").text(angka1+"C");
    swal("Berhasil", "Proses perhitungan suhu Celcius Ke Kalvin telah selesai", "success");
} 