import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBlogsComponent } from './featured-blogs.component';

describe('FeaturedBlogsComponent', () => {
  let component: FeaturedBlogsComponent;
  let fixture: ComponentFixture<FeaturedBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedBlogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
