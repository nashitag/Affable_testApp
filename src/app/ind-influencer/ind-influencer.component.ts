import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map} from 'rxjs/operators';
import { ApiServiceService } from '../api-service.service';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Influencer } from '../influencer';

// import { getScript } from '../../../src/server';

@Component({
  selector: 'app-ind-influencer',
  templateUrl: './ind-influencer.component.html',
  styleUrls: ['./ind-influencer.component.css']
})
export class IndInfluencerComponent implements OnInit {

  constructor(private http: Http, private apiservice: ApiServiceService) { }

  httpdata;

  influencer: Influencer;
  


  interests=["Fashion & accessory", "Lifestyle", "Entertainment", "Music", "Sports", "Fitness", 
              "Food & beverages", "Parenting", "Beauty", "Arts", "Pets and animals", "Travel", 
              "Outdoors", "Vehicles", "Leisure", "Toys", "Cartoons and comics", "Home and garden", 
              "Games"];
  selectedOption: string;
  printedOption= "all";
  
  booleanx;
  i: Array<String>;

  singleInfluencer;
  interest;
  
  

  ngOnInit() {

    this.apiservice.getAllInfluencers().subscribe((data) => console.log(data));
    this.apiservice.getAllInfluencers().subscribe((data) => this.sortInterest=data);

    this.apiservice.getSingleInfluencer('dovecameron').subscribe((data) => this.singleInfluencer=data);
    this.apiservice.getCount(12955300, 14198093).subscribe((data) => console.log(data));

    
    
    
    //TO UPLOAD 300 INFLUENCERS DATA
    // this.apiservice.getforupload().subscribe((data) => this.upload300(data));
    // console.log(this.httpdata);
    // this.upload300(this.httpdata);
    
  }
  displaydata(data) {this.httpdata = data;}


  //TO UPLOAD 300 INFLUENCERS DATA
  // upload300(httpdat){
  //   for (var ind in httpdat){
  //     console.log(httpdat[ind]);
  //     this.uploadx(httpdat[ind]);
  //   }
  // }
  // uploadx(data){
  //   // console.log(data);
  //   let newinf: Influencer = {
  //     username: data.username,
  //     fullName: data.fullName,
  //     picture: data.picture,
  //     biography: data.biography,
  //     followerCount: data.followerCount,
  //     stats: data.stats,
  //   }
  //   console.log(newinf);
  //   this.apiservice.additem(newinf).subscribe(item =>{
  //     console.log(item);
  //   });
  // }

  ////SORTING////
  sortInterest;
  changeinterest(event){
    console.log(event);
    console.log("Interest has been changed");
    this.printedOption = this.selectedOption;
    console.log(this.printedOption);
    this.apiservice.getInterests(this.printedOption).subscribe((data) => this.sortInterest=data);

  }
  chipClick(item){
    console.log(item);
    // console.log(event);
    this.printedOption = item;
    this.apiservice.getInterests(this.printedOption).subscribe((data) => this.sortInterest=data);
  }
  ////SORTING////

  check(data){
    console.log(data);
    this.i = data.stats.interests;
    // console.log(this.i);

    for (var ind in this.i) {
      console.log(this.i[ind]);
      if(this.i[ind]===this.printedOption){
        return true;
      } 
    };
  }
  

}
