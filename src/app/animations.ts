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
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
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
    query(':enter', [style({ opacity: 0.0 })], { optional: true }),
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
  transition('character-picker => start, game => character-picker', [
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
  // transition('* <=> *', [
  //   style({ position: 'relative' }),
  //   query(
  //     ':enter, :leave',
  //     [
  //       style({
  //         position: 'absolute',
  //         top: 0,
  //         left: 0,
  //         width: '100%',
  //       }),
  //     ],
  //     { optional: true }
  //   ),
  //   query(':enter', [style({ left: '-100%' })], { optional: true }),
  //   query(':leave', animateChild(), { optional: true }),
  //   group([
  //     query(
  //       ':leave',
  //       [animate('200ms ease-out', style({ left: '100%', opacity: 0 }))],
  //       { optional: true }
  //     ),
  //     query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
  //       optional: true,
  //     }),
  //     query('@*', animateChild(), { optional: true }),
  //   ]),
  // ]),
]);
