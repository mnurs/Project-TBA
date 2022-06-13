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

    var a = parseInt(document.getElementById("bil-1").value);

    if(isNaN(a)){
        swal("error","Input tidak valid", "error");
        return;
    }

    if (a < 0) {
        swal("error","Input tidak valid", "error");
    }

    
    if(a == 0){
        forCreateLi(1, "B");
        forCreateLi(1, "B");  
        forCreateLi(1, "0");
        state24(1);
    }else{
        forCreateLi(1, "B");
        forCreateLi(a, "0");  
        forCreateLi(1, "B");
        state0(1);    
    }
    

}

function state0(position) {
    console.log(0);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,R");
            state0(position+1);
        }
        else if(value.innerHTML == "B"){
            value.innerHTML = "1";
            console.log("B/1,S");
            state1(position);
        }
    });
}

function state1(position) {
    console.log(1);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,L");
            state1(position-1);
        }
        else if(value.innerHTML == "0"){
             value.innerHTML = "0";
            console.log("0/0,L");
            state1(position-1);
        }else if(value.innerHTML == "B"){
            value.innerHTML = "B";
            console.log("B/B,R");
            state2(position+1);
        }
    });
}


function state2(position) {
    console.log(2);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "0"){
            value.innerHTML = "X";
            console.log("0/X,R");
            state3(position+1);
        }
        else if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,R");
            state5(position+1);
        }
    });
}



function state3(position) {
    console.log(3);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,R");
            state3(position+1);
        }
        else if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,R");
            state3(position+1);
        } else if(value.innerHTML == "B"){
            value.innerHTML = "0";
            console.log("0/0,S");
            state4(position);
        }
    });
}


function state4(position) {
    console.log(4);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,L");
            state4(position-1);
        }
        else if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,L");
            state4(position-1);
        }else if(value.innerHTML == "X"){
            value.innerHTML = "X";
            console.log("X/X,R");
            state2(position+1);
        }
    });
}

function state5(position) {
    console.log(5);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,R");
            state5(position+1);
        }
        else if(value.innerHTML == "B"){
            value.innerHTML = "1";
            console.log("B/1,L");
            state7(position-1);
        }
    });
}

function state6(position) {
    console.log(6);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,L");
            state6(position-1);
        }
        else if(value.innerHTML == "X"){
            value.innerHTML = "X";
            console.log("X/X,L");
            state6(position-1);
        }
        else if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,L");
            state6(position-1);
        }
        else if(value.innerHTML == "B"){
            value.innerHTML = "B";
            console.log("B/B,R");
            state16(position+1);
        }
    });
}

function state7(position) {
    console.log(7);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,L");
            state7(position-1);
        }
        else if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,L");
            state7(position-1);
        }
        else if(value.innerHTML == "X"){
            value.innerHTML = "0";
            console.log("X/0,L");
            state7(position-1);
        }
        else if(value.innerHTML == "B"){
            value.innerHTML = "B";
            console.log("B/B,R");
            state8(position+1);
        }
    });
}


function state8(position) {
    console.log(8);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "0"){
            value.innerHTML = "B";
            console.log("0/B,R");
            state9(position+1);
        } 
    });
}


function state9(position) {
    console.log(9);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "0"){
            value.innerHTML = "X";
            console.log("0/X,R");
            state10(position+1);
        }else if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,L");
            state6(position-1);
        } 
    });
}


function state10(position) {
    console.log(10);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,R");
            state10(position+1);
        }else if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,R");
            state11(position+1);
        } 
    });
}


function state11(position) {
    console.log(11);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "0"){
            value.innerHTML = "X";
            console.log("0/X,R");
            state12(position+1);
        }else if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,L");
            state14(position-1);
        } 
    });
}


function state12(position) {
    console.log(12);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,R");
            state12(position+1);
        }else if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,R");
            state12(position+1);
        }else if(value.innerHTML == "B"){
            value.innerHTML = "0";
            console.log("B/0,S");
            state13(position);
        } 
    });
}

function state13(position) {
    console.log(13);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,L");
            state13(position-1);
        }else if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,L");
            state13(position-1);
        }else if(value.innerHTML == "X"){
            value.innerHTML = "X";
            console.log("X/X,R");
            state11(position+1);
        } 
    });
}

function state14(position) {
    console.log(14);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "X"){
            value.innerHTML = "0";
            console.log("X/0,L");
            state14(position-1);
        }else if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,L");
            state15(position-1);
        }
    });
}

function state15(position) {
    console.log(15);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "1"){
            value.innerHTML = "0";
            console.log("1/0,L");
            state15(position-1);
        }else if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,L");
            state15(position-1);
        }else if(value.innerHTML == "X"){
            value.innerHTML = "X";
            console.log("X/X,R");
            state9(position+1);
        }
    });
}

function state16(position) {
    console.log(16);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "X"){
            value.innerHTML = "B";
            console.log("X/B,R");
            state17(position+1);
        }else if(value.innerHTML == "1"){
            value.innerHTML = "B";
            console.log("1/B,R");
            state25(position+1);
        }
    });
}

function state17(position) {
    console.log(17);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "X"){
            value.innerHTML = "X";
            console.log("X/X,R");
            state19(position+1);
        }else if(value.innerHTML == "1"){
            value.innerHTML = "B";
            console.log("1/B,R");
            state18(position+1);
        }else if(value.innerHTML == "0"){
            value.innerHTML = "B";
            console.log("0/B,R");
            state18(position+1);
        }
    });
}

function state18(position) {
    console.log(18);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "0"){
            value.innerHTML = "B";
            console.log("0/B,R");
            state18(position+1);
        }else if(value.innerHTML == "X"){
            value.innerHTML = "X";
            console.log("X/X,R");
            state22(position+1);
        }else if(value.innerHTML == "1"){
            value.innerHTML = "B";
            console.log("1/B,S");
            state24(position);
        }
    });
}

function state19(position) {
    console.log(19);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,R");
            state19(position+1);
        }else if(value.innerHTML == "X"){
            value.innerHTML = "X";
            console.log("X/X,R");
            state19(position+1);
        }else if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,R");
            state20(position+1);
        }
    });
}

function state20(position) {
    console.log(20);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "X"){
            value.innerHTML = "X";
            console.log("X/X,R");
            state20(position+1);
        }
        else if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,R");
            state20(position+1);
        }else if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,L");
            state21(position-1);
        }
    });
}

function state21(position) {
    console.log(21);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "X"){
            value.innerHTML = "X";
            console.log("X/X,L");
            state21(position-1);
        }else if(value.innerHTML == "0"){
            value.innerHTML = "X";
            console.log("0/X,L");
            state6(position-1);
        }else if(value.innerHTML == "1"){
            value.innerHTML = "X";
            console.log("1/X,L");
            state6(position-1);
        }
    });
}

function state22(position) {
    console.log(22);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "X"){
            value.innerHTML = "X";
            console.log("X/X,R");
            state22(position+1);
        }else if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,R");
            state22(position+1);
        }else if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,R");
            state22(position+1);
        }else if(value.innerHTML == "B"){
            value.innerHTML = "1";
            console.log("B/1,L");
            state23(position-1);
        }
    });
}

function state23(position) {
    console.log(23);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "1"){
            value.innerHTML = "1";
            console.log("1/1,L");
            state23(position-1);
        }
        else if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,L");
            state23(position-1);
        }else if(value.innerHTML == "X"){
            value.innerHTML = "0";
            console.log("X/0,R");
            state23(position+1);
        }else if(value.innerHTML == "B"){
            value.innerHTML = "B";
            console.log("B/1,R");
            state9(position+1);
        }
    });
}



function state24(position) {
    swal("Berhasil", "Proses faktorial telah selesai", "success");
}

function state25(position) {
    console.log(25);
    var value = document.getElementById("item-"+position);
    if(value != null){ 
        value.classList.add("bg-dark");
    }else{
        forCreateLi(1, "B");
        var value = document.getElementById("item-"+position);
        value.classList.add("bg-dark");
    } 
    sleep(sleepTime).then(() => {
        value.classList.remove("bg-dark");
        if(value.innerHTML == "0"){
            value.innerHTML = "0";
            console.log("0/0,R");
            state25(position+1);
        }else if(value.innerHTML == "1"){
            value.innerHTML = "B";
            console.log("1/B,R");
            state25(position+1);
        }else if(value.innerHTML == "B"){
            value.innerHTML = "B";
            console.log("B/B,S");
            state24(position);
        }
    });
}