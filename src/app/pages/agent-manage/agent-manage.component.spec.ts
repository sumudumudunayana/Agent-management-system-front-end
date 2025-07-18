import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentManageComponent } from './agent-manage.component';

describe('AgentManageComponent', () => {
  let component: AgentManageComponent;
  let fixture: ComponentFixture<AgentManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
