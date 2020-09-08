import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ThemeFeedbackDialog from 'gatsby-theme-carbon/src/components/FeedbackDialog/FeedbackDialog';
import * as axios from 'axios';
import { ToastNotification } from 'carbon-components-react';

const SURVEY_ID = '5806027';

const successMessage = {
  title: 'Feedback sent',
  subtitle: 'Thank you for submiting your feedback.',
  kind: 'success',
};
const failMesage = {
  title: 'Feedback not sent',
  subtitle: 'Please contact the website administrator.',
  kind: 'error',
};

let timeoutInstance;

const FeedbackDialog = ({ props }) => {
  const [notification, setNotification] = useState({});

  const showNotification = (notificationOpt) => {
    clearTimeout(timeoutInstance);
    setNotification(notificationOpt);
    timeoutInstance = setTimeout(() => {
      setNotification({});
    }, 4500);
  };

  const onSubmit = (feedbackData) => {
    const config = {
      method: 'post',
      params: {
        ...feedbackData,
        surveyId: SURVEY_ID,
      },
      url: 'https://b3fa4946.us-south.apigw.appdomain.cloud/feedback/submit',
    };

    axios(config)
      .then((res) => {
        const { success } = res.data;

        if (success) {
          showNotification(successMessage);
        } else {
          showNotification(failMesage);
        }
      })
      .catch(() => {
        showNotification(failMesage);
      });
  };

  return (
    <>
      {Object.keys(notification).length !== 0 &&
        notification.constructor === Object && (
          <div style={{ position: 'fixed', top: 45, right: 0 }}>
            <ToastNotification
              iconDescription="Close"
              title={notification.title}
              subtitle={<span>{notification.subtitle}</span>}
              kind={notification.kind}
              caption=""
            />
          </div>
        )}

      {
        // eslint-disable-next-line
        <ThemeFeedbackDialog {...props} onSubmit={onSubmit} />
      }
    </>
  );
};

FeedbackDialog.propTypes = {
  props: PropTypes.object,
};

export default FeedbackDialog;
