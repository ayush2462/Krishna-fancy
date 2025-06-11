import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReviews } from './client-reviews';

describe('ClientReviews', () => {
  let component: ClientReviews;
  let fixture: ComponentFixture<ClientReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientReviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientReviews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
