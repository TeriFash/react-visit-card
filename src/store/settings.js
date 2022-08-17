// eslint-disable-next-line import/no-anonymous-default-export

const langs = {
  en: '1QUN8eLY4xA-7wuqlNIEfFJyETuEGKz9e4DqD8incN-8',
  ru: '1-wco4u22lsKdYxYPDjzX-7awq_xub0Yla-ooK6EBfQI',
  uah: '1ogNvMtCi30a2fMR0Tivwj_REHYURQ7n8Nm5cgCR7P0c'
};

const urlParserString = (param, show = false) => {
  const format = show ? 'edit?usp=sharing' : 'export?format=pdf';
  return `https://docs.google.com/document/d/${langs[param]}/${format}`;
};

export const cvLinks = {
  typeDownload: {
    type: '_self',
    title: 'btnDownloadCV',
    link: {
      en: urlParserString('en'),
      ru: urlParserString('ru'),
      uah: urlParserString('uah')
    }
  },
  typeShow: {
    type: '_blank',
    title: 'btnGoMyBio',
    link: {
      en: urlParserString('en', true),
      ru: urlParserString('ru', true),
      uah: urlParserString('uah', true)
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
  uah: {
    view: urlParserString('uah', true),
    download: urlParserString('uah')
  }
};

export const settings = {
  goSkillLink: {
    url: 'https://terifash.github.io/cv-skills-board/'
  },
  socialLinks: [
    {
      link: 'https://github.com/TeriFash',
      title: 'GitHub',
      text: 'github',
      icon: 'github'
    },
    {
      link: 'https://linkedin.com/in/viktor-gura/',
      title: 'LinkedIn',
      text: 'linkedin',
      icon: 'linkedin'
    },
    {
      link: 'https://telegram.im/@TeriFash',
      title: 'Telegram',
      text: 'telegram',
      icon: 'telegram'
    }
    // {
    //   link: 'https://www.facebook.com/profile.php?id=100015717390714',
    //   title: 'FaceBook',
    //   text: 'facebook',
    //   icon: 'fab fa-facebook'
    // },
    // {
    //   link: '',
    //   title: 'Resume',
    //   text: 'resume',
    //   icon: 'file-earmark-text-fill',
    // },
  ]
};

export default function init() {
  return settings;
}
