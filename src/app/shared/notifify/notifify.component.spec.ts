import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotififyComponent } from './notifify.component';

describe('NotififyComponent', () => {
  let component: NotififyComponent;
  let fixture: ComponentFixture<NotififyComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotififyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotififyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
