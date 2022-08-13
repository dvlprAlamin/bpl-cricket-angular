import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedSinglePlayerComponent } from './added-single-player.component';

describe('AddedSinglePlayerComponent', () => {
  let component: AddedSinglePlayerComponent;
  let fixture: ComponentFixture<AddedSinglePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedSinglePlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedSinglePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
