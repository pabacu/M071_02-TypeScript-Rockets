"use strict";
var rockets = new Array();
var aAudio = new Audio('../assets/sound/sound_01.wav');
//var bAudio = new Audio('b.mp3');
function createRocket(rocket_number) {
    var rocket;
    switch (rocket_number) {
        case 1:
            if (!exists_rocket('32WESSDS')) {
                rocket = new Rocket('32WESSDS');
                //create rocket motor
                //10,30,80
                rocket.addMotor("10,30,80");
                rockets.push(rocket);
                //(document.getElementById('btnrestart') as HTMLButtonElement).classList.remove('d-block');
                show_rocket(rocket);
                show_msg("Rocket#1", "Prepare to takeoff");
            }
            else
                alert("The Rocket#1 already exists!");
            break;
        case 2:
            if (!exists_rocket('LDSFJA32')) {
                rocket = new Rocket('LDSFJA32');
                //create rocket motor
                //30,40,50,50,30,10
                rocket.addMotor("30,40,50,50,30,10");
                rockets.push(rocket);
                show_rocket(rocket);
                show_msg("Rocket#2", "Prepare to takeoff");
            }
            else
                alert("The Rocket#1 already exists!");
            break;
        default:
            //todo: show new form to complete name and rocket motor
            break;
    }
}
function accelerate(idx, kN) {
    var rocket;
    switch (idx) {
        case 1:
            if (exists_rocket('32WESSDS')) {
                rocket = getRocket('32WESSDS');
                rocket.accelerate(kN);
                document.getElementById('info_' + rocket.name).innerHTML = rocket.show_metrics();
            }
            break;
        case 2:
            if (exists_rocket('LDSFJA32')) {
                if (exists_rocket('LDSFJA32')) {
                    rocket = getRocket('LDSFJA32');
                    rocket.accelerate(kN);
                    document.getElementById('info_' + rocket.name).innerHTML = rocket.show_metrics();
                }
            }
            break;
        default:
            //todo: show new form to complete name and rocket motor
            break;
    }
}
function move_rocket(name, power, altitude) {
    var the_rocket = document.getElementById(name);
    set_translate(the_rocket, power);
}
function stars(rocket, accel) {
    return;
}
function getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
function set_translate(e, pix) {
    console.log("top:" + e.offsetTop);
    //e.style.top = (417 - pix) + "px";
    //e.style.top  = 
    e.style.webkitTransform = "translate(" + -pix + "px)";
}
function show_rocket(rocket) {
    myAudioFunction("01");
    document.getElementById(rocket.name).classList.remove('d-none');
}
function show_msg(txtH1, txtH3) {
    document.getElementById('msg').innerHTML = "<h1>" + txtH1 + "</h1>" + "<h3>" + txtH3 + "</h3>";
}
function getRocket(name) {
    var result = false;
    var r;
    rockets.forEach(function (element) {
        if (!result && element.name == name) {
            result = true;
            r = element;
        }
    });
    if (r)
        return r;
}
function exists_rocket(name) {
    var result = false;
    rockets.forEach(function (element) {
        if (!result && element.name == name) {
            result = true;
        }
    });
    return result;
}
function myAudioFunction(letter) {
    if (letter == '01') {
        aAudio.play();
    }
    else if (letter == 'b') {
        //bAudio.play();
    }
}
function restart() {
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('carInfo').innerHTML = '';
    document.getElementById('btnrestart').classList.remove('d-block');
    document.getElementById('btnrestart').classList.add('d-none');
    document.getElementById('formCar').reset();
    document.getElementById('formCar').classList.remove('was-validated');
    document.getElementById('carWheels').reset();
    document.getElementById('carWheels').classList.remove('was-validated');
}
