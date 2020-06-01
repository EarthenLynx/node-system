class Mashine {
    constructor(name, produces, adress, qtyToday, qtyWeek, status, statusMsg, lastAct) {
        let date = new Date();
        let random = Math.random();

        this.name = name;
        this.adress = adress;
        this.produces = produces; 
        this.qtyToday = Math.round(Math.random() * date.getHours() * 1000 + 42); 
        this.qtyWeek = Math.ceil(this.qtyToday * 7 + date.getHours() * random * 1.2);
        if(random < 0.1) {
            this.status = "Error"; 
            this.statusMsg = "Mashine " + this.name + " cannot produce and needs manual check."
        } else {
            this.status = "Ok"; 
            this.statusMsg = "Mashine " + this.name + " is up and running.";
        }
        this.lastAct = date + ""; 
    }
}

module.exports = Mashine; 

