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

function generateFaktorialMulti(){
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
        loopCreateTape1(1, "B");
        loopCreateTape1(1, "B");  
        loopCreateTape1(1, "0");


        loopCreateTape2(1, "B");
        loopCreateTape2(1, "B");  
        loopCreateTape2(1, "B");

        loopCreateTape3(1, "B");
        loopCreateTape3(1, "B");  
        loopCreateTape3(1, "B");
        state24(1);
    }else{
        loopCreateTape1(factorial(angka1), "B");
        loopCreateTape1(angka1, "0");  
        loopCreateTape1(1, "1");  
        loopCreateTape1(1, "B");

        loopCreateTape2(factorial(angka1), "B");
        loopCreateTape2(angka1, "B");  
        loopCreateTape2(1, "B"); 
        loopCreateTape2(1, "B"); 

        loopCreateTape3(factorial(angka1), "B");
        loopCreateTape3(angka1, "B");  
        loopCreateTape3(1, "B"); 
        loopCreateTape3(1, "B");

        faktorialMultiState0(factorial(angka1),factorial(angka1),factorial(angka1));    
    } 
}

function faktorialMultiState0(position1,position2,position3) {
    var value1 = $("#item1-"+position1);  
    var value2 = $("#item2-"+position2); 
    var value3 = $("#item3-"+position3);  
    console.log(value1.text() + " " + value2.text() + " " + value3.text());
    if(value1.text() != null && value1.text() != ""){ 
        value1.addClass("bg-dark");
    }else{
        loopCreateTape1(1, "B");
        var value1 = $("#item1-"+position1);
        value1.addClass("bg-dark");
    }  

    if(value2.text() != null && value2.text() != ""){ 
        value2.addClass("bg-dark");
    }else{
        loopCreateTape2(1, "B");
        var value2 = $("#item2-"+position2);
        value2.addClass("bg-dark");
    }  

    if(value3.text() != null && value3.text() != ""){ 
        value3.addClass("bg-dark");
    }else{
        loopCreateTape3(1, "B");
        var value3 = $("#item3-"+position3);
        value3.addClass("bg-dark");
    } 

    waktu(waktuPindah).then(() => {
        value1.removeClass("bg-dark"); 
        value2.removeClass("bg-dark");
        value3.removeClass("bg-dark");
        if(value1.text() == "0" && value2.text() == "B" && value3.text() == "B"){
            value1.text("0"); 
            value2.text("0"); 
            value3.text("B"); 
            faktorialMultiState0(position1+1,position2+1,position3);
        } else if(value1.text() == "1" && value2.text() == "B" && value3.text() == "B"){
            value1.text("B"); 
            value2.text("B"); 
            value3.text("B"); 
            faktorialMultiState1(position1-1,position2-1,position3);
        }         
    });
}


function faktorialMultiState1(position1,position2,position3) {
    var value1 = $("#item1-"+position1);  
    var value2 = $("#item2-"+position2); 
    var value3 = $("#item3-"+position3);  
    console.log(value1.text() + " " + value2.text() + " " + value3.text());
    if(value1.text() != null && value1.text() != ""){ 
        value1.addClass("bg-dark");
    }else{
        loopCreateTape1(1, "B");
        var value1 = $("#item1-"+position1);
        value1.addClass("bg-dark");
    }  

    if(value2.text() != null && value2.text() != ""){ 
        value2.addClass("bg-dark");
    }else{
        loopCreateTape2(1, "B");
        var value2 = $("#item2-"+position2);
        value2.addClass("bg-dark");
    }  

    if(value3.text() != null && value3.text() != ""){ 
        value3.addClass("bg-dark");
    }else{
        loopCreateTape3(1, "B");
        var value3 = $("#item3-"+position3);
        value3.addClass("bg-dark");
    } 

    waktu(waktuPindah).then(() => {
        value1.removeClass("bg-dark"); 
        value2.removeClass("bg-dark");
        value3.removeClass("bg-dark");
        if(value1.text() == "0" && value2.text() == "0" && value3.text() == "B"){
            value1.text("0"); 
            value2.text("B"); 
            value3.text("B"); 
            faktorialMultiState2(position1,position2-1,position3+1);
        } else if(value1.text() == "B" && value2.text() == "B" && value3.text() == "B"){
            value1.text("0"); 
            value2.text("B"); 
            value3.text("B"); 
            faktorialMultiState2(position1,position2,position3);
        }          
    });
}



function faktorialMultiState2(position1,position2,position3) {
    var value1 = $("#item1-"+position1);  
    var value2 = $("#item2-"+position2); 
    var value3 = $("#item3-"+position3);  
    console.log(value1.text() + " " + value2.text() + " " + value3.text());
    if(value1.text() != null && value1.text() != ""){ 
        value1.addClass("bg-dark");
    }else{
        loopCreateTape1(1, "B");
        var value1 = $("#item1-"+position1);
        value1.addClass("bg-dark");
    }  

    if(value2.text() != null && value2.text() != ""){ 
        value2.addClass("bg-dark");
    }else{
        loopCreateTape2(1, "B");
        var value2 = $("#item2-"+position2);
        value2.addClass("bg-dark");
    }  

    if(value3.text() != null && value3.text() != ""){ 
        value3.addClass("bg-dark");
    }else{
        loopCreateTape3(1, "B");
        var value3 = $("#item3-"+position3);
        value3.addClass("bg-dark");
    } 

    waktu(waktuPindah).then(() => {
        value1.removeClass("bg-dark"); 
        value2.removeClass("bg-dark");
        value3.removeClass("bg-dark");
        if(value1.text() == "0" && value2.text() == "0" && value3.text() == "B"){
            value1.text("0"); 
            value2.text("0"); 
            value3.text("0"); 
            faktorialMultiState2(position1-1,position2,position3+1);
        } else if(value1.text() == "0" && value2.text() == "0" && value3.text() == "0"){
            value1.text("0"); 
            value2.text("0"); 
            value3.text("0"); 
            faktorialMultiState2(position1-1,position2,position3+1);
        } else if(value1.text() == "B" && value2.text() == "0" && value3.text() == "B"){
            value1.text("B"); 
            value2.text("0"); 
            value3.text("B"); 
            faktorialMultiState3(position1+1,position2-1,position3);
        }  else if(value1.text() == "0" && value2.text() == "B" && value3.text() == "B"){
            value1.text("0"); 
            value2.text("B"); 
            value3.text("B"); 
            faktorialMultiState7(position1,position2+1,position3);
        }          
    });
}


function faktorialMultiState3(position1,position2,position3) {
    var value1 = $("#item1-"+position1);  
    var value2 = $("#item2-"+position2); 
    var value3 = $("#item3-"+position3);  
    console.log(value1.text() + " " + value2.text() + " " + value3.text());
    if(value1.text() != null && value1.text() != ""){ 
        value1.addClass("bg-dark");
    }else{
        loopCreateTape1(1, "B");
        var value1 = $("#item1-"+position1);
        value1.addClass("bg-dark");
    }  

    if(value2.text() != null && value2.text() != ""){ 
        value2.addClass("bg-dark");
    }else{
        loopCreateTape2(1, "B");
        var value2 = $("#item2-"+position2);
        value2.addClass("bg-dark");
    }  

    if(value3.text() != null && value3.text() != ""){ 
        value3.addClass("bg-dark");
    }else{
        loopCreateTape3(1, "B");
        var value3 = $("#item3-"+position3);
        value3.addClass("bg-dark");
    } 

    waktu(waktuPindah).then(() => {
        value1.removeClass("bg-dark"); 
        value2.removeClass("bg-dark");
        value3.removeClass("bg-dark");
        if(value1.text() == "0" && value2.text() == "0" && value3.text() == "B"){
            value1.text("0"); 
            value2.text("0"); 
            value3.text("0"); 
            console.log("faktorialMultiState3 "+ value1.text() + " " + value2.text() + " " + value3.text());
            faktorialMultiState3(position1+1,position2,position3+1);
        } else if(value1.text() == "0" && value2.text() == "0" && value3.text() == "0"){
            value1.text("0"); 
            value2.text("0"); 
            value3.text("0"); 
            console.log("faktorialMultiState31"+ value1.text() + " " + value2.text() + " " + value3.text());
            faktorialMultiState3(position1+1,position2,position3+1);
        } else if(value1.text() == "B" && value2.text() == "0" && value3.text() == "B"){
            value1.text("B"); 
            value2.text("0"); 
            value3.text("B"); 
            console.log("faktorialMultiState32");
            faktorialMultiState2(position1-1,position2-1,position3);
        } else if(value1.text() == "0" && value2.text() == "B" && value3.text() == "B"){
            value1.text("0"); 
            value2.text("B"); 
            value3.text("B"); 
            console.log("faktorialMultiState33");
            faktorialMultiState4(position1,position2+1,position3);
        }               
    });
}

function faktorialMultiState4(position1,position2,position3) {
    var value1 = $("#item1-"+position1);  
    var value2 = $("#item2-"+position2); 
    var value3 = $("#item3-"+position3);  
    console.log(value1.text() + " " + value2.text() + " " + value3.text());
    if(value1.text() != null && value1.text() != ""){ 
        value1.addClass("bg-dark");
    }else{
        loopCreateTape1(1, "B");
        var value1 = $("#item1-"+position1);
        value1.addClass("bg-dark");
    }  

    if(value2.text() != null && value2.text() != ""){ 
        value2.addClass("bg-dark");
    }else{
        loopCreateTape2(1, "B");
        var value2 = $("#item2-"+position2);
        value2.addClass("bg-dark");
    }  

    if(value3.text() != null && value3.text() != ""){ 
        value3.addClass("bg-dark");
    }else{
        loopCreateTape3(1, "B");
        var value3 = $("#item3-"+position3);
        value3.addClass("bg-dark");
    } 

    waktu(waktuPindah).then(() => {
        value1.removeClass("bg-dark"); 
        value2.removeClass("bg-dark");
        value3.removeClass("bg-dark");
        if(value1.text() == "0" && value2.text() == "0" && value3.text() == "B"){
            value1.text("0"); 
            value2.text("B"); 
            value3.text("B"); 
            faktorialMultiState5(position1,position2+1,position3-1);
        }         
    });
}


function faktorialMultiState5(position1,position2,position3) {
    var value1 = $("#item1-"+position1);  
    var value2 = $("#item2-"+position2); 
    var value3 = $("#item3-"+position3);  
    console.log(value1.text() + " " + value2.text() + " " + value3.text());
    if(value1.text() != null && value1.text() != ""){ 
        value1.addClass("bg-dark");
    }else{
        loopCreateTape1(1, "B");
        var value1 = $("#item1-"+position1);
        value1.addClass("bg-dark");
    }  

    if(value2.text() != null && value2.text() != ""){ 
        value2.addClass("bg-dark");
    }else{
        loopCreateTape2(1, "B");
        var value2 = $("#item2-"+position2);
        value2.addClass("bg-dark");
    }  

    if(value3.text() != null && value3.text() != ""){ 
        value3.addClass("bg-dark");
    }else{
        loopCreateTape3(1, "B");
        var value3 = $("#item3-"+position3);
        value3.addClass("bg-dark");
    } 

    waktu(waktuPindah).then(() => {
        value1.removeClass("bg-dark"); 
        value2.removeClass("bg-dark");
        value3.removeClass("bg-dark");
        if(value1.text() == "0" && value2.text() == "0" && value3.text() == "0"){
            value1.text("0"); 
            value2.text("0"); 
            value3.text("0"); 
            faktorialMultiState5(position1+1,position2,position3-1);
        }else if(value1.text() == "B" && value2.text() == "0" && value3.text() == "0"){
            value1.text("0"); 
            value2.text("0"); 
            value3.text("0"); 
            faktorialMultiState5(position1+1,position2,position3-1);
        }  else if(value1.text() == "B" && value2.text() == "0" && value3.text() == "B"){
            value1.text("B"); 
            value2.text("0"); 
            value3.text("B"); 
            faktorialMultiState6(position1-1,position2+1,position3);
        } else if(value1.text() == "0" && value2.text() == "B" && value3.text() == "0"){
            value1.text("0"); 
            value2.text("B"); 
            value3.text("0"); 
            faktorialMultiState10(position1,position2,position3);
        }           
    });
}

function faktorialMultiState6(position1,position2,position3) {
    var value1 = $("#item1-"+position1);  
    var value2 = $("#item2-"+position2); 
    var value3 = $("#item3-"+position3);  
    console.log(value1.text() + " " + value2.text() + " " + value3.text());
    if(value1.text() != null && value1.text() != ""){ 
        value1.addClass("bg-dark");
    }else{
        loopCreateTape1(1, "B");
        var value1 = $("#item1-"+position1);
        value1.addClass("bg-dark");
    }  

    if(value2.text() != null && value2.text() != ""){ 
        value2.addClass("bg-dark");
    }else{
        loopCreateTape2(1, "B");
        var value2 = $("#item2-"+position2);
        value2.addClass("bg-dark");
    }  

    if(value3.text() != null && value3.text() != ""){ 
        value3.addClass("bg-dark");
    }else{
        loopCreateTape3(1, "B");
        var value3 = $("#item3-"+position3);
        value3.addClass("bg-dark");
    } 

    waktu(waktuPindah).then(() => {
        value1.removeClass("bg-dark"); 
        value2.removeClass("bg-dark");
        value3.removeClass("bg-dark");
        if(value1.text() == "0" && value2.text() == "0" && value3.text() == "B"){
            value1.text("0"); 
            value2.text("0"); 
            value3.text("B"); 
            faktorialMultiState6(position1,position2+1,position3);
        }else if(value1.text() == "0" && value2.text() == "B" && value3.text() == "B"){
            value1.text("0"); 
            value2.text("B"); 
            value3.text("B"); 
            faktorialMultiState2(position1,position2-1,position3+1);
        }          
    });
}


function faktorialMultiState7(position1,position2,position3) {
    var value1 = $("#item1-"+position1);  
    var value2 = $("#item2-"+position2); 
    var value3 = $("#item3-"+position3);  
    console.log(value1.text() + " " + value2.text() + " " + value3.text());
    if(value1.text() != null && value1.text() != ""){ 
        value1.addClass("bg-dark");
    }else{
        loopCreateTape1(1, "B");
        var value1 = $("#item1-"+position1);
        value1.addClass("bg-dark");
    }  

    if(value2.text() != null && value2.text() != ""){ 
        value2.addClass("bg-dark");
    }else{
        loopCreateTape2(1, "B");
        var value2 = $("#item2-"+position2);
        value2.addClass("bg-dark");
    }  

    if(value3.text() != null && value3.text() != ""){ 
        value3.addClass("bg-dark");
    }else{
        loopCreateTape3(1, "B");
        var value3 = $("#item3-"+position3);
        value3.addClass("bg-dark");
    } 

    waktu(waktuPindah).then(() => {
        value1.removeClass("bg-dark"); 
        value2.removeClass("bg-dark");
        value3.removeClass("bg-dark");
        if(value1.text() == "0" && value2.text() == "0" && value3.text() == "B"){
            value1.text("0"); 
            value2.text("B"); 
            value3.text("B"); 
            faktorialMultiState8(position1,position2+1,position3-1);
        }         
    });
}


function faktorialMultiState8(position1,position2,position3) {
    var value1 = $("#item1-"+position1);  
    var value2 = $("#item2-"+position2); 
    var value3 = $("#item3-"+position3);  
    console.log(value1.text() + " " + value2.text() + " " + value3.text());
    console.log(position1);
    if(value1.text() != null && value1.text() != ""){ 
        value1.addClass("bg-dark");
    }else{
        loopCreateTape1(1, "B");
        var value1 = $("#item1-"+position1);
        value1.addClass("bg-dark");
    }  

    if(value2.text() != null && value2.text() != ""){ 
        value2.addClass("bg-dark");
    }else{
        loopCreateTape2(1, "B");
        var value2 = $("#item2-"+position2);
        value2.addClass("bg-dark");
    }  

    if(value3.text() != null && value3.text() != ""){ 
        value3.addClass("bg-dark");
    }else{
        loopCreateTape3(1, "B");
        var value3 = $("#item3-"+position3);
        value3.addClass("bg-dark");
    } 

    waktu(waktuPindah).then(() => {
        value1.removeClass("bg-dark"); 
        value2.removeClass("bg-dark");
        value3.removeClass("bg-dark");
        if(value1.text() == "0" && value2.text() == "0" && value3.text() == "0"){
            value1.text("0"); 
            value2.text("0"); 
            value3.text("0"); 
            faktorialMultiState8(position1-1,position2,position3-1);
        }  else  if(value1.text() == "B" && value2.text() == "0" && value3.text() == "0"){
            value1.text("0"); 
            value2.text("0"); 
            value3.text("0"); 
            faktorialMultiState8(position1-1,position2,position3-1);
        } else  if(value1.text() == "B" && value2.text() == "0" && value3.text() == "B"){
            value1.text("B"); 
            value2.text("0"); 
            value3.text("B"); 
            faktorialMultiState9(position1+1,position2+1,position3);
        } else  if(value1.text() == "0" && value2.text() == "B" && value3.text() == "0"){
            value1.text("0"); 
            value2.text("B"); 
            value3.text("0"); 
            faktorialMultiState10(position1,position2,position3);
        }      
    });
}

function faktorialMultiState9(position1,position2,position3) {
    var value1 = $("#item1-"+position1);  
    var value2 = $("#item2-"+position2); 
    var value3 = $("#item3-"+position3);  
    console.log(value1.text() + " " + value2.text() + " " + value3.text());
    if(value1.text() != null && value1.text() != ""){ 
        value1.addClass("bg-dark");
    }else{
        loopCreateTape1(1, "B");
        var value1 = $("#item1-"+position1);
        value1.addClass("bg-dark");
    }  

    if(value2.text() != null && value2.text() != ""){ 
        value2.addClass("bg-dark");
    }else{
        loopCreateTape2(1, "B");
        var value2 = $("#item2-"+position2);
        value2.addClass("bg-dark");
    }  

    if(value3.text() != null && value3.text() != ""){ 
        value3.addClass("bg-dark");
    }else{
        loopCreateTape3(1, "B");
        var value3 = $("#item3-"+position3);
        value3.addClass("bg-dark");
    } 

    waktu(waktuPindah).then(() => {
        value1.removeClass("bg-dark"); 
        value2.removeClass("bg-dark");
        value3.removeClass("bg-dark");
        if(value1.text() == "0" && value2.text() == "0" && value3.text() == "B"){
            value1.text("0"); 
            value2.text("0"); 
            value3.text("B"); 
            faktorialMultiState9(position1,position2+1,position3);
        }  else  if(value1.text() == "0" && value2.text() == "B" && value3.text() == "B"){
            value1.text("0"); 
            value2.text("B"); 
            value3.text("B"); 
            faktorialMultiState3(position1,position2-1,position3+1);
        }         
    });
}


function faktorialMultiState10(position1,position2,position3) {
    console.log(angka1);
    $("#hasil").text(factorial(angka1));
    swal("Berhasil", "Proses penjumlahan telah selesai", "success");
}