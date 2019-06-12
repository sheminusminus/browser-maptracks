import { colors } from '../utils';
const SweetieKit = Require('std:sweetiekit.node');
const {
  NSForegroundColorAttributeName,
  NSFontAttributeName,
  NSKernAttributeName,
} = Require('../enums');


const { UILabel, UIFont } = SweetieKit;

const font = UIFont.fontWithNameSize('Lato-Light', 17);

export default (frame, text = '', color = colors.white) => {
  const label = UILabel(frame);
  label.text = text;
  label.font = font;
  label.textColor = color;
  return label;
};
