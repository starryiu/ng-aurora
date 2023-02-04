import {
  animate,
  query,
  style,
  transition,
  trigger,
  sequence,
} from '@angular/animations';

export const routeFadeAnimation = trigger('routeFadeAnimation', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter,:leave',
      [
        style({
          opacity: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    sequence([
      query(
        ':leave',
        [
          style({ opacity: 1, transform: 'translateY(0px)' }),
          animate(
            '0.45s ease-out',
            style({ opacity: 0, transform: 'translateY(30px)' })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({
            position: 'absolute',
            opacity: 0,
            transform: 'translateY(-30px)',
          }),
          animate(
            '0.9s cubic-bezier(.09,.38,.77,.99)',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
