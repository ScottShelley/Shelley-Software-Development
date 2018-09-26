import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const formStateTrigger = trigger('formState', [
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
        transform: 'translateX(10%)'
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

export const contextStateTrigger = trigger('contextState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-200%)'
      // offset: 0
    })
  ]),
  transition('hide => show', [
    animate('10000ms ease-out', keyframes([
      style({
        opacity: 0,
        transform: 'translateY(-200%)'
        // offset: 0
      }),
      style({
        opacity: 1,
        transform: 'translateY(70%)'
        // offset: 0.4
      }),
      style({
        opacity: 1,
        transform: 'translateY(0)'
        // offset: 1
      })
    ]))
  ])
]);