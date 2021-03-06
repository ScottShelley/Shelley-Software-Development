import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const requireStateTrigger = trigger('reqState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
      // offset: 0
    })
  ]),
  transition('hide => show', [
    animate('10000ms ease-out', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
        // offset: 0
      }),
      style({
        opacity: 1,
        transform: 'translateX(15%)'
        // offset: 0.4
      }),
      style({
        opacity: 1,
        transform: 'translateX(0)'
        // offset: 1
      })
    ]))
  ])
]);

export const changeStateTrigger = trigger('changeState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(100%)'
      // offset: 0
    })
  ]),
  transition('hide => show', [
    animate('10000ms ease-out', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(100%)'
        // offset: 0
      }),
      style({
        opacity: 1,
        transform: 'translateX(-15%)'
        // offset: 0.4
      }),
      style({
        opacity: 1,
        transform: 'translateX(0)'
        // offset: 1
      })
    ]))
  ])
]);