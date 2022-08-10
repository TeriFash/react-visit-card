import React from 'react';
import MoveTilt from 'components/MoveTilt';
import CvLink from 'components/CvLink';
import BtnUpload from 'components/BtnUpload';
import { settings } from 'store/settings.js';
import { useTranslation } from 'react-i18next';

// import './BtnTilt.scss'

const BtnTilt = () => {
  const { t } = useTranslation('main');
  const cvData = settings.cvLinks;
  const options = {
    scale: 1.1,
    speed: 3000,
    max: 25,
    glare: true,
    'max-glare': 0.5
  };

  return (
    <>
      <MoveTilt options={options}>
        <CvLink {...cvData.typeTwo} title={t('btnGoMyBio')} className='btn-tilt' />
      </MoveTilt>

      <CvLink {...cvData.typeOne} title={t('btnDownloadCV')} className='btn-upload-wrapper'>
        <BtnUpload />
      </CvLink>
    </>
  );
};

export default BtnTilt;
