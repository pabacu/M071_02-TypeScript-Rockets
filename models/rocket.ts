class Rocket{
    max_power: number;
    name:string;
    propulsor:Propulsor[]=new Array();
    altitude: number = 0;
    
    constructor(name:string){
        this.max_power = 0;
        this.name = name;
        this.altitude = 417;
    }
    
    addMotor(propulsors:string):void{

        let p:string[] = propulsors.split(',');
        if(p)
        p.forEach(power => {
            
            this.propulsor.push(new Propulsor(parseInt(power)));
            this.max_power += parseInt(power);
            
        });
        //alert if rocket power > than 400kN
        if((this.max_power) > 400)
            alert("Danger! The Rockets max power is over than 400kN")
    }

    accelerate(kN:number):void{
        let acc_pwr:number = 0;
        
        this.propulsor.forEach(p => {
        if(kN>0)
        {
            if(p.power >= (p.accel + kN))
            {
                p.accel = p.accel + kN;
                acc_pwr = acc_pwr + p.accel;
                console.log("entra propulsor " + acc_pwr + " - " + p.accel + "/" + p.power);
                this.altitude -= acc_pwr;
                //this.altitude -= kN;
                
            }else{
                acc_pwr = acc_pwr + p.power;
            }
        }else{
            
            if(this.getMaxPwlevel() > 0 && this.getMaxPwlevel() == (p.accel))
            {
                p.accel = p.accel + kN;
                acc_pwr = acc_pwr - p.accel;
                console.log("entra propulsor " + acc_pwr + " - " + p.accel + "/" + p.power);
                this.altitude -=acc_pwr;
                //this.altitude += kN;
                
            }else{
                acc_pwr = acc_pwr - p.power;
            }
        }
        });

        if(acc_pwr == this.max_power)
        {
            stars(this.name, this.max_power - this.actualPower());
            show_msg("Rocket " + this.name,"Danger! Max power " + this.max_power + " kN");
        }else{
            if(acc_pwr == 0 || acc_pwr == (-1 * this.max_power))
                show_msg("Rocket " + this.name,"Accelerated to 0 kN ... Neutral");
            else
                show_msg("Rocket " + this.name,"Accelerated " + kN + " kN");
        }
        
        acc_pwr *=-1;

        move_rocket(this.name,acc_pwr * 0.5, this.altitude / 2);
    }

    getMaxPwlevel():number{
        let maxPwr:number=0;
        this.propulsor.forEach(p => { 
            if(p.accel>maxPwr)
            maxPwr = p.accel;
        });

        return maxPwr;
    }

    actualPower():number{
        let power:number=0;
        this.propulsor.forEach(p => {
            power = power + p.accel;
        });

        return power;
    }

    show_metrics():string
    {
        let m:string;
        m = "<p><b>" + this.name + "</b></p>";
        m += "<br/>";
        this.propulsor.forEach(p => {
           m += p.accel + ", "
        });
        m += "<br/>";
        m += "kN: " + this.actualPower() + " of " + this.max_power;
        return m;
    }
}