"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(name) {
        this.propulsor = new Array();
        this.altitude = 0;
        this.max_power = 0;
        this.name = name;
        this.altitude = 417;
    }
    Rocket.prototype.addMotor = function (propulsors) {
        var _this = this;
        var p = propulsors.split(',');
        if (p)
            p.forEach(function (power) {
                _this.propulsor.push(new Propulsor(parseInt(power)));
                _this.max_power += parseInt(power);
            });
        //alert if rocket power > than 400kN
        if ((this.max_power) > 400)
            alert("Danger! The Rockets max power is over than 400kN");
    };
    Rocket.prototype.accelerate = function (kN) {
        var _this = this;
        var acc_pwr = 0;
        this.propulsor.forEach(function (p) {
            if (kN > 0) {
                if (p.power >= (p.accel + kN)) {
                    p.accel = p.accel + kN;
                    acc_pwr = acc_pwr + p.accel;
                    console.log("entra propulsor " + acc_pwr + " - " + p.accel + "/" + p.power);
                    _this.altitude -= acc_pwr;
                    //this.altitude -= kN;
                }
                else {
                    acc_pwr = acc_pwr + p.power;
                }
            }
            else {
                if (_this.getMaxPwlevel() > 0 && _this.getMaxPwlevel() == (p.accel)) {
                    p.accel = p.accel + kN;
                    acc_pwr = acc_pwr - p.accel;
                    console.log("entra propulsor " + acc_pwr + " - " + p.accel + "/" + p.power);
                    _this.altitude -= acc_pwr;
                    //this.altitude += kN;
                }
                else {
                    acc_pwr = acc_pwr - p.power;
                }
            }
        });
        if (acc_pwr == this.max_power) {
            stars(this.name, this.max_power - this.actualPower());
            show_msg("Rocket " + this.name, "Danger! Max power " + this.max_power + " kN");
        }
        else {
            if (acc_pwr == 0 || acc_pwr == (-1 * this.max_power))
                show_msg("Rocket " + this.name, "Accelerated to 0 kN ... Neutral");
            else
                show_msg("Rocket " + this.name, "Accelerated " + kN + " kN");
        }
        acc_pwr *= -1;
        move_rocket(this.name, acc_pwr * 0.5, this.altitude / 2);
    };
    Rocket.prototype.getMaxPwlevel = function () {
        var maxPwr = 0;
        this.propulsor.forEach(function (p) {
            if (p.accel > maxPwr)
                maxPwr = p.accel;
        });
        return maxPwr;
    };
    Rocket.prototype.actualPower = function () {
        var power = 0;
        this.propulsor.forEach(function (p) {
            power = power + p.accel;
        });
        return power;
    };
    Rocket.prototype.show_metrics = function () {
        var m;
        m = "<p><b>" + this.name + "</b></p>";
        m += "<br/>";
        this.propulsor.forEach(function (p) {
            m += p.accel + ", ";
        });
        m += "<br/>";
        m += "kN: " + this.actualPower() + " of " + this.max_power;
        return m;
    };
    return Rocket;
}());
