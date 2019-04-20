import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  // @Input() singleInfluencer;

  interests=["Fashion & accessory", "Lifestyle", "Entertainment", "Music", "Sports", "Fitness", 
              "Food & beverages", "Parenting", "Beauty", "Arts", "Pets and animals", "Travel", 
              "Outdoors", "Vehicles", "Leisure", "Toys", "Cartoons and comics", "Home and garden", 
              "Games"];
  sortInterest;
  selectedOption;
  printedOption="All";

  constructor(private http: Http, private apiservice: ApiServiceService) { }
  ngOnInit() {
    
  }
  

  receivePrintedOption($event){
    console.log(this.printedOption);
    this.changeTitle($event);
    console.log($event);

  }

  ///KEYWORDS///
  keyword;
  keychange($event){
    console.log(event);
    console.log(this.keyword);
    this.apiservice.getKeyword(this.keyword).subscribe((data) => console.log(data));
    this.apiservice.getKeyword(this.keyword).subscribe((data) => this.sortInterest=(data));

  }
  
  
  ///COUNTING///
  min=12955300;
  max=155440542;
  range=[12955300,155440542];
  rangeChanged(event:any){
    console.log(event[0]);
    console.log(event[1]);
    this.apiservice.getCount(event[0], event[1]).subscribe((data) => console.log(data));
    this.apiservice.getCount(event[0], event[1]).subscribe((data) => this.sortInterest=(data));
  }

  ///INTERESTS///
  changeinterest(event){
    // console.log(event);
    console.log("Interest has been changed");
    this.changeTitle(this.selectedOption);
    console.log(this.printedOption);
    this.apiservice.getInterests(this.printedOption).subscribe((data) => this.sortInterest=data);

  }

  changeTitle(x){
    console.log(x);
    this.printedOption = x;
  }

}
