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

function state0(position) {
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
            state0(position+1);
          break;
         case "B":
            value.text("1"); 
            state1(position);
          break;
         default: 
        }       
    });
}

function state1(position) {
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
         case "1":
            value.text("1"); 
            state1(position-1); 
          break;
         case "0":
             value.text("0"); 
            state1(position-1);
          break;
         case "B":
            value.text("B"); 
            state2(position+1);
          break;
         default: 
        }       
    });
}


function state2(position) {
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
            value.text("X"); 
            state3(position+1);
          break;
         case "1":
            value.text("1"); 
            state5(position+1);
          break;
         default: 
        }       
    });
}



function state3(position) {
    console.log(3);
    var value = $("#item-"+position);
    console.log(value.text()+"MASUK");
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
         case "1": 
            value.text("1"); 
            state3(position+1);
          break;
         case "0":
            value.text("0"); 
            state3(position+1);
          break;
         case "B":
            value.text("0"); 
            state4(position);
          break;
         default: 
        }      
    });
}


function state4(position) {
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
            value.text("0"); 
            state4(position-1);
          break;
         case "1":
            value.text("1"); 
            state4(position-1);
          break;
         case "X":
            value.text("X"); 
            state2(position+1);
          break;
         default: 
        }       
    });
}

function state5(position) {
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
            state5(position+1);
          break;
         case "B":
            value.text("1"); 
            state7(position-1);
          break; 
         default: 
        }        
    });
}

function state6(position) {
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
         case "1": 
            value.text("1"); 
            state6(position-1);
          break;
         case "X":
            value.text("X"); 
            state6(position-1);
          break; 
         case "0":
            value.text("0"); 
            state6(position-1);
          break; 
         case "B":
            value.text("B"); 
            state16(position+1);
          break; 
         default: 
        }         
    });
}

function state7(position) {
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
         case "1": 
            value.text("1"); 
            state7(position-1);
          break;
         case "0":
            value.text("0"); 
            state7(position-1);
          break; 
         case "X":
            value.text("0"); 
            state7(position-1);
          break; 
         case "B":
            value.text("B"); 
            state8(position+1);
          break; 
         default: 
        }          
    });
}


function state8(position) {
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
            value.text("B"); 
            state9(position+1);
          break;  
         default: 
        }           
    });
}


function state9(position) {
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
            state10(position+1);
          break; 
         case "1": 
            value.text("1"); 
            state6(position-1);
          break; 
         default: 
        }   
    });
}


function state10(position) {
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
            state10(position+1);
          break; 
         case "1": 
            value.text("1"); 
            state11(position+1);
          break; 
         default: 
        }   
    });
}


function state11(position) {
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
         case "0":
            value.text("X"); 
            state12(position+1);
          break;  
         case "1": 
            value.text("1"); 
            state14(position-1);
          break;
         default: 
        }   
    });
}


function state12(position) {
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
         case "1": 
            value.text("1"); 
            state12(position+1);
          break;
         case "0":
            value.text("0"); 
            state12(position+1);
          break;  
         case "B":
            value.text("0"); 
            state13(position);
          break; 
         default: 
        }   
    });
}

function state13(position) {
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
         case "1": 
            value.text("1"); 
            state13(position-1);
          break;
         case "0":
            value.text("0"); 
            state13(position-1);
          break; 
         case "X":
            value.text("X"); 
            state11(position+1);
          break;  
         default: 
        }   
    });
}

function state14(position) {
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
         case "X":
            value.text("0"); 
            state14(position-1);
          break;  
         case "1": 
            value.text("1"); 
            state15(position-1);
          break; 
         default: 
        }   
    });
}

function state15(position) {
    console.log(15);
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
         case "1": 
            value.text("0"); 
            state15(position-1);
          break;
         case "0":
            value.text("0"); 
            state15(position-1);
          break; 
         case "X":
            value.text("X"); 
            state9(position+1);
          break;  
         default: 
        }   
    });
}

function state16(position) {
    console.log(16);
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
            value.text("B"); 
            state17(position+1);
          break;  
         case "1": 
            value.text("B"); 
            state25(position+1);
          break; 
         default: 
        }   
    });
}

function state17(position) {
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
         case "X":
            value.text("X"); 
            state19(position+1);
          break; 
         case "1": 
            value.text("B"); 
            state18(position+1);
          break;
         case "0":
            value.text("B"); 
            state18(position+1);
          break;  
         default: 
        }   
    });
}

function state18(position) {
    console.log(18);
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
            state18(position+1);
          break; 
         case "X":
            value.text("X"); 
            state22(position+1);
          break; 
         case "1": 
            value.text("B"); 
            state24(position);
          break; 
         default: 
        }   
    });
}

function state19(position) {
    console.log(19);
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
            state19(position+1);
          break; 
         case "X":
            value.text("X"); 
            state19(position+1);
          break; 
         case "1": 
            value.text("1"); 
            state20(position+1);
          break; 
         default: 
        }   
    });
}

function state20(position) {
    console.log(20);
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
            value.text("X"); 
            state20(position+1);
          break; 
         case "0":
            value.text("0"); 
            state20(position+1);
          break; 
         case "1": 
            value.text("1"); 
            state21(position-1);
          break; 
         default: 
        }   
    });
}

function state21(position) {
    console.log(21);
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
            value.text("X"); 
            state21(position-1);
          break; 
         case "0":
            value.text("X"); 
            state6(position-1);
          break; 
         case "1": 
            value.text("X"); 
            state6(position-1);
          break; 
         default: 
        }   
    });
}

function state22(position) {
    console.log(22);
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
            value.text("X"); 
            state22(position+1);
          break; 
         case "1": 
            value.text("1"); 
            state22(position+1);
          break;
         case "0":
            value.text("0"); 
            state22(position+1);
          break; 
         case "B":
            value.text("1"); 
            state23(position-1);
          break; 
         default: 
        }   
    });
}

function state23(position) {
    console.log(23);
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
         case "1": 
            value.text("1"); 
            state23(position-1);
          break;
         case "0":
            value.text("0"); 
            state23(position-1);
          break; 
         case "X":
            value.text("0"); 
            state23(position+1);
          break; 
         case "B":
            value.text("B"); 
            state9(position+1);
          break; 
         default: 
        }   
    });
}



function state24(position) {
    $("#hasil").text(factorial(angka1));
    swal("Berhasil", "Proses faktorial telah selesai", "success");
}

function state25(position) {
    console.log(25);
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
            state25(position+1);
          break;  
         case "1": 
            value.text("B"); 
            state25(position+1);
          break;
         case "B":
            value.text("B"); 
            state24(position);
          break; 
         default: 
        }   
    });
}