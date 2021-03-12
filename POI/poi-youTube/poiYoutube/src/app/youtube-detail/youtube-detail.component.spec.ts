import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeDetailComponent } from './youtube-detail.component';

describe('YoutubeDetailComponent', () => {
  let component: YoutubeDetailComponent;
  let fixture: ComponentFixture<YoutubeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
