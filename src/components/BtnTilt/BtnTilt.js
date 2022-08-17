import React from 'react';
import MoveTilt from 'components/MoveTilt';
import CvLink from 'components/CvLink';
import BtnUpload from 'components/BtnUpload';
import { settings } from 'store/settings';
import { btnTiltOptions } from 'utilities/options';
import { useTranslation } from 'react-i18next';

// import './BtnTilt.scss'

const BtnTilt = () => {
  const { t, i18n } = useTranslation('main');
  const lang = i18n.resolvedLanguage || 'en';
  const { typeShow, typeDownload } = settings.cvLinks;

  return (
    <>
      <MoveTilt options={btnTiltOptions}>
        <CvLink {...typeShow} lang={lang} title={t(typeShow.title)} className='btn-tilt' />
      </MoveTilt>

      <CvLink {...typeDownload} lang={lang} className='btn-upload-wrapper'>
        <BtnUpload title={t(typeDownload.title)} />
      </CvLink>
    </>
  );
};

export default BtnTilt;
