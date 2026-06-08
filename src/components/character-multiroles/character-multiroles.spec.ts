import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMultiroles } from './character-multiroles';

describe('CharacterMultiroles', () => {
  let component: CharacterMultiroles;
  let fixture: ComponentFixture<CharacterMultiroles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterMultiroles],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterMultiroles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
