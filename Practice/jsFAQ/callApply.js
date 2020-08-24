const normalPerson = {
    firstName: "rahi",
    lastName: "uddin",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        
        this.salary = this.salary - amount - tips - tax;
        console.log(this);
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary:25000,
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'dilam',
    salary:25000,
}
//normalPerson.chargeBill();
// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);


// const friendlyPersonBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyPersonBill(1000);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 50);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 10]);
console.log(heroPerson.salary);