import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const awsImgStateTrigger = trigger('awsImgState', [
    transition(':enter', [
      animate('500ms ease-out', keyframes([
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

export const cloudImgStateTrigger = trigger('cloudState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translate(100%, 100%)'
      // offset: 0
    })
  ]),
  transition('hide => show', [
    animate('10000ms ease-out', keyframes([
      style({
        opacity: 0,
        transform: 'translate(100%, 100%)'
        // offset: 0
      }),
      style({
        opacity: 0.5,
        transform: 'translate(0, 0)'
        // offset: 0.4
      }),
      style({
        opacity: 1,
        transform: 'translate(0, 0)'
        // offset: 1
      })
    ]))
  ])
]);

export const azureStateTrigger = trigger('azureState', [
  transition(':enter', [
    style({
      transform: 'translate(-200%, 200%)'
      // offset: 0
    })
  ]),
  transition('hide => show', [
    animate('10000ms ease-out', keyframes([
      style({
        transform: 'translate(-200%, 200%)'
        // offset: 0
      }),
      style({
        transform: 'translate(0, 0)'
        // offset: 0.4
      }),
      style({
        transform: 'translate(0, 0)'
        // offset: 1
      })
    ]))
  ])
]);

export const awsStateTrigger = trigger('awsState', [
  transition(':enter', [
    style({
      opacity: 0.5,
      transform: 'translate(-200%, -200%)'
      // offset: 0
    })
  ]),
  transition('hide => show', [
    animate('10000ms ease-out', keyframes([
      style({
        opacity: 0.5,
        transform: 'translate(-200%, -200%)',
        // offset: 0
      }),
      style({
        transform: 'translate(0, 0)'
        // offset: 0.4
      }),
      style({
        opacity: 1,
        transform: 'translate(0, 0)'
        // offset: 1
      })
    ]))
  ])
]);