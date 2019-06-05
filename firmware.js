function addEventListener() {
    //top section
    document.getElementById("ard1").addEventListener("click", arduino, false);
    document.getElementById("ard2").addEventListener("click", arduino2, false);
    document.getElementById("ard3").addEventListener("click", arduino3, false);
    document.getElementById("revE").addEventListener("click", revE, false);
    document.getElementById("revEdual").addEventListener("click", dual, false);
    document.getElementById("revF").addEventListener("click", revf, false);
    document.getElementById("revG").addEventListener("click", revg, false);
    document.getElementById("v4Cool").addEventListener("click", v4Cool, false);

}
//gets RevE download
function revE() {
    const answer = confirm("Please click to download RevE firmware.");

    if (answer) {
        window.location =
            "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V100.zip";
    } else answer = false;
}

//gets RevE Dual download
function dual() {
    const answer = confirm("Please click to download RevE Dual firmware.");

    if (answer) {
        window.location =
            "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V101%20-%20Dual.zip";
    } else answer = false;
}

//gets Rev.F download
function revf() {
    const answer = confirm("Please click to download RevF firmware.");

    if (answer) {
        window.location =
            "https://github.com/MakerGear/m2firmware/archive/AQB3f.zip";
    } else answer = false;
}

function revg() {
    const answer = confirm("Please click to download RevG firmware.");

    if (answer) {
        window.location =
            "http://makergear.wikidot.com/local--files/m2-firmware/m2-RevG-firmware.zip";
    } else answer = false;
}

function v4Cool() {
    const answer = confirm(
        "Please click to download V4 F/G Cooling upgrade firmware."
    );

    if (answer) {
        window.location =
            "http://makergear.wikidot.com/local--files/m2-firmware/V4-RevF%3AG-cooling%20-upgrade.zip";
    } else answer = false;
}

//Gets Arduino 1.5.5 Windows

function arduino() {
    const answer = confirm(
        "Please click to download Arduino 1.5.5.\r\n Contributions are voluntary"
    );

    if (answer) {
        window.location =
            "https://www.arduino.cc/download_handler.php?f=/arduino-1.5.5-r2-windows.zip";
    } else answer = false;
}

//Gets Arduino 1.5.5 MAC

function arduino2() {
    const answer = confirm(
        "Please click to download Arduino 1.5.5.\r\n Contributions are voluntary"
    );

    if (answer) {
        window.location =
            "https://www.arduino.cc/download_handler.php?f=/arduino-1.5.5-macosx.zip";
    } else answer = false;
}

//Gets Arduino 1.5.5 Linux 64 bit

function arduino3() {
    const answer = confirm(
        "Please click to download Arduino 1.5.5.\r\n Contributions are voluntary"
    );

    if (answer) {
        window.location =
            "https://www.arduino.cc/download_handler.php?f=/arduino-1.5.5-linux64.tgz";
    } else answer = false;
}



var step = 1;

function move(direction) {
    if (direction == undefined) {
        console.log("move function called without direction returning");
        return;
    }
    //
    //move forward
    else if (direction == "forward" && step <= 5) {
        step = step + 1;

        if (step <= 5) {
            document.getElementById(step).style.display = "block";
            document.getElementById(step - 1).style.display = "none";
        } else if (direction == "forward" && step > 5) {
            matchConfig();
            step = 5;
        }
    }

    //move back
    else if (direction == "back") {

        if (step <= 1) {

            return;
        } else if ((step = step - 1)) {
            document.getElementById(step).style.display = "block";
            document.getElementById(step + 1).style.display = "none";
        }
    }
    console.log(step);
}



//24v Black Z motor (Rev c and D)
//V4 (single)section:
const v4bm = [0, 0, 1, 0, 0]; //Base Model V4 black_z. zmin
const v4v1 = [0, 0, 1, 0, 1]; //Viki1
const v4v2 = [0, 0, 1, 0, 2]; //Viki2
const v4gt = [0, 0, 1, 0, 3]; //Geetech

//V4 dual section:
const v4dbm = [0, 0, 1, 1, 0]; //V4 Dual Base Model
const v4dv1 = [0, 0, 1, 1, 1]; //Viki1 not supported
const v4dv2 = [0, 0, 1, 1, 2]; //Viki2 not supported
const v4dgt = [0, 0, 1, 1, 3]; // Geetech not supported

//V3b section:
const v3bbm = [0, 0, 0, 2, 0]; //Base model
const v3bv1 = [0, 0, 0, 2, 1]; //Viki1
const v3bv2 = [0, 0, 0, 2, 2]; //Viki2
const v3bgt = [0, 0, 0, 2, 3]; //Geetech

//Silver z motor section
//Silver V3b section:
const sv3bbm = [1, 0, 1, 2, 0]; //Base Model:
const sv3bv1 = [1, 0, 1, 2, 1]; //Viki1
const sv3bv2 = [1, 0, 1, 2, 2]; //Viki2
const sv3bgt = [1, 0, 1, 2, 3]; //Geetech

//Silver V4 section:
const sv4bm = [1, 0, 1, 0, 0]; //Base Model:
const sv4v1 = [1, 0, 1, 0, 1]; //Viki1
const sv4v2 = [1, 0, 1, 0, 2]; //Viki2
const sv4gt = [1, 0, 1, 0, 3]; //Geetech

//V4 Dual section:
const sv4dbm = [1, 0, 1, 1, 0]; //Base Model
const sv4dv1 = [1, 0, 1, 1, 1]; //Viki1 not supported
const sv4dv2 = [1, 0, 1, 1, 2]; //Viki2 not supported
const sv4dgt = [1, 0, 1, 1, 3]; //Geetech not supported

//Rev.E section
//Rev.E section
const revEbm = [0, 0, 0, 0, 0]; //Rev.E Base Model
const revEv1 = [0, 0, 0, 0, 1]; //Viki1
const revEv2 = [0, 0, 0, 0, 2]; //Viki2
const revEgt = [0, 0, 0, 0, 3]; //Geetech

//Rev.E Dual section
const revEdbm = [0, 0, 0, 1, 0];
const revEdv1 = [0, 0, 0, 1, 1];
const revEdv2 = [0, 0, 0, 1, 2];
const revEdgt = [0, 0, 0, 1, 3];

//Rev f section
const revFbm = [0, 0, 0, 3, 0]; //Rev F Firmware
const revFv1 = [0, 0, 0, 3, 1]; //Viki1
const revFv2 = [0, 0, 0, 3, 2]; //Viki2
const revFgt = [0, 0, 0, 3, 3]; //Geetech

//Rev G section
const revGbm = [0, 0, 0, 4, 0]; //Rev G Firmware
const revGv1 = [0, 0, 0, 4, 1]; //Viki1
const revGv2 = [0, 0, 0, 4, 2]; //Viki2
const revGgt = [0, 0, 0, 4, 3]; //Geetech

//Rev H section
const revHbm = [0, 0, 0, 5, 0]; //Rev H Firmware
const revHv1 = [0, 0, 0, 5, 1]; //Viki1
const revHv2 = [0, 0, 0, 5, 2]; //Viki2
const revHgt = [0, 0, 0, 5, 3]; //Geetech

// Nonstandard configs
const sv4Zm = [1, 0, 0, 0, 0]; //Silver,V4,Zmax
const bv3bgt = [0, 0, 1, 2, 3]; //Black,V3b,Geetech

//v4 F/G cooling upgrade
const v4CoolBm = [1, 0, 1, 0, 0]; //Base Model:
const v4Coolv1 = [1, 0, 1, 5, 1]; //Viki1
const v4Coolv2 = [1, 0, 1, 5, 2]; //Viki2
const v4Coolgt = [1, 0, 1, 5, 3]; //Geetech 




//gets user input from selector
function matchConfig() {
    const zmotor = document.getElementById("z_motor");
    let s1 = parseInt(zmotor.selectedIndex);

    const psupply = document.getElementById("p_supply");
    let s2 = parseInt(psupply.selectedIndex);

    const endstop = document.getElementById("z_stop");
    let s3 = parseInt(endstop.selectedIndex);

    const hotend = document.getElementById("hotend");
    let s4 = parseInt(hotend.selectedIndex);

    const lcd = document.getElementById("lcd");
    let s5 = parseInt(lcd.selectedIndex);

    const userConfig = [s1, s2, s3, s4, s5];

    const masterArray = [
        v4bm, //0  Test numbers
        v4v1, //1
        v4v2, //2
        v4gt, //3
        v4dbm, //4
        v4dv1, //5
        v4dv2, //6
        v4dgt, //7
        v3bbm, //8
        v3bv1, //9
        v3bv2, //10
        v3bgt, //11
        sv3bbm, //12
        sv3bv1, //13
        sv3bv2, //14
        sv3bgt, //15
        sv4bm, //16
        sv4v1, //17
        sv4v2, //18
        sv4gt, //19
        sv4dbm, //20
        sv4dv1, //21
        sv4dv2, //22
        sv4dgt, //23
        revEbm, //24
        revEv1, //25
        revEv2, //26
        revEgt, //27
        revEdbm, //28
        revEdv1, //29
        revEdv2, //30
        revEdgt, //31
        sv4Zm, //32
        bv3bgt, //33
        revFbm, //34-------------Start here for reassignment of tests-------------
        revFv1, //35
        revFv2, //36
        revFgt, //37 same as 34
        revG, //38
        revGv1, //39
        revGv2, //40
        revGgt, //41 same as 38
        revHbm, //42
        revHv1, //43
        revHv2, //44
        revHgt, //45 same as 42
        v4CoolBm, //46
        v4Coolv1, //47
        v4Coolv2, //48
        v4Coolgt, //49 same as 46
    ];

    var match;

    for (let a = 0; a < masterArray.length; a++) {
        let pass = true;

        for (let b = 0; b < userConfig.length; b++) {
            if (masterArray[a][b] !== userConfig[b]) {
                pass = false;
            }
        }
        if (pass == true) {
            match = a;
            console.log(match);
        }
    }

    //run test:

    let answer;
    if (match == 0) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin-11-30-2015.zip";
        } else answer = false;
    } else if (match == 1) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_24Vw24Vheater.zip";
        } else answer = false;
    } else if (match == 2) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 3) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2%20Marlin%20-%20Geeetech%20LCD%20-%20Black%20Z%20Motor%20-%2010-19-2015.zip";
        } else answer = false;
    } else if (match == 4) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wdfiles.com/local--files/m2-firmware/M2_Dual_Extruder_Marlin_Black_Z_Motor.zip";
        } else answer = false;
    } else if (match == 5) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 6) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 7) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 8) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin-11-30-2015.zip";
        } else answer = false;
    } else if (match == 9) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_24Vw24Vheater.zip";
        } else answer = false;
    } else if (match == 10) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 11) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 12) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin24r2.zip";
        } else answer = false;
    } else if (match == 13) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_942013.zip";
        } else answer = false;
    } else if (match == 14) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 15) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                " http://makergear.wikidot.com/local--files/m2-lcd-panel/M2_Marlin_RRDSC_v1.0.zip";
        } else answer = false;
    } else if (match == 16) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                " http://makergear.wdfiles.com/local--files/m2-firmware/M2Marlin-01-14-2016-OriginalZMotor.zip";
        } else answer = false;
    } else if (match == 17) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wdfiles.com/local--files/m2-lcd-panel/M2_LCD_Firmware_24Vw24Vheater.zip";
        } else answer = false;
    } else if (match == 18) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 19) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wikidot.com/local--files/m2-lcd-panel/M2_Marlin_RRDSC_v1.0.zip";
        } else answer = false;
    } else if (match == 20) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wdfiles.com/local--files/m2-firmware/M2_Dual_Extruder_Marlin.zip";
        } else answer = false;
    } else if (match == 21) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 22) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 23) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 24) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V100.zip";
        } else answer = false;
    } else if (match == 25) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 26) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 27) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V100.zip";
        } else answer = false;
    } else if (match == 28) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://setup.makergear.com/misc/M2E-Production-nr1E2-V110.zip";
        } else answer = false;
    } else if (match == 29) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V104%20-%20Dual%20-%20Viki.zip";
        } else answer = false;
    } else if (match == 30) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 31) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wdfiles.com/local--files/m2-firmware/M2E-Production-SnNRd-V101%20-%20Dual.zip";
        } else answer = false;
    } else if (match == 32) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 33) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "Hmmm. We can't find your firmware.. Please contact support.makergear.com and they may be able to help you. "
            );
        } else answer = false;
    } else if (match == 34) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "https://github.com/MakerGear/m2firmware/archive/AQB3f.zip";
        } else answer = false;
    } else if (match == 35) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "The Rev F printer is not compatible with the VIKI LCD."
            );
        } else answer = false;
    } else if (match == 36) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "The Rev F printer is not compatible with the VIKI 2 LCD."
            );
        } else answer = false;
    } else if (match == 37) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "https://github.com/MakerGear/m2firmware/archive/AQB3f.zip";
        } else answer = false;
    } else if (match == 38) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wikidot.com/local--files/m2-firmware/m2-RevG-firmware.zip";
        } else answer = false;
    } else if (match == 39) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "The Rev G printer is not compatible with the VIKI LCD."
            );
        } else answer = false;
    } else if (match == 40) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "The Rev G printer is not compatible with the VIKI 2 LCD."
            );
        } else answer = false;
    } else if (match == 41) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wikidot.com/local--files/m2-firmware/m2-RevG-firmware.zip";
        } else answer = false;
    } else if (match == 42) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "https://github.com/MakerGear/m2firmware/archive/vm4jL.zip";
        } else answer = false;
    } else if (match == 43) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "The Rev H printer is not compatible with the VIKI LCD."
            );
        } else answer = false;
    } else if (match == 44) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "The Rev H printer is not compatible with the VIKI 2 LCD."
            );
        } else answer = false;
    } else if (match == 45) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "hhttps://github.com/MakerGear/m2firmware/archive/vm4jL.zip";
        } else answer = false;
    } else if (match == 46) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wikidot.com/local--files/m2-firmware/V4-RevF%3AG-cooling%20-upgrade.zip";
        } else answer = false;
    } else if (match == 47) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "The v4 F/G cooling upgrade is not compatible with the VIKI LCD."
            );
        } else answer = false;
    } else if (match == 48) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            alert(
                "The v4 F/G cooling upgrade is not compatible with the VIKI 2 LCD."
            );
        } else answer = false;
    } else if (match == 49) {
        answer = confirm("Please click to download your firmware.");
        if (answer) {
            window.location =
                "http://makergear.wikidot.com/local--files/m2-firmware/V4-RevF%3AG-cooling%20-upgrade.zip";
        } else answer = false;
    }



} //end matchconfig();


//Magnify Images
$(".zoom1").elevateZoom({
    zoomWindowPosition: 10
});

$(".zoom2").elevateZoom({
    zoomWindowPosition: 2
});