import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('character-picker => game', [
    style({ position: 'relative' }),
    group([
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 1.0,
        }),
      ]),
      query(
        '#transition-target',
        [style({ bottom: 'calc(100vh - calc(161px + 285px))', 'z-index': 3 })],
        {
          optional: true,
        }
      ),
    ]),
    query(':enter', [style({ overflow: 'hidden', opacity: 0.0 })], {
      optional: true,
    }),
    query(':leave', animateChild(), { optional: true }),
    query(
      '#transition-target',
      [
        animate(
          '500ms ease-in-out',
          style({
            width: '100px',
            height: '121px',
            'border-radius': '40px',
            bottom: '24px',
            right: '24px',
            'box-shadow': '0px 0px 6px -1px rgba(0, 0, 0, 0.3)',
          })
        ),
      ],
      {
        optional: true,
      }
    ),
    group([
      query(':leave', [animate('300ms ease-out', style({ opacity: 0.0 }))], {
        optional: true,
      }),
      query(':enter', [animate('100ms ease-out', style({ opacity: 1.0 }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('start => character-picker', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 1.0,
        overflow: 'hidden',
      }),
    ]),
    query('#expand-to-other-page', [style({ display: 'block' })], {
      optional: true,
    }),
    query(':enter', [style({ opacity: 0.0 })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        '#expand-to-other-page',
        [animate('300ms ease-out', style({ transform: 'scale(12)' }))],
        {
          optional: true,
        }
      ),
      query(':enter', [animate('300ms ease-out', style({ opacity: 1.0 }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('character-picker => start', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 1.0,
        transform: 'scale(1.3)',
      }),
    ]),
    query(':enter', [style({ overflow: 'hidden', opacity: 0.0 })], {
      optional: true,
    }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ opacity: 0.0 }))], {
        optional: true,
      }),
      query(
        ':enter',
        [
          animate(
            '300ms ease-out',
            style({ opacity: 1.0, transform: 'scale(1.0)' })
          ),
        ],
        {
          optional: true,
        }
      ),
    ]),
  ]),
  transition('character-picker => start', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], {
        optional: true,
      }),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 1.0,
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ overflow: 'hidden', opacity: 0.0 })], {
      optional: true,
    }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ opacity: 0.0 }))], {
        optional: true,
      }),
      query(':enter', [animate('300ms ease-out', style({ opacity: 1.0 }))], {
        optional: true,
      }),
    ]),
  ]),
]);
