var angka1 = 0;
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }

function generateFaktorial(){
    reset();

    angka1 = parseInt($("#angka1").val());

    if(isNaN(angka1)){
        swal("error","Input tidak valid", "error");
        return;
    }

    if (angka1 < 0) {
        swal("error","Input tidak valid", "error");
    }

    
    if(angka1 == 0){
        loopCreateTape(1, "B");
        loopCreateTape(1, "B");  
        loopCreateTape(1, "0");
        state24(1);
    }else{
        loopCreateTape(1, "B");
        loopCreateTape(angka1, "0");  
        loopCreateTape(1, "B");
        state0(1);    
    }
    

}

function state0(posisi) {
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
            state0(posisi+1);
          break;
         case "B":
            value.text("1"); 
            state1(posisi);
          break;
         default: 
        }       
    });
}

function state1(posisi) {
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
         case "1":
            value.text("1"); 
            state1(posisi-1); 
          break;
         case "0":
             value.text("0"); 
            state1(posisi-1);
          break;
         case "B":
            value.text("B"); 
            state2(posisi+1);
          break;
         default: 
        }       
    });
}


function state2(posisi) {
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
            state3(posisi+1);
          break;
         case "1":
            value.text("1"); 
            state5(posisi+1);
          break;
         default: 
        }       
    });
}



function state3(posisi) {
    console.log(3);
    var value = $("#item-"+posisi);
    console.log(value.text()+"MASUK");
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
         case "1": 
            value.text("1"); 
            state3(posisi+1);
          break;
         case "0":
            value.text("0"); 
            state3(posisi+1);
          break;
         case "B":
            value.text("0"); 
            state4(posisi);
          break;
         default: 
        }      
    });
}


function state4(posisi) {
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
            state4(posisi-1);
          break;
         case "1":
            value.text("1"); 
            state4(posisi-1);
          break;
         case "X":
            value.text("X"); 
            state2(posisi+1);
          break;
         default: 
        }       
    });
}

function state5(posisi) {
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
            state5(posisi+1);
          break;
         case "B":
            value.text("1"); 
            state7(posisi-1);
          break; 
         default: 
        }        
    });
}

function state6(posisi) {
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
         case "1": 
            value.text("1"); 
            state6(posisi-1);
          break;
         case "X":
            value.text("X"); 
            state6(posisi-1);
          break; 
         case "0":
            value.text("0"); 
            state6(posisi-1);
          break; 
         case "B":
            value.text("B"); 
            state16(posisi+1);
          break; 
         default: 
        }         
    });
}

function state7(posisi) {
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
         case "1": 
            value.text("1"); 
            state7(posisi-1);
          break;
         case "0":
            value.text("0"); 
            state7(posisi-1);
          break; 
         case "X":
            value.text("0"); 
            state7(posisi-1);
          break; 
         case "B":
            value.text("B"); 
            state8(posisi+1);
          break; 
         default: 
        }          
    });
}


function state8(posisi) {
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
            value.text("B"); 
            state9(posisi+1);
          break;  
         default: 
        }           
    });
}


function state9(posisi) {
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
            value.text("X"); 
            state10(posisi+1);
          break; 
         case "1": 
            value.text("1"); 
            state6(posisi-1);
          break; 
         default: 
        }   
    });
}


function state10(posisi) {
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
            value.text("0"); 
            state10(posisi+1);
          break; 
         case "1": 
            value.text("1"); 
            state11(posisi+1);
          break; 
         default: 
        }   
    });
}


function state11(posisi) {
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
            value.text("X"); 
            state12(posisi+1);
          break;  
         case "1": 
            value.text("1"); 
            state14(posisi-1);
          break;
         default: 
        }   
    });
}


function state12(posisi) {
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
         case "1": 
            value.text("1"); 
            state12(posisi+1);
          break;
         case "0":
            value.text("0"); 
            state12(posisi+1);
          break;  
         case "B":
            value.text("0"); 
            state13(posisi);
          break; 
         default: 
        }   
    });
}

function state13(posisi) {
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
         case "1": 
            value.text("1"); 
            state13(posisi-1);
          break;
         case "0":
            value.text("0"); 
            state13(posisi-1);
          break; 
         case "X":
            value.text("X"); 
            state11(posisi+1);
          break;  
         default: 
        }   
    });
}

function state14(posisi) {
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
         case "X":
            value.text("0"); 
            state14(posisi-1);
          break;  
         case "1": 
            value.text("1"); 
            state15(posisi-1);
          break; 
         default: 
        }   
    });
}

function state15(posisi) {
    console.log(15);
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
         case "1": 
            value.text("0"); 
            state15(posisi-1);
          break;
         case "0":
            value.text("0"); 
            state15(posisi-1);
          break; 
         case "X":
            value.text("X"); 
            state9(posisi+1);
          break;  
         default: 
        }   
    });
}

function state16(posisi) {
    console.log(16);
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
            value.text("B"); 
            state17(posisi+1);
          break;  
         case "1": 
            value.text("B"); 
            state25(posisi+1);
          break; 
         default: 
        }   
    });
}

function state17(posisi) {
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
         case "X":
            value.text("X"); 
            state19(posisi+1);
          break; 
         case "1": 
            value.text("B"); 
            state18(posisi+1);
          break;
         case "0":
            value.text("B"); 
            state18(posisi+1);
          break;  
         default: 
        }   
    });
}

function state18(posisi) {
    console.log(18);
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
            value.text("B"); 
            state18(posisi+1);
          break; 
         case "X":
            value.text("X"); 
            state22(posisi+1);
          break; 
         case "1": 
            value.text("B"); 
            state24(posisi);
          break; 
         default: 
        }   
    });
}

function state19(posisi) {
    console.log(19);
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
            state19(posisi+1);
          break; 
         case "X":
            value.text("X"); 
            state19(posisi+1);
          break; 
         case "1": 
            value.text("1"); 
            state20(posisi+1);
          break; 
         default: 
        }   
    });
}

function state20(posisi) {
    console.log(20);
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
            state20(posisi+1);
          break; 
         case "0":
            value.text("0"); 
            state20(posisi+1);
          break; 
         case "1": 
            value.text("1"); 
            state21(posisi-1);
          break; 
         default: 
        }   
    });
}

function state21(posisi) {
    console.log(21);
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
            state21(posisi-1);
          break; 
         case "0":
            value.text("X"); 
            state6(posisi-1);
          break; 
         case "1": 
            value.text("X"); 
            state6(posisi-1);
          break; 
         default: 
        }   
    });
}

function state22(posisi) {
    console.log(22);
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
            state22(posisi+1);
          break; 
         case "1": 
            value.text("1"); 
            state22(posisi+1);
          break;
         case "0":
            value.text("0"); 
            state22(posisi+1);
          break; 
         case "B":
            value.text("1"); 
            state23(posisi-1);
          break; 
         default: 
        }   
    });
}

function state23(posisi) {
    console.log(23);
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
         case "1": 
            value.text("1"); 
            state23(posisi-1);
          break;
         case "0":
            value.text("0"); 
            state23(posisi-1);
          break; 
         case "X":
            value.text("0"); 
            state23(posisi+1);
          break; 
         case "B":
            value.text("B"); 
            state9(posisi+1);
          break; 
         default: 
        }   
    });
}



function state24(posisi) {
    $("#hasil").text(factorial(angka1));
    swal("Berhasil", "Proses faktorial telah selesai", "success");
}

function state25(posisi) {
    console.log(25);
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
            state25(posisi+1);
          break;  
         case "1": 
            value.text("B"); 
            state25(posisi+1);
          break;
         case "B":
            value.text("B"); 
            state24(posisi);
          break; 
         default: 
        }   
    });
}