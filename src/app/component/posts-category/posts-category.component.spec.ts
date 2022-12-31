import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCategoryComponent } from './posts-category.component';

describe('PostsCategoryComponent', () => {
  let component: PostsCategoryComponent;
  let fixture: ComponentFixture<PostsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
