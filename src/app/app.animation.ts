import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';


export const slideInAnimation =
trigger('routeAnimations', [
  transition('HomePage <=> AboutPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: '100px',
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-in', style({ left: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-in', style({ left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* <=> FilterPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: '100px',
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('200ms ease-in', style({ left: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-in', style({ left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ])
]);