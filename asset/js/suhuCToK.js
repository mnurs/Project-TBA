var angka1 = parseInt($("#angka1").val());
function generateCToK(){
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
        cTkState4(1);
    }else{
        loopCreateTape(1, "B");
        loopCreateTape(1,angka1 < 0 ? "N" :"B");  
        loopCreateTape(positifangka1,"0");  
        loopCreateTape(1, "B");
        cTkState0(1);    
    } 

}

function cTkState0(posisi) {
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
            value.text("K"); 
            cTkState1(posisi+1);
          break;
         case "N":
            value.text("K"); 
            cTkState2(posisi+1);
          break;
         case "B":
            value.text("K"); 
            cTkState3(posisi+1);
          break;
         default: 
        }       
    });
}


function cTkState1(posisi) {
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
            cTkState1(posisi+1);
          break; 
          case "B":
            value.text("0"); 
            cTkState3(posisi+1);
          break; 
         default: 
        }       
    });
}

function cTkState2(posisi) {
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
            value.text("N"); 
            cTkState1(posisi+1);
          break; 
         default: 
        }       
    });
}


function cTkState3(posisi) { 
    $("#hasil").text(angka1+"K");
    swal("Berhasil", "Proses perhitungan suhu Celcius Ke Kalvin telah selesai", "success");
}