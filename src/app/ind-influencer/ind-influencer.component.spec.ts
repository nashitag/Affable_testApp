import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndInfluencerComponent } from './ind-influencer.component';

describe('IndInfluencerComponent', () => {
  let component: IndInfluencerComponent;
  let fixture: ComponentFixture<IndInfluencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndInfluencerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
