import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const UploadImage = () => {
  return (
    <>
      <div className='path'>
        <div className='arrow'></div>
        <svg>
          <svg viewBox='0 0 72 72' id='path'>
            <path d='M36,25.12 L36,43.68 C36,53.3185944 31.52,56.7319277 22.56,53.92 C9.12,49.7021084 4,44.5565697 4,36 C4,18.72 18.72,4 36,4 C53.28,4 68,18.72 68,36 C68,53.28 53.28,68 36,68 C18.72,68 4,53.28 4,36 C4,18.72 18.72,4 36,4 C53.28,4 68,18.72 68,36 C68,53.28 53.28,68 36,68 C18.72,68 4,53.28 4,36 C4,18.72 18.72,4 36,4 C43.2533333,4 49.8789797,6.40627283 55.876939,11.2188185 L32.7391444,45.2477592 L23.8653488,38.1626948'></path>
          </svg>
        </svg>
      </div>
      <div className='circle'>
        <div className='water'>
          <svg>
            <svg viewBox='0 0 116 6' id='wave'>
              <path d='M58,0 C70.6086957,0 79.3822464,6 87,6 L58,6 L29,6 C36.6177536,6 45.3913043,0 58,0 Z M0,0 C12.6086957,0 21.3822464,6 29,6 L0,6 L0,0 Z M116,0 L116,6 L87,6 C94.6177536,6 103.391304,0 116,0 Z'></path>
            </svg>
          </svg>
          <svg>
            <svg viewBox='0 0 116 6' id='wave'>
              <path d='M58,0 C70.6086957,0 79.3822464,6 87,6 L58,6 L29,6 C36.6177536,6 45.3913043,0 58,0 Z M0,0 C12.6086957,0 21.3822464,6 29,6 L0,6 L0,0 Z M116,0 L116,6 L87,6 C94.6177536,6 103.391304,0 116,0 Z'></path>
            </svg>
          </svg>
        </div>
      </div>
    </>
  );
};

const BtnUpload = ({ title }) => {
  console.log('✅ 🧊 ~ props', title);
  const { t } = useTranslation('main');
  const [loading, setLoading] = useState(false);
  const titleRef = useRef();

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        titleRef.current.classList.remove('loading');
        setLoading(false);
      }, 4200);
    }
  }, [loading]);

  const handleClick = () => {
    titleRef.current.classList.add('loading');
    setLoading(true);
  };

  return (
    <div ref={titleRef} className='Btn-upload' onClick={handleClick}>
      <UploadImage />
      <span className='info-text'>{t('btnDownloadCV')}</span>
    </div>
  );
};

export default BtnUpload;
