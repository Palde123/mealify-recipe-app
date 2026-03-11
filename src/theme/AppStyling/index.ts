/**
 * CRICKET ROYALE - App Styling Exports
 *
 * Central export for all styling utilities
 */

import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { Colors } from '../colors';
import typography, { textStyles } from './typography';
import AppStyle from './styles';
import Matrics, { Scale } from './Matrics';


const appliedCommonStyle = (): void => {
  const oldTextRender = (Text as any).render;
  (Text as any).render = function (...args: any[]) {
    const origin = oldTextRender.call(this, ...args);
    const children = origin.props.children;

    if (typeof children === 'object') {
      return React.cloneElement(origin, {
        children: React.cloneElement(children, {
          style: [styles.defaultText, children.props.style],
        }),
      });
    }
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: typography.fontFamily.Outfit.Regular,
    letterSpacing: 0.3,
  } as TextStyle,
});

export {
  Colors,
  typography,
  textStyles,
  AppStyle,
  appliedCommonStyle,
  Matrics,
  Scale,
  
};
