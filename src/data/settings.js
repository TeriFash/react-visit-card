// eslint-disable-next-line import/no-anonymous-default-export
import {
  langsCvLinks,
  langsType,
  socialNetworkLinks,
} from 'utilities/options';

const urlParserString = (param, show = false) => {
  const format = show ? 'edit?usp=sharing' : 'export?format=pdf';
  return `https://docs.google.com/document/d/${langsCvLinks[param]}/${format}`;
};

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
      en: urlParserString(langsType.en),
      ru: urlParserString(langsType.ru),
      uah: urlParserString(langsType.ua)
    }
  },
  typeShow: {
    type: '_blank',
    title: 'btnGoMyBio',
    link: {
      en: urlParserString(langsType.en, true),
      ru: urlParserString(langsType.ru, true),
      uah: urlParserString(langsType.ua, true)
    }
  },
};

Object.keys(langsType).forEach(item => {
 return cvLinks[item] = {
    view: urlParserString(langsType[item], true),
    download: urlParserString(langsType[item])
  }
})

const socialLinks = linkParserObject(socialNetworkLinks);
const goSkillLink = {
  url: 'https://terifash.github.io/cv-skills-board/'
};

export { cvLinks, goSkillLink, socialLinks };
