import React, { useState } from 'react';
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

const TIMEOUT_LENGTH = 4500;

const FeedbackDialog = ({ props }) => {
  const [notification, setNotification] = useState(null);

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
          setNotification(successMessage);
        } else {
          setNotification(failMesage);
        }
      })
      .catch(() => {
        setNotification(failMesage);
      })
      .finally(() => {
        setTimeout(() => {
          setNotification(null);
        }, TIMEOUT_LENGTH);
      });
  };

  return (
    <>
      {notification && (
        <div style={{ position: 'fixed', top: 45, right: 0 }}>
          <ToastNotification
            iconDescription="Close"
            timeout={TIMEOUT_LENGTH}
            title={notification.title}
            subtitle={<span>{notification.subtitle}</span>}
            kind={notification.kind}
            caption=""
          />
        </div>
      )}
      <ThemeFeedbackDialog {...props} onSubmit={onSubmit} />
    </>
  );
};

export default FeedbackDialog;
