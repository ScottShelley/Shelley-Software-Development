import { trigger, transition, animate, keyframes, style } from '@angular/animations';

export const headerSideTrigger = trigger('h1State', [
    transition(':enter', [
        animate('10000ms ease-out', keyframes([
            style({
                opacity: 0,
                transform: 'translateX(-100%)',
                offset: 0
            }),
            style({
                opacity: 1,
                transform: 'translateX(30%)',
                offset: 0.4
            }),
            style({
                opacity: 1,
                transform: 'translateX(-20%)',
                offset: 0.7
            }),
            style({
                opacity: 1,
                transform: 'translateX(15%)',
                offset: 0.8
            }),
            style({
                opacity: 1,
                transform: 'translateX(-5%)',
                offset: 0.9
            }),
            style({
                opacity: 1,
                transform: 'translateX(0)',
                offset: 1
            })
        ]))
      ])
]);

export const profileSideTrigger = trigger('profileState', [
    transition(':enter', [
        animate('5000ms ease-out', keyframes([
            style({
                opacity: 0,
                transform: 'translateY(-200%)',
                offset: 0
            }),
            style({
                opacity: 0.3,
                transform: 'translateY(0%)',
                offset: 0.4
            }),
            style({
                opacity: 1,
                transform: 'translateY(0)',
                offset: 1
            })
        ]))
    ])
]);

export const deviceSideTrigger = trigger('deviceState', [
    transition(':enter', [
        animate('10000ms ease-out', keyframes([
            style({
                opacity: 0,
                transform: 'translateX(200%)',
                offset: 0
            }),
            style({
                opacity: 0.2,
                transform: 'translateX(0%)',
                offset: 0.4
            }),
            style({
                opacity: 1,
                transform: 'translateX(0)',
                offset: 1
            })
        ]))
    ])
]);

export const infoSideTrigger = trigger('infoState', [
    transition(':enter', [
        animate('8000ms ease-out', keyframes([
            style({
                opacity: 0,
                transform: 'translateY(100%)',
                offset: 0
            }),
            style({
                opacity: 0.8,
                transform: 'translateY(0)',
                offset: 0.4
            }),
            style({
                opacity: 1,
                transform: 'translateY(0)',
                offset: 1
            })
        ]))
    ])
]);

export const navTopStateTrigger = trigger('navTopState', [
    transition(':enter', [
        animate('5000ms linear', keyframes([
            style({
                opacity: 0.2,
                transform: 'translateX(200%)',
                offset: 0
            }),
            style({
                opacity: 1,
                transform: 'translateX(0)',
                offset: 1
            })
        ]))
    ])
]);

export const navBottomStateTrigger = trigger('navBottomState', [
    transition(':enter', [
        animate('5000ms linear', keyframes([
            style({
                transform: 'translateX(-600%)',
                offset: 0
            }),
            style({
                transform: 'translateX(0)',
                offset: 1
            })
        ]))
    ])
]);