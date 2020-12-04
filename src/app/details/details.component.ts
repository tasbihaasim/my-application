import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit {
  showjson(){
    var arr=[]
      document.getElementById("demo").innerHTML = "";
      for (var i = 0; i < localStorage.length; i++){
          var l = "elem"+i.toString();
          arr.push(localStorage.getItem(localStorage.key(i)));
          

          
      
  
  }
  let elem = document.getElementById("demo") as HTMLDivElement;
  elem.innerText =arr.toString(); 

  //document.getElementById("demo").innerHTML = arr;

  }

  constructor() { }

  ngOnInit(): void {
    this.showjson();
  }

}
