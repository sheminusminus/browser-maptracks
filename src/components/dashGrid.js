const SweetieKit = Require('std:sweetiekit.node');
const {
  NSForegroundColorAttributeName,
  NSFontAttributeName,
  NSKernAttributeName,
  UIControlEvents,
  UIControlState,
} = Require('../enums');

import { user, colors, sizes } from '../utils';
import { Label, TextField, Button } from '../components';

const { UIView, UIFont } = SweetieKit;

const btnColors = [
  colors.green,
  colors.pink,
  colors.purple,
  colors.blue,
];

export default (frame, connectSpotify, openMap) => {
  const gridSize = frame.width - (sizes.margins.xl * 2);
  const btnSize = gridSize - sizes.margins.m;
  const view = UIView({
    x: sizes.margins.xl,
    y: 240,
    width: gridSize,
    height: gridSize,
  });
  for (let i = 0; i < 4; i++) {
    const btn = UIButton({
      x: i % 2 === 0 ? 0 : ((gridSize / 2) + (sizes.margins.m / 2)),
      y: i > 1 ? ((gridSize / 2) + (sizes.margins.m / 2)) : 0,
      width: btnSize / 2,
      height: btnSize / 2,
    });
    btn.backgroundColor = btnColors[i];
    btn.setTitleForState('Title', UIControlState.normal);
    btn.showsTouchWhenHighlighted = true;
    btn.titleLabel.alpha = 0.8;
    view.addSubview(btn);
    if (i === 0) {
      btn.addTarget(openMap, UIControlEvents.touchUpInside);
    } else if (i === 3) {
      btn.addTarget(connectSpotify, UIControlEvents.touchUpInside);
    }
  }
  return view;
};
