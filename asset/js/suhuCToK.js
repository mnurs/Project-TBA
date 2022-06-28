function generateCToK(){
    reset();

    var angka1 = parseInt($("#angka1").val());

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

function cTkState0(position) {
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
            value.text("K"); 
            cTkState1(position+1);
          break;
         case "N":
            value.text("K"); 
            cTkState2(position+1);
          break;
         case "B":
            value.text("K"); 
            cTkState4(position+1);
          break;
         default: 
        }       
    });
}


function cTkState1(position) {
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
            cTkState1(position+1);
          break; 
          case "B":
            value.text("0"); 
            cTkState3(position+1);
          break; 
         default: 
        }       
    });
}

function cTkState2(position) {
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
            value.text("N"); 
            cTkState1(position+1);
          break; 
         default: 
        }       
    });
}


function cTkState3(position) { 
    swal("Berhasil", "Proses perhitungan suhu Celcius Ke Kalvin telah selesai", "success");
}

function cTkState4(position) { 
    swal("Berhasil", "Proses perhitungan suhu Celcius Ke Kalvin telah selesai", "success");
}