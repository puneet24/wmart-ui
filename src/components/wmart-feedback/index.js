import React, { useState } from 'react';
import WmartFeedbackWidget from './feedbackWidget';
import WmartFeedbackMain from './feedback';

/*
** Required Props:- onFeedbackSubmit method
** onFeedbackSubmit will be called on submit click
** onFeedbackSubmit will receive 1 attribute of type {star: number, content: string}
*/

const WmartFeedback = (props) => {
    const { onFeedbackSubmit, classNames } = props;
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false)

    const onFeedbackClick = (feedback) => {
        setIsFeedbackModalOpen(false)
        onFeedbackSubmit(feedback);
    }

    return <div>
        <WmartFeedbackWidget isFeedbackModalOpen={isFeedbackModalOpen} onWidgetClick={() => { setIsFeedbackModalOpen(!isFeedbackModalOpen) }}   />
        <WmartFeedbackMain isFeedbackModalOpen={isFeedbackModalOpen} onClose={() => { setIsFeedbackModalOpen(false) }} onFeedbackSubmit={(feedback) => { onFeedbackClick(feedback) }} classNames={classNames} />
    </div>
}

export default WmartFeedback;
