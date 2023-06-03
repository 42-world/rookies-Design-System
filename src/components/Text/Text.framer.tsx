import { ControlType } from 'framer';
import { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { Text as _Text, textAlignConfig, textColorConfig, textSizeConfig, textWeightConfig } from './Text';

export function Text(props: ComponentProps<typeof _Text>) {
  return (
    <FramerProvider>
      <_Text {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(Text, {
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Hello!',
  },
  size: {
    title: 'Size',
    type: ControlType.Enum,
    options: Object.keys(textSizeConfig),
  },
  weight: {
    title: 'weight',
    type: ControlType.Enum,
    options: Object.keys(textWeightConfig),
  },
  align: {
    title: 'align',
    type: ControlType.Enum,
    options: Object.keys(textAlignConfig),
  },
  color: {
    title: 'color',
    type: ControlType.Enum,
    options: Object.keys(textColorConfig.light),
  },
});
