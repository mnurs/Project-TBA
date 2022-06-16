function generateFaktorial(){
    reset();

    var a = parseInt($("#angka1").val());

    if(isNaN(a)){
        swal("error","Input tidak valid", "error");
        return;
    }

    if (a < 0) {
        swal("error","Input tidak valid", "error");
    }

    
    if(a == 0){
        loopCreateTape(1, "B");
        loopCreateTape(1, "B");  
        loopCreateTape(1, "0");
        state24(1);
    }else{
        loopCreateTape(1, "B");
        loopCreateTape(a, "0");  
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
        if(value.text() == "0"){
            value.text("0");
            console.log("0/0,R 1");
            state0(position+1);
        }
        else if(value.text() == "B"){
            value.text("1");
            console.log("B/1,S");
            state1(position);
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
        if(value.text() == "1"){
            value.text("1");
            console.log("1/1,L");
            state1(position-1);
        }
        else if(value.text() == "0"){
             value.text("0");
            console.log("0/0,L");
            state1(position-1);
        }else if(value.text() == "B"){
            value.text("B");
            console.log("B/B,R");
            state2(position+1);
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
        if(value.text() == "0"){
            value.text("X");
            console.log("0/X,R");
            state3(position+1);
        }
        else if(value.text() == "1"){
            value.text("1");
            console.log("1/1,R");
            state5(position+1);
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
        if(value.text() == "1"){
            value.text("1");
            console.log("1/1,R");
            state3(position+1);
        }
        else if(value.text() == "0"){
            value.text("0");
            console.log("0/0,R");
            state3(position+1);
        } else if(value.text() == "B"){
            value.text("0");
            console.log("0/0,S");
            state4(position);
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
        if(value.text() == "0"){
            value.text("0");
            console.log("0/0,L");
            state4(position-1);
        }
        else if(value.text() == "1"){
            value.text("1");
            console.log("1/1,L");
            state4(position-1);
        }else if(value.text() == "X"){
            value.text("X");
            console.log("X/X,R");
            state2(position+1);
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
        if(value.text() == "0"){
            value.text("0");
            console.log("0/0,R");
            state5(position+1);
        }
        else if(value.text() == "B"){
            value.text("1");
            console.log("B/1,L");
            state7(position-1);
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
        if(value.text() == "1"){
            value.text("1");
            console.log("1/1,L");
            state6(position-1);
        }
        else if(value.text() == "X"){
            value.text("X");
            console.log("X/X,L");
            state6(position-1);
        }
        else if(value.text() == "0"){
            value.text("0");
            console.log("0/0,L");
            state6(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            console.log("B/B,R");
            state16(position+1);
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
        if(value.text() == "1"){
            value.text("1");
            console.log("1/1,L");
            state7(position-1);
        }
        else if(value.text() == "0"){
            value.text("0");
            console.log("0/0,L");
            state7(position-1);
        }
        else if(value.text() == "X"){
            value.text("0");
            console.log("X/0,L");
            state7(position-1);
        }
        else if(value.text() == "B"){
            value.text("B");
            console.log("B/B,R");
            state8(position+1);
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
        if(value.text() == "0"){
            value.text("B");
            console.log("0/B,R");
            state9(position+1);
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
        if(value.text() == "0"){
            value.text("X");
            console.log("0/X,R");
            state10(position+1);
        }else if(value.text() == "1"){
            value.text("1");
            console.log("1/1,L");
            state6(position-1);
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
        if(value.text() == "0"){
            value.text("0");
            console.log("0/0,R");
            state10(position+1);
        }else if(value.text() == "1"){
            value.text("1");
            console.log("1/1,R");
            state11(position+1);
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
        if(value.text() == "0"){
            value.text("X");
            console.log("0/X,R");
            state12(position+1);
        }else if(value.text() == "1"){
            value.text("1");
            console.log("1/1,L");
            state14(position-1);
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
        if(value.text() == "1"){
            value.text("1");
            console.log("1/1,R");
            state12(position+1);
        }else if(value.text() == "0"){
            value.text("0");
            console.log("0/0,R");
            state12(position+1);
        }else if(value.text() == "B"){
            value.text("0");
            console.log("B/0,S");
            state13(position);
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
        if(value.text() == "1"){
            value.text("1");
            console.log("1/1,L");
            state13(position-1);
        }else if(value.text() == "0"){
            value.text("0");
            console.log("0/0,L");
            state13(position-1);
        }else if(value.text() == "X"){
            value.text("X");
            console.log("X/X,R");
            state11(position+1);
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
        if(value.text() == "X"){
            value.text("0");
            console.log("X/0,L");
            state14(position-1);
        }else if(value.text() == "1"){
            value.text("1");
            console.log("1/1,L");
            state15(position-1);
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
        if(value.text() == "1"){
            value.text("0");
            console.log("1/0,L");
            state15(position-1);
        }else if(value.text() == "0"){
            value.text("0");
            console.log("0/0,L");
            state15(position-1);
        }else if(value.text() == "X"){
            value.text("X");
            console.log("X/X,R");
            state9(position+1);
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
        if(value.text() == "X"){
            value.text("B");
            console.log("X/B,R");
            state17(position+1);
        }else if(value.text() == "1"){
            value.text("B");
            console.log("1/B,R");
            state25(position+1);
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
        if(value.text() == "X"){
            value.text("X");
            console.log("X/X,R");
            state19(position+1);
        }else if(value.text() == "1"){
            value.text("B");
            console.log("1/B,R");
            state18(position+1);
        }else if(value.text() == "0"){
            value.text("B");
            console.log("0/B,R");
            state18(position+1);
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
        if(value.text() == "0"){
            value.text("B");
            console.log("0/B,R");
            state18(position+1);
        }else if(value.text() == "X"){
            value.text("X");
            console.log("X/X,R");
            state22(position+1);
        }else if(value.text() == "1"){
            value.text("B");
            console.log("1/B,S");
            state24(position);
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
        if(value.text() == "0"){
            value.text("0");
            console.log("0/0,R");
            state19(position+1);
        }else if(value.text() == "X"){
            value.text("X");
            console.log("X/X,R");
            state19(position+1);
        }else if(value.text() == "1"){
            value.text("1");
            console.log("1/1,R");
            state20(position+1);
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
        if(value.text() == "X"){
            value.text("X");
            console.log("X/X,R");
            state20(position+1);
        }
        else if(value.text() == "0"){
            value.text("0");
            console.log("0/0,R");
            state20(position+1);
        }else if(value.text() == "1"){
            value.text("1");
            console.log("1/1,L");
            state21(position-1);
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
        if(value.text() == "X"){
            value.text("X");
            console.log("X/X,L");
            state21(position-1);
        }else if(value.text() == "0"){
            value.text("X");
            console.log("0/X,L");
            state6(position-1);
        }else if(value.text() == "1"){
            value.text("X");
            console.log("1/X,L");
            state6(position-1);
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
        if(value.text() == "X"){
            value.text("X");
            console.log("X/X,R");
            state22(position+1);
        }else if(value.text() == "1"){
            value.text("1");
            console.log("1/1,R");
            state22(position+1);
        }else if(value.text() == "0"){
            value.text("0");
            console.log("0/0,R");
            state22(position+1);
        }else if(value.text() == "B"){
            value.text("1");
            console.log("B/1,L");
            state23(position-1);
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
        if(value.text() == "1"){
            value.text("1");
            console.log("1/1,L");
            state23(position-1);
        }
        else if(value.text() == "0"){
            value.text("0");
            console.log("0/0,L");
            state23(position-1);
        }else if(value.text() == "X"){
            value.text("0");
            console.log("X/0,R");
            state23(position+1);
        }else if(value.text() == "B"){
            value.text("B");
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
        if(value.text() == "0"){
            value.text("0");
            console.log("0/0,R");
            state25(position+1);
        }else if(value.text() == "1"){
            value.text("B");
            console.log("1/B,R");
            state25(position+1);
        }else if(value.text() == "B"){
            value.text("B");
            console.log("B/B,S");
            state24(position);
        }
    });
}