export const langsType = {
  ua: 'ua',
  en: 'en',
  ru: 'ru'
}

export const languages = Object.keys(langsType).map((item, i) => ({
  id: i+1,
  value: langsType[item],
  label: langsType[item].toUpperCase()
}));

export const btnTiltOptions = {
  scale: 1.1,
  speed: 3000,
  max: 25,
  glare: true,
  'max-glare': 0.5
};

export const langsCvLinks = {
  en: '1QUN8eLY4xA-7wuqlNIEfFJyETuEGKz9e4DqD8incN-8',
  ru: '1-wco4u22lsKdYxYPDjzX-7awq_xub0Yla-ooK6EBfQI',
  ua: '1ogNvMtCi30a2fMR0Tivwj_REHYURQ7n8Nm5cgCR7P0c'
};

export const socialNetworkLinks = {
  GitHub: 'https://github.com/TeriFash',
  Telegram: 'https://telegram.im/@TeriFash',
  linkedin: 'https://linkedin.com/in/viktor-gura/'
  // Facebook: 'https://www.facebook.com/profile.php?id=100015717390714'
};
