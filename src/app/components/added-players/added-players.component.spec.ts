import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedPlayersComponent } from './added-players.component';

describe('AddedPlayersComponent', () => {
  let component: AddedPlayersComponent;
  let fixture: ComponentFixture<AddedPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
