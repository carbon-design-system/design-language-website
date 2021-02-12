/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import classnames from 'classnames';
import { Dropdown, Slider } from 'carbon-components-react';
import Textarea from 'react-textarea-autosize';
import { settings } from 'carbon-components';
import { baseFontSize, breakpoints as carbonBreakpoints } from '@carbon/layout';

const breakpoints = {
  sm: Number(carbonBreakpoints.sm.width.replace('rem', '')) * baseFontSize,
  md: Number(carbonBreakpoints.md.width.replace('rem', '')) * baseFontSize,
  lg: Number(carbonBreakpoints.lg.width.replace('rem', '')) * baseFontSize,
  xlg: Number(carbonBreakpoints.xlg.width.replace('rem', '')) * baseFontSize,
  max: Number(carbonBreakpoints.max.width.replace('rem', '')) * baseFontSize,
};

const { prefix } = settings;

const HEBREW = 'hebrew';
const ARABIC = 'arabic';

const languageSample = [
  {
    language: 'latin',
    content: 'Heavy boxes perform quick waltzes and jigs.',
  },
  {
    language: 'cyrillic',
    content: 'Эх, чужак, общий съём цен шляп (юфть)—вдрызг!',
  },
  {
    language: 'greek',
    content: 'διαφυλάξτε γενικά τη ζωή σας από βαθειά ψυχικά τραύματα.',
  },
  {
    language: 'hebrew',
    content: 'דג סקרן שט בים מאוכזב ולפתע מצא חברה.',
  },
  {
    language: 'korean',
    content: '플렉스산스한글의진보적아름다움.',
  },
  {
    language: 'thai',
    content:
      'นายสังฆภัณฑ์ เฮงพิทักษ์ฝั่ง ผู้เฒ่าซึ่งมีอาชีพเป็นฅนขายฃวด ถูกตำรวจปฏิบัติการจับฟ้องศาล ฐานลักนาฬิกาคุณหญิงฉัตรชฎา ฌานสมาธิ',
  },
  {
    language: 'thaiLooped',
    content:
      'นายสังฆภัณฑ์ เฮงพิทักษ์ฝั่ง ผู้เฒ่าซึ่งมีอาชีพเป็นฅนขายฃวด ถูกตำรวจปฏิบัติการจับฟ้องศาล ฐานลักนาฬิกาคุณหญิงฉัตรชฎา ฌานสมาธิ',
  },
  {
    language: 'devanagari',
    content:
      'ऋषियों को सताने वाले दुष्ट राक्षसों के राजा रावण का सर्वनाश करने वाले विष्णुवतार भगवान श्रीराम, अयोध्या के महाराज दशरथ के बड़े सपुत्र थे।',
  },
  {
    language: 'arabic',
    content: 'أبجد هوز حطي كلمن سعفص قرشت ثخذ وضظغ',
  },
];

const commonFontWeights = [
  { value: 100, label: 'Thin' },
  { value: 200, label: 'ExtraLight' },
  { value: 300, label: 'Light' },
  { value: 400, label: 'Regular' },
  { value: 450, label: 'Text' },
  { value: 500, label: 'Medium' },
  { value: 600, label: 'SemiBold' },
  { value: 700, label: 'Bold' },
];

const languageDropdownContent = [
  {
    label: 'IBM Plex Sans',
    className: [`${prefix}--type-default`],
    language: 'latin',
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Sans Hebrew',
    language: 'hebrew',
    className: [`${prefix}--type-hebrew`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Sans KR',
    language: 'korean',
    className: [`${prefix}--type-korean`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Sans Italic',
    language: 'latin',
    className: [`${prefix}--type-default ${prefix}--type-italic`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Condensed',
    language: 'latin',
    className: [`${prefix}--type-condensed`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Condensed Italic',
    language: 'latin',
    className: [`${prefix}--type-condensed ${prefix}--type-italic`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Mono',
    language: 'latin',
    className: [`${prefix}--type-mono`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Mono Italic',
    language: 'latin',
    className: [`${prefix}--type-mono ${prefix}--type-italic`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Serif',
    language: 'latin',
    className: [`${prefix}--type-serif`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Serif Italic',
    language: 'latin',
    className: [`${prefix}--type-serif ${prefix}--type-italic`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Sans Cyrillic',
    language: 'cyrillic',
    className: [`${prefix}--type-default`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Sans Cyrillic Italic',
    language: 'cyrillic',
    className: [`${prefix}--type-default ${prefix}--type-italic`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Mono Cyrillic',
    language: 'cyrillic',
    className: [`${prefix}--type-mono`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Mono Cyrillic Italic',
    language: 'cyrillic',
    className: [`${prefix}--type-mono ${prefix}--type-italic`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Serif Cyrillic',
    language: 'cyrillic',
    className: [`${prefix}--type-serif`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Serif Cyrillic Italic',
    language: 'cyrillic',
    className: [`${prefix}--type-serif ${prefix}--type-italic`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Sans Greek',
    language: 'greek',
    className: [`${prefix}--type-default`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Sans Greek Italic',
    language: 'greek',
    className: [`${prefix}--type-default ${prefix}--type-italic`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Sans Thai',
    language: 'thai',
    className: [`${prefix}--type-thai`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Sans Thai Looped',
    language: 'thai',
    className: [`${prefix}--type-thai-looped`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Sans Devanagari',
    language: 'devanagari',
    className: [`${prefix}--type-devanagari`],
    weights: commonFontWeights,
  },
  {
    label: 'IBM Plex Sans Arabic',
    language: 'arabic',
    className: [`${prefix}--type-arabic`],
    weights: commonFontWeights,
  },
].map((variant) => {
  variant.value = variant.label.toLowerCase().replace(/ /g, '-');
  return variant;
});

export default class TypeTester extends Component {
  state = {
    typeSizeMultiplier: 840,
    label: 'IBM Plex Sans',
    variant: 'ibm-plex-sans',
    lastVariant: 'ibm-plex-sans',
    fontWeight: 300,
    text: languageSample.find((el) => el.language === 'latin').content,
    openDropdown: null,
  };

  componentDidMount() {
    if (typeof window !== 'undefined' && window.innerWidth < breakpoints.md) {
      this.setState({
        typeSizeMultiplier: 470,
      });
    }
  }

  onFontWeightDropdownChange = ({ selectedItem }) => {
    this.setState({
      fontWeight: selectedItem.value,
    });
  };

  onLanguageDropdownChange = ({ selectedItem }) => {
    const { value } = selectedItem;
    this.setState({
      lastVariant: this.state.variant,
    });
    setTimeout(() => {
      this.setState({
        variant: value,
        text: this.getDefaultTextForVariant(value, this.state.lastVariant),
        fontWeight: this.getCurrentOrDefaultFontWeightForLanguage(
          this.getLanguageForVariant(value),
          this.state.fontWeight
        ),
      });
    }, 100);
  };

  onChangeOpenDropdown = (dropdown) => {
    this.setState({
      openDropdown: dropdown === this.state.openDropdown ? null : dropdown,
    });
  };

  getCurrentOrDefaultFontWeightForLanguage = (language, currentWeight) =>
    currentWeight;

  getClassNameForVariant = (variant) =>
    languageDropdownContent.find((item) => item.value === variant).className ||
    null;

  getDefaultTextForVariant = (variant, lastVariant) => {
    if (
      this.getLanguageForVariant(variant) !==
      this.getLanguageForVariant(lastVariant)
    ) {
      return languageSample.find(
        (item) => item.language === this.getLanguageForVariant(variant)
      ).content;
    }
  };

  getLanguageForVariant = (variant) =>
    languageDropdownContent.find((item) => item.value === variant).language;

  getWeightsForLanguage = () => {
    const language = this.getLanguageForVariant(this.state.variant);
    const languageConfig = languageDropdownContent.find(
      (i) => i.language === language
    );
    return languageConfig.weights;
  };

  getLanguageForWeight = (weight) => {
    const weightObj = commonFontWeights.find((w) => w.value === weight);
    return weightObj.label;
  };

  isRtl = () =>
    this.getLanguageForVariant(this.state.variant) === HEBREW ||
    this.getLanguageForVariant(this.state.variant) === ARABIC;

  render() {
    const lineHeight = Math.max(
      (
        1.375 +
        0.025 +
        this.state.typeSizeMultiplier / 100 -
        (this.state.typeSizeMultiplier / 100) * 1.025
      ).toFixed(4)
    );

    const textClasses = classnames(
      `${prefix}--custom-textarea`,
      this.getClassNameForVariant(this.state.variant)
    );

    return (
      <div className={`${prefix}--row`}>
        <div className={`${prefix}--type-tester-menu`}>
          <div className="dropdown_wrapper">
            <Dropdown
              id={`${prefix}--type-tester-language-dropdown`}
              items={languageDropdownContent}
              label={this.state.label}
              onChange={this.onLanguageDropdownChange}
              selected={this.state.variant}
              onChangeOpen={this.onChangeOpenDropdown.bind(
                null,
                'language-dropdown'
              )}
              open={this.state.openDropdown === 'language-dropdown'}
            />
            <Dropdown
              id={`${prefix}--type-tester-weight-dropdown`}
              items={this.getWeightsForLanguage()}
              label={this.getLanguageForWeight(this.state.fontWeight)}
              onChange={this.onFontWeightDropdownChange}
              selected={this.state.fontWeight}
              onChangeOpen={this.onChangeOpenDropdown.bind(
                null,
                'weight-dropdown'
              )}
              open={this.state.openDropdown === 'weight-dropdown'}
            />
          </div>
          <div className={`${prefix}--input-range-wrapper`}>
            <Slider
              min={100}
              max={1600}
              value={this.state.typeSizeMultiplier}
              onChange={(e) => {
                this.setState({ typeSizeMultiplier: e.value });
              }}
              hideTextInput
            />
          </div>
        </div>
        <div className={`${prefix}--type-tester-sample`}>
          <Textarea
            className={textClasses}
            style={{
              fontSize: `${this.state.typeSizeMultiplier / 100}em`,
              lineHeight,
              fontWeight: this.state.fontWeight,
              direction: this.isRtl() ? 'rtl' : 'ltr',
            }}
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
        </div>
      </div>
    );
  }
}

TypeTester.propTypes = {};
