import React, { useEffect } from 'react';
import { useParams, useRouteMatch, useHistory, useLocation } from 'react-router-dom';

import HomeComponent from 'pages/Home';
import DevComponent from 'pages/Development';
import { routes } from 'data/navigation/routesList';

import { useFetch } from '../hooks/useFetch';

import i18n from 'config/i18n';
import { useTranslation } from 'react-i18next';

function Body(props) {
  const { page_id, pathPage } = props;
  let { lang, page } = useParams();
  let history = useHistory();
  let location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    // lang = i18n.language;
    // if (page_id === value.lang[lang].path) {
    //   console.log();
    //   // let pageUrl = value.lang[lang].path
    // }
    // console.log("useEffect", lang, lang2);
    let urlPage = location.pathname;
    console.log('Body page_id', page_id, pathPage);
    // let subPaths = null;
    // subPaths = urlPage.split("/");
    // console.log("SUBPaths", subPaths);
    // if (subPaths.length > 2) {
    //   // console.log("subPaths2", subPaths[1]);
    //   // history.push("/" + i18n.languages[0] + "/" + subPaths[2]);
    //   history.push("/" + i18n.languages[0] + "/" + pathPage);
    // } else {
    //   // history.push("/" + i18n.languages[0]);
    // }
  }, [location.pathname]);

  const { data, isLoading, isError } = useFetch('/data/headerData.json', []);

  const renderContent = () => {
    if (typeof data !== 'undefined') {
      return data.map(value => {
        // console.log("Body data:", value);
        // let page_id = value.lang[lang].page_id;
        // console.log("Body page_id:", page, page_id);
        // console.log("Body data:", value, lang);
        // const { page_id } = value;
        if (value.page_id === page_id) {
          // console.log("Get Body components value1->", value);
          return value.components.map((val2, index2) => {
            if (val2.lang === lang) {
              const CoreComponentIterator = coreComponentList[val2.name];
              return <CoreComponentIterator key={index2} />;
            }
            return null;
          });
        }
        return null;
      });
    } else {
      return <p>No component</p>;
    }
  };

  if (isError) {
    return (
      <Grid className={classes.containerLoaded}>
        <p className={classes.error}>
          {isError} {t(`${isError}_STATUS_CODE`)}
        </p>
      </Grid>
    );
  } else if (isLoading) {
    return (
      <Grid className={classes.containerLoaded}>
        <CircularProgress className={classes.progress} disableShrink />
      </Grid>
    );
  } else {
    // return (
    //   <Grid className={classes.minHeight}>
    //     {typeof page !== "undefined" ? page : "default"}
    //   </Grid>
    // );
    return <Grid className={classes.minHeight}>{renderContent()}</Grid>;
  }
}

export default Body;
