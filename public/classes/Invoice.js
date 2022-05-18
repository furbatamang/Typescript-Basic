export class Invoice {
    // private client:string;
    // private detail:string;
    // private amount:number;
    // constructor(c:string, d:string, a:number){
    //     this.client = c;
    //     this.detail = d;
    //     this.amount = a;
    // }
    //Short hand for code written above
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.client} owns ${this.amount} for ${this.detail}`;
    }
}
