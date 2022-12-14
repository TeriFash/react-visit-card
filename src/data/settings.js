// eslint-disable-next-line import/no-anonymous-default-export
import {
  langsCvLinks,
  socialNetworkLinks,
} from 'utilities/options';

const urlParserString = (param, show = false) => {
  const format = show ? 'edit?usp=sharing' : 'export?format=pdf';
  return `https://docs.google.com/document/d/${langsCvLinks[param]}/${format}`;
};

const langs = {
  en: 'en',
  ru: 'ru',
  ua: 'ua'
}

const linkParserObject = item => {
  const list = Object.keys(item);

  return list.map(key => ({
    link: socialNetworkLinks[key],
    title: key,
    text: key.toLowerCase(),
    icon: key.toLowerCase()
  }));
};

const cvLinks = {
  typeDownload: {
    type: '_self',
    title: 'btnDownloadCV',
    link: {
      en: urlParserString(langs.en),
      ru: urlParserString(langs.ru),
      uah: urlParserString(langs.ua)
    }
  },
  typeShow: {
    type: '_blank',
    title: 'btnGoMyBio',
    link: {
      en: urlParserString(langs.en, true),
      ru: urlParserString(langs.ru, true),
      uah: urlParserString(langs.ua, true)
    }
  },
  en: {
    view: urlParserString(langs.en, true),
    download: urlParserString(langs.en)
  },
  ru: {
    view: urlParserString(langs.ru, true),
    download: urlParserString(langs.ru)
  },
  ua: {
    view: urlParserString(langs.ua, true),
    download: urlParserString(langs.ua)
  }
};

const socialLinks = linkParserObject(socialNetworkLinks);
const goSkillLink = {
  url: 'https://terifash.github.io/cv-skills-board/'
};

export { cvLinks, goSkillLink, socialLinks };
