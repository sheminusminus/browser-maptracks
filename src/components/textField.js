import { colors, sizes } from '../utils';
const SweetieKit = Require('std:sweetiekit.node');
const {
  NSForegroundColorAttributeName,
  NSFontAttributeName,
  NSKernAttributeName,
} = Require('../enums');


const { UITextField, UIFont, NSMutableAttributedString, UIView, UIKit } = SweetieKit;

const { UITextFieldViewMode } = UIKit;

const font = UIFont.fontWithNameSize('Lato-Bold', 17);

export default (frame, placeholder, text) => {
  const field = UITextField(frame);
  if (text) {
    field.text = text;
  }
  let placeholderText = 'Enter...';
  if (placeholder) {
    placeholderText = placeholder;
  }
  const attrPlaceholder = new NSMutableAttributedString(placeholderText);
  attrPlaceholder.addAttribute(NSForegroundColorAttributeName, colors.black, {
    location: 0,
    length: placeholderText.length,
  });
  console.log(attrPlaceholder);
  attrPlaceholder.addAttribute(NSFontAttributeName, font, {
    location: 0,
    length: placeholderText.length,
  });
  attrPlaceholder.addAttribute(NSKernAttributeName, 1.1, {
    location: 0,
    length: placeholderText.length,
  });
  field.attributedPlaceholder = attrPlaceholder;
  field.font = font;
  field.textColor = colors.bg;
  field.layer.cornerRadius = sizes.cornerRadius;
  field.leftView = UIView({ x: 0, y: 0, width: sizes.margins.l, height: sizes.controlHeight });
  field.rightView = UIView({ x: 0, y: 0, width: sizes.margins.l, height: sizes.controlHeight });
  field.leftViewMode = UITextFieldViewMode.always;
  field.rightViewMode = UITextFieldViewMode.always;
  return field;
};
