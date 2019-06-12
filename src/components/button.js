import { colors, sizes } from '../utils';
const SweetieKit = Require('std:sweetiekit.node');
const { UIControlState } = Require('../enums');


const { UIButton, UIFont } = SweetieKit;

const font = UIFont.fontWithNameSize('Lato-Bold', 17);

export default (frame, title) => {
  const button = UIButton(frame);
  button.setTitleForState(title, UIControlState.normal);
  button.setTitleColorForState(colors.white, UIControlState.normal);
  button.showsTouchWhenHighlighted = true;
  button.layer.cornerRadius = sizes.cornerRadius;
  button.backgroundColor = colors.pink;
  button.titleLabel.font = font;
  return button;
};
