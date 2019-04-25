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
  sortFactor = ["Followers", "Likes", "Comments"];
  sortInterestDATA;
  interestOption;
  sortingOption = "Followers";
  printedOption="Lifestyle";
  sortingoptions=
    {Likes:'stats.engagement.avgLikesRatio',
    Comments: 'stats.engagement.avgCommentsRatio',
    Followers:'followerCount'}
  

  constructor(private http: Http, private apiservice: ApiServiceService) { }
  ngOnInit() {
    console.log(this.sortingoptions["Likes"]);
    console.log(this.sortingOption);
    // this.apiservice.getAllInfluencers(this.minChange, this.maxChange, this.printedOption, this.keyword, this.sortingoptions[this.sortingOption]).subscribe((data) => this.sortInterestDATA=(data));
    this.apiservice.getAllInfluencers(this.minChange, this.maxChange, this.printedOption, this.sortingoptions[this.sortingOption]).subscribe((data) => this.sortInterestDATA=(data));

  }
  
  // count;
  // increaseCount(){
  //   this.apiservice.count= this.apiservice.count+1;
  //   this.count = this.apiservice.count;
  // }
  apply(){
    this.apiservice.getAllInfluencers(this.minChange, this.maxChange, this.printedOption, this.sortingoptions[this.sortingOption]).subscribe((data) => this.sortInterestDATA=(data));
  }

  receivePrintedOption($event){
    console.log(this.printedOption);
    this.changeTitle($event);
    console.log($event);

  }

  ///FOLLOWERS, LIKES, COMMENTS///
  changesortfactor($event){
    // console.log(this.sortingOption);
    // console.log(this.sortingOption==="Likes");
    // this.apiservice.sort(this.sortingOption).subscribe((data) => this.sortInterestDATA=(data));
    
  }


  ///KEYWORDS///
  keyword;
  keychange($event){
    console.log(event);
    console.log(this.keyword);
    this.apiservice.getKeyword(this.keyword).subscribe((data) => console.log(data));
    // this.apiservice.getKeyword(this.keyword).subscribe((data) => this.sortInterestDATA=(data));

  }
  
  
  ///COUNTING///
  min=12955300;
  max=155440542;
  range=[12955300,155440542];
  minChange=12955300;
  maxChange=155440542;
  rangeChanged(event:any){
    this.minChange = event[0];
    this.maxChange = event[1];
    console.log(event[0]);
    console.log(event[1]);
    this.apiservice.getCount(event[0], event[1]).subscribe((data) => console.log(data));
    // this.apiservice.getCount(event[0], event[1]).subscribe((data) => this.sortInterestDATA=(data));
  }
  rangeChangedloadmore(min, max){
    // console.log(event[0]);
    // console.log(event[1]);
    // this.apiservice.getCount(event[0], event[1]).subscribe((data) => console.log(data));
    // this.apiservice.getCount(min, max).subscribe((data) => this.sortInterestDATA=(data));
  }

  count=1;
  increaseCount(){
    this.count= this.count+1;
    this.apiservice.getfiltercount(this.count);
    this.apiservice.getAllInfluencers(this.minChange, this.maxChange, this.printedOption, this.sortingoptions[this.sortingOption]).subscribe((data) => this.sortInterestDATA=(data));

  }

  reset(){
    this.minChange = 12955300;
    this.maxChange = 155440542;
    // this.sortingOption = "Followers";
    this.apiservice.getAllInfluencersDEFAULT(this.minChange, this.maxChange, this.sortingoptions[this.sortingOption]).subscribe((data) => this.sortInterestDATA=(data));
  }

  ///INTERESTS///
  // interest;
  changeinterest(event){
    // console.log(event);
    console.log("Interest has been changed");
    this.changeTitle(this.interestOption);
    console.log(this.printedOption);
    // this.apiservice.getInterests(this.printedOption).subscribe((data) => this.sortInterestDATA=data);
  }

  changeTitle(x){
    console.log(x);
    this.printedOption = x;
  }

}
