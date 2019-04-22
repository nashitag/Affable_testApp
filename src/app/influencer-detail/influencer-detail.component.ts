import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-influencer-detail',
  templateUrl: './influencer-detail.component.html',
  styleUrls: ['./influencer-detail.component.css']
})
export class InfluencerDetailComponent implements OnInit {
  message= "enetered influencer detail";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiservice: ApiServiceService
    ) { }

    singleinfluencer;
    @Input() username: string;
    panelOpenState = false;
    ngOnInit() {
      
    
    console.log(this.username);
    this.apiservice.getSingleInfluencer(this.username).subscribe((data) => console.log(data));
    // this.apiservice.getSingleInfluencer(this.username).subscribe((data) => this.singleinfluencer=(data));

  }

  

}
