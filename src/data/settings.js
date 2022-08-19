// eslint-disable-next-line import/no-anonymous-default-export
import { socialNetworkLinks, langsCvLinks } from 'utilities/options';

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
      en: urlParserString('en'),
      ru: urlParserString('ru'),
      uah: urlParserString('ua')
    }
  },
  typeShow: {
    type: '_blank',
    title: 'btnGoMyBio',
    link: {
      en: urlParserString('en', true),
      ru: urlParserString('ru', true),
      uah: urlParserString('ua', true)
    }
  },
  en: {
    view: urlParserString('en', true),
    download: urlParserString('en')
  },
  ru: {
    view: urlParserString('ru', true),
    download: urlParserString('ru')
  },
  ua: {
    view: urlParserString('ua', true),
    download: urlParserString('ua')
  }
};

const socialLinks = linkParserObject(socialNetworkLinks);
const goSkillLink = {
  url: 'https://terifash.github.io/cv-skills-board/'
};

export { goSkillLink, socialLinks, cvLinks };
