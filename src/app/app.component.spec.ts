import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('boundary', () => {
        it('should create the app', () => {
            expect(component).toBeTruthy();
        });

        it('should display the user name correctly', () => {
            const nameElement = fixture.debugElement.query(By.css('h1')).nativeElement;
            expect(nameElement.textContent).toBe('John Doe');
        });

        it('should display the user age correctly', () => {
            const ageElement = fixture.debugElement.query(By.css('p')).nativeElement;
            expect(ageElement.textContent).toContain('Age: 25');
        });

        it('should display the profile image correctly', () => {
            const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
            expect(imgElement.src).toContain('assets/profile.jpg');
            expect(imgElement.alt).toBe('Profile Image');
        });
    });
});
