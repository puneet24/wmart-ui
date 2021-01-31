import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: '15%',
        left: 'calc(100% - 72px)'
    },
    widgetButton: {
        transform: 'rotate(270deg)'
    }
}));

const WmartFeedbackWidget = (props) => {
    const { onWidgetClick, isFeedbackModalOpen } = props;
    const classes = useStyles();

    const onFeedbackClick = (e) => {
        onWidgetClick();
    }

    return <div className={classes.root}>
        <Button className={classes.widgetButton} onClick={onFeedbackClick} variant="contained" color="secondary">Feedback</Button>
    </div>
}

export default WmartFeedbackWidget;
