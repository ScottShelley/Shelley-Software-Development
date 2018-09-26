import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const slideStateTrigger = trigger('slideTech', [
    transition(':enter', [
        style({
            transform: 'translateY(-100%)',
            opacity: 0
        }),
        animate('500ms ease-out', style({
            transform: 'translateY(0)',
            opacity: 1
        }))
    ]),
    transition(':leave', [
        style({
            transform: 'translateY(0)',
            opacity: 1
        }),
        animate('500ms ease-out', style({
            transform: 'translateY(-100%)',
            opacity: 0
        }))
    ])
]);

export const itemStateTrigger = trigger('itemState', [
    transition(':enter', [
      animate('500ms ease-out', keyframes([
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        style({
          opacity: 1,
          transform: 'translateX(15%)'
        }),
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ]))
    ])
  ]);