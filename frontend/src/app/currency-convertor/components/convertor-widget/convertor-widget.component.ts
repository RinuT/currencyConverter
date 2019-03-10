import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms'

@Component({
  selector: 'convertor-widget',
  templateUrl: './convertor-widget.component.html',
  
})
export class ConvertorWidget implements OnInit {

  @Output('getConvertionData') convertionData = new EventEmitter();
  
  currencies;
  selectedCurrency;
  amount;

  constructor() { 

    this.amount=0;
    this.selectedCurrency="";
    this.currencies = [
      {'id':1, 'name':'INR'},
      {'id':2, 'name':'CAD'},
      {'id':3, 'name':'GBP'}
    ]
  }

  regexp = new RegExp('')
   
  ngOnInit() {
  }

  sendConvertData(){
      let dataToEmit ={
        'currency':this.selectedCurrency,
        'amount'  :this.amount      
      };
      console.log(dataToEmit.amount)
      this.convertionData.emit(dataToEmit);
    
   

  }
}