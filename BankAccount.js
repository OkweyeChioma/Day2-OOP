class BankAccount{
	// This models a real life bank account as created in financial institutions
	constructor(name){
		this._name = name
		this._balance =0;
		this.count =0;
	}
	get balance(){
	    return this._balance
	}
	get name(){
	    return this._name;
	}
	static generateAccountNumber(max, min){
		return Math.floor(Math.random()* (max-min) + min);
		/* Account number comprises of 10-digit long Nuban account number
		   Current Account ranges are min - 50000000000 and max -60000000000
		   Savings Account ranges are min-10000000000 and max 20000000000
         */
	}
	accountType(){
		//Show the type of account opened
		return 'Bank account opened'
	}
	deposit(amount){
		this._balance += amount;
		console.log("account balance is: " + " " + this._balance)
	}
	turnover(){
		// display total deposit activity over time
	    let turnover =[]
	    turnover.push(this._balance)
	    return turnover
	  
	}
	withdraw(amount){
		if(this._balance ===100){
		  console.log('Minimum account balance ')
		}else if(amount> this._balance){
		  console.log('Overdrawing account not enabled for customer')
		}else if(this._balance-amount < 100){
		  console.log('Cant withdraw amount')
	
		}else{
		  this._balance -=amount;
		  console.log("account balance is: " + " " + this._balance)
		  this.count++;
		}
	}

}

class SavingsAccount extends BankAccount{
  constructor(name){
    super(name);
  }
  accountType(){
  	return 'Savings acount opened'
  }
  interest(){
  	//after three withdrawals interest is forfeited 
    if(this.count > 3){
      console.log("interest forefeit")
    }else{
      let intr = (3/100) *(1/12)* this._balance;
      console.log("int on deposit is:" + intr)
      this.deposit(intr)
    }
  }
}

class CurrentAccount extends BankAccount{
  constructor(name){
    super(name)
    this._loanOwe = 0;
  } accountType(){
  	return 'Current account opened'
  }
  lend(amount){
  	// a customer can only borrow 33.5 percent of his total turnover
     let canLend = 1 * (33.5 / 100) * this.turnover()
     if(amount <= canLend){
       this.deposit(amount)
       console.log(amount + " granted")
       this._loanOwe += amount;
     }else{
       console.log("Turnover too low to grant loan amount")
     }
    
  }
  get loanOwe(){
  	//display how much a customer owes
  	return this._loanOwe;
  }
  payback(amount){
  	if (this._loanOwe !== 0){
  		this._loanOwe -= amount;
  	}
  	console.log("loan amount left is " + " " + this._loanOwe)
  }
}

