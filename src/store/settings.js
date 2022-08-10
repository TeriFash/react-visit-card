// settings

// eslint-disable-next-line import/no-anonymous-default-export
export const settings = {
  cvLinks: {
    typeOne: {
      type: '_self',
      title: 'Download CV',
      link: {
        en: 'https://docs.google.com/document/d/1QUN8eLY4xA-7wuqlNIEfFJyETuEGKz9e4DqD8incN-8/export?format=pdf',
        ru: 'https://docs.google.com/document/d/1-wco4u22lsKdYxYPDjzX-7awq_xub0Yla-ooK6EBfQI/export?format=pdf'
      }
    },
    typeTwo: {
      type: '_blank',
      title: 'Go My Bio',
      link: {
        en: 'https://docs.google.com/document/d/1QUN8eLY4xA-7wuqlNIEfFJyETuEGKz9e4DqD8incN-8/edit?usp=sharing',
        ru: 'https://docs.google.com/document/d/1-wco4u22lsKdYxYPDjzX-7awq_xub0Yla-ooK6EBfQI/edit?usp=sharing'
      }
    },
    en: {
      view: 'https://docs.google.com/document/d/1QUN8eLY4xA-7wuqlNIEfFJyETuEGKz9e4DqD8incN-8/edit?usp=sharing',
      download: 'https://docs.google.com/document/d/1QUN8eLY4xA-7wuqlNIEfFJyETuEGKz9e4DqD8incN-8/export?format=pdf'
    },
    ru: {
      view: 'https://docs.google.com/document/d/1-wco4u22lsKdYxYPDjzX-7awq_xub0Yla-ooK6EBfQI/edit?usp=sharing',
      download: 'https://docs.google.com/document/d/1-wco4u22lsKdYxYPDjzX-7awq_xub0Yla-ooK6EBfQI/export?format=pdf'
    }
  },
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
