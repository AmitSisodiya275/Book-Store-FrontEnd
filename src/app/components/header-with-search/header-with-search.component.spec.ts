import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithSearchComponent } from './header-with-search.component';

describe('HeaderWithSearchComponent', () => {
  let component: HeaderWithSearchComponent;
  let fixture: ComponentFixture<HeaderWithSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWithSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
