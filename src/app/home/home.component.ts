import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public product:String ='';
  public price:any ='';
  public date:any = '';
  public editedProduct:String = '';
  public editedPrice:any = '';
  public editedDate:any = '';
  public totalprice:any = 0;
  public budgetArray:any = [];
  public budget:any = {};
  // userArray: any;

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.totalprice= this.price+ this.totalprice;
    console.log(this.totalprice)
    let userBudget = {product:this.product, price:this.price, deadline:this.date, totalprice:this.totalprice};
    // console.log(userBudget);
    this.budgetArray.push(userBudget)
    console.log(this.budgetArray);
    {this.product ="", this.price="", this.date=""};
    this.total()
  }

  getBudget(i:any){
    this.budget=this.budgetArray.find((budget:any, index:any)=>index==i)
    console.log(this.budget); 
    // console.log(this.totalprice);
    
  }

  edit=(i:any)=>{
    console.log(i);
    this.budget=this.budgetArray.find((budget:any, index:any)=>index==i)
    this.totalprice= this.totalprice-this.budget.price
    console.log(this.totalprice);
    this.totalprice= this.totalprice + this.editedPrice
    console.log(this.totalprice); 
    let EditedBudget = {product:this.editedProduct, price:this.editedPrice, deadline:this.editedDate,totalprice:this.totalprice};
    console.log(EditedBudget);
    this.budgetArray[i]= EditedBudget
  }

  delet(i:any){
    console.log(i);
    this.budget=this.budgetArray.find((budget:any, index:any)=>index==i)
    this.totalprice= this.totalprice-this.budget.price
    console.log(this.totalprice);
    this.budgetArray = this.budgetArray.filter((budget:any,index:any)=>index!=i)
  }

  total(){
    // console.log(this.budgetArray[0].price);
    
  }

}
