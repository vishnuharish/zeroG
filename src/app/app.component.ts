import { Component, HostListener} from '@angular/core';
import { slideInAnimation } from 'src/app/app.animation';
import { RouterOutlet } from '@angular/router';

function backGroundMoveMent(fromState: string, toState: string, element: any, params: {[key:
  string]: any}):boolean{
    console.log(fromState);
    console.log(toState);
    console.log(element);
    console.log(params);
    return (toState === "test");
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'zeroG';
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    // debugger;
    let el:any = document.getElementById('bgImg');

      el.style.backgroundPositionX = (-e.offsetX/70) + 'px';
      el.style.backgroundPositionY = (-e.offsetY/70) + 'px';
    // console.log(el);
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
