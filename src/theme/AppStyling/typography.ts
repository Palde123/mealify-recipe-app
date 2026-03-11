/**
 * THE PITCH - Typography System
 *
 * Premium sports typography pairing:
 * - Display: Playfair Display - elegant serifs for major headlines
 * - Body: Outfit - modern, clean geometric sans-serif
 *
 * Typography creates hierarchy through:
 * - Weight contrast (Light to Bold)
 * - Size scale (12px to 48px)
 * - Tracking variations
 */

import Matrics from './Matrics';

interface LineHeights {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
}

interface FontFamily {
  // Primary sans-serif for body text
  Outfit: {
    Light: string;
    Regular: string;
    Medium: string;
    SemiBold: string;
    Bold: string;
    ExtraBold: string;
  };
  // Display serif for headlines
  Playfair: {
    Regular: string;
    Medium: string;
    SemiBold: string;
    Bold: string;
  };
  // Legacy support - maps to Outfit
  Inter: {
    Light: string;
    Regular: string;
    Medium: string;
    SemiBold: string;
    Bold: string;
  };
}

interface FontSizes {
  // Extra small - captions, labels
  fs6: number;
  fs7: number;
  fs8: number;
  fs9: number;
  fs10: number;
  fs11: number;
  // Body text
  fs12: number;
  fs13: number;
  fs14: number;
  fs15: number;
  fs16: number;
  // Subheadings
  fs17: number;
  fs18: number;
  fs19: number;
  fs20: number;
  fs21: number;
  fs22: number;
  // Headings
  fs24: number;
  fs28: number;
  fs30: number;
  fs32: number;
  fs34: number;
  fs36: number;
  // Display
  fs40: number;
  fs48: number;
}

interface Spacing {
  mn10: number;
  mn12: number;
  mn14: number;
  mn16: number;
  mn18: number;
  mn20: number;
  mn24: number;
  mn30: number;
  mn36: number;
}

interface Padding {
  pg10: number;
  pg12: number;
  pg14: number;
  pg16: number;
  pg18: number;
  pg20: number;
  pg24: number;
  pg30: number;
  pg36: number;
}

interface LetterSpacing {
  tight: number;      // -0.5 - headlines
  normal: number;     // 0 - body
  wide: number;       // 0.5 - buttons
  wider: number;      // 1 - labels, caps
  widest: number;     // 2 - all caps headings
}

interface Typography {
  lineHeights: LineHeights;
  fontFamily: FontFamily;
  fontSizes: FontSizes;
  margin: Spacing;
  padding: Padding;
  letterSpacing: LetterSpacing;
}

const typography: Typography = {
  // ═══════════════════════════════════════════════════════════════
  // LINE HEIGHTS - Relative to font size
  // ═══════════════════════════════════════════════════════════════
  lineHeights: {
    xxs: '1em',       // Tight - display text
    xs: '1.125em',    // Compact
    sm: '1.25em',     // Headlines
    md: '1.375em',    // Subheadings
    lg: '1.5em',      // Body text (default)
    xl: '1.75em',     // Relaxed body
    '2xl': '2em',     // Extra relaxed
    '3xl': '2.5em',   // Spacious
    '4xl': '3em',     // Display
    '5xl': '4em',     // Hero
  },

  // ═══════════════════════════════════════════════════════════════
  // FONT FAMILIES
  // ═══════════════════════════════════════════════════════════════
  fontFamily: {
    // Primary - Modern geometric sans-serif
    Outfit: {
      Light: 'Outfit-Light',
      Regular: 'Outfit-Regular',
      Medium: 'Outfit-Medium',
      SemiBold: 'Outfit-SemiBold',
      Bold: 'Outfit-Bold',
      ExtraBold: 'Outfit-ExtraBold',
    },
    // Display - Elegant serif for impact
    Playfair: {
      Regular: 'PlayfairDisplay-Regular',
      Medium: 'PlayfairDisplay-Medium',
      SemiBold: 'PlayfairDisplay-SemiBold',
      Bold: 'PlayfairDisplay-Bold',
    },
    // Legacy mapping (for backward compatibility)
    Inter: {
      Light: 'Outfit-Light',
      Regular: 'Outfit-Regular',
      Medium: 'Outfit-Medium',
      SemiBold: 'Outfit-SemiBold',
      Bold: 'Outfit-Bold',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // FONT SIZES - Scaled for responsiveness
  // ═══════════════════════════════════════════════════════════════
  fontSizes: {
    // Extra small
    fs6: Matrics.ms(6),
    fs7: Matrics.ms(7),
    fs8: Matrics.ms(8),
    fs9: Matrics.ms(9),
    fs10: Matrics.ms(10),
    fs11: Matrics.ms(11),
    // Body
    fs12: Matrics.ms(12),
    fs13: Matrics.ms(13),
    fs14: Matrics.ms(14),
    fs15: Matrics.ms(15),
    fs16: Matrics.ms(16),
    // Subheadings
    fs17: Matrics.ms(17),
    fs18: Matrics.ms(18),
    fs19: Matrics.ms(19),
    fs20: Matrics.ms(20),
    fs21: Matrics.ms(21),
    fs22: Matrics.ms(22),
    // Headings
    fs24: Matrics.ms(24),
    fs28: Matrics.ms(28),
    fs30: Matrics.ms(30),
    fs32: Matrics.ms(32),
    fs34: Matrics.ms(34),
    fs36: Matrics.ms(36),
    // Display
    fs40: Matrics.ms(40),
    fs48: Matrics.ms(48),
  },

  // ═══════════════════════════════════════════════════════════════
  // SPACING - Margin scale
  // ═══════════════════════════════════════════════════════════════
  margin: {
    mn10: Matrics.ms(10),
    mn12: Matrics.ms(12),
    mn14: Matrics.ms(14),
    mn16: Matrics.ms(16),
    mn18: Matrics.ms(18),
    mn20: Matrics.ms(20),
    mn24: Matrics.ms(24),
    mn30: Matrics.ms(30),
    mn36: Matrics.ms(36),
  },

  // ═══════════════════════════════════════════════════════════════
  // SPACING - Padding scale
  // ═══════════════════════════════════════════════════════════════
  padding: {
    pg10: Matrics.ms(10),
    pg12: Matrics.ms(12),
    pg14: Matrics.ms(14),
    pg16: Matrics.ms(16),
    pg18: Matrics.ms(18),
    pg20: Matrics.ms(20),
    pg24: Matrics.ms(24),
    pg30: Matrics.ms(30),
    pg36: Matrics.ms(36),
  },

  // ═══════════════════════════════════════════════════════════════
  // LETTER SPACING - For different text styles
  // ═══════════════════════════════════════════════════════════════
  letterSpacing: {
    tight: -0.5,    // Display headlines
    normal: 0,      // Body text
    wide: 0.5,      // Buttons
    wider: 1,       // Labels
    widest: 2,      // All caps
  },
};

export default typography;

// ═══════════════════════════════════════════════════════════════
// TYPOGRAPHY PRESETS - Ready-to-use text styles
// ═══════════════════════════════════════════════════════════════
export const textStyles = {
  // Display - Hero headlines
  displayLarge: {
    fontFamily: typography.fontFamily.Playfair.Bold,
    fontSize: typography.fontSizes.fs48,
    letterSpacing: typography.letterSpacing.tight,
    lineHeight: typography.fontSizes.fs48 * 1.1,
  },
  displayMedium: {
    fontFamily: typography.fontFamily.Playfair.Bold,
    fontSize: typography.fontSizes.fs36,
    letterSpacing: typography.letterSpacing.tight,
    lineHeight: typography.fontSizes.fs36 * 1.15,
  },
  displaySmall: {
    fontFamily: typography.fontFamily.Playfair.SemiBold,
    fontSize: typography.fontSizes.fs30,
    letterSpacing: typography.letterSpacing.tight,
    lineHeight: typography.fontSizes.fs30 * 1.2,
  },

  // Headlines - Section headers
  headlineLarge: {
    fontFamily: typography.fontFamily.Outfit.Bold,
    fontSize: typography.fontSizes.fs24,
    letterSpacing: typography.letterSpacing.tight,
    lineHeight: typography.fontSizes.fs24 * 1.25,
  },
  headlineMedium: {
    fontFamily: typography.fontFamily.Outfit.SemiBold,
    fontSize: typography.fontSizes.fs20,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.fontSizes.fs20 * 1.3,
  },
  headlineSmall: {
    fontFamily: typography.fontFamily.Outfit.SemiBold,
    fontSize: typography.fontSizes.fs18,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.fontSizes.fs18 * 1.35,
  },

  // Title - Card titles, list items
  titleLarge: {
    fontFamily: typography.fontFamily.Outfit.SemiBold,
    fontSize: typography.fontSizes.fs18,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.fontSizes.fs18 * 1.4,
  },
  titleMedium: {
    fontFamily: typography.fontFamily.Outfit.Medium,
    fontSize: typography.fontSizes.fs16,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.fontSizes.fs16 * 1.4,
  },
  titleSmall: {
    fontFamily: typography.fontFamily.Outfit.Medium,
    fontSize: typography.fontSizes.fs14,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.fontSizes.fs14 * 1.4,
  },

  // Body - Main content
  bodyLarge: {
    fontFamily: typography.fontFamily.Outfit.Regular,
    fontSize: typography.fontSizes.fs16,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.fontSizes.fs16 * 1.5,
  },
  bodyMedium: {
    fontFamily: typography.fontFamily.Outfit.Regular,
    fontSize: typography.fontSizes.fs14,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.fontSizes.fs14 * 1.5,
  },
  bodySmall: {
    fontFamily: typography.fontFamily.Outfit.Regular,
    fontSize: typography.fontSizes.fs12,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.fontSizes.fs12 * 1.5,
  },

  // Label - Buttons, tags, badges
  labelLarge: {
    fontFamily: typography.fontFamily.Outfit.SemiBold,
    fontSize: typography.fontSizes.fs14,
    letterSpacing: typography.letterSpacing.wide,
    lineHeight: typography.fontSizes.fs14 * 1.2,
  },
  labelMedium: {
    fontFamily: typography.fontFamily.Outfit.Medium,
    fontSize: typography.fontSizes.fs12,
    letterSpacing: typography.letterSpacing.wide,
    lineHeight: typography.fontSizes.fs12 * 1.2,
  },
  labelSmall: {
    fontFamily: typography.fontFamily.Outfit.Medium,
    fontSize: typography.fontSizes.fs10,
    letterSpacing: typography.letterSpacing.wider,
    lineHeight: typography.fontSizes.fs10 * 1.2,
  },

  // Caption - Small text, metadata
  caption: {
    fontFamily: typography.fontFamily.Outfit.Regular,
    fontSize: typography.fontSizes.fs11,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.fontSizes.fs11 * 1.4,
  },

  // Overline - All caps labels
  overline: {
    fontFamily: typography.fontFamily.Outfit.SemiBold,
    fontSize: typography.fontSizes.fs10,
    letterSpacing: typography.letterSpacing.widest,
    lineHeight: typography.fontSizes.fs10 * 1.5,
    textTransform: 'uppercase' as const,
  },

  // Special - Auction specific
  bidAmount: {
    fontFamily: typography.fontFamily.Playfair.Bold,
    fontSize: typography.fontSizes.fs32,
    letterSpacing: typography.letterSpacing.tight,
    lineHeight: typography.fontSizes.fs32 * 1.1,
  },
  timerText: {
    fontFamily: typography.fontFamily.Outfit.Bold,
    fontSize: typography.fontSizes.fs24,
    letterSpacing: typography.letterSpacing.wide,
    lineHeight: typography.fontSizes.fs24 * 1.1,
  },
  playerName: {
    fontFamily: typography.fontFamily.Outfit.SemiBold,
    fontSize: typography.fontSizes.fs18,
    letterSpacing: typography.letterSpacing.normal,
    lineHeight: typography.fontSizes.fs18 * 1.3,
  },
  playerRole: {
    fontFamily: typography.fontFamily.Outfit.Medium,
    fontSize: typography.fontSizes.fs12,
    letterSpacing: typography.letterSpacing.wider,
    lineHeight: typography.fontSizes.fs12 * 1.4,
    textTransform: 'uppercase' as const,
  },
};
