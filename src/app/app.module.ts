import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndInfluencerComponent } from './ind-influencer/ind-influencer.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { ApiServiceService } from './api-service.service';
import { RangeSliderModule  } from 'ngx-rangeslider-component';
import { FiltersComponent } from './filters/filters.component';
import { RouterModule} from '@angular/router';
import { InfluencerDetailComponent } from './influencer-detail/influencer-detail.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MillionPipe } from './ind-influencer/million.pipe';
import { DecimalPipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    IndInfluencerComponent,
    FiltersComponent,
    InfluencerDetailComponent,
    MillionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    MatCardModule,
    FormsModule,
    MatChipsModule,
    RangeSliderModule,
    MatExpansionModule
  ],
  providers: [ApiServiceService, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
