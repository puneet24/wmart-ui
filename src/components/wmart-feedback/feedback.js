import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    paper: {
        maxWidth: '350px'
    },
    action: {
        marginLeft: '10px',
        marginRight: '10px'
    },
    gridContainer: {
        marginTop: '15px',
        marginBottom: '15px'    
    }
}));

const DialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    const classes = useStyles()
    return (
        <MuiDialogTitle disableTypography {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
};

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function WmartFeedbackMain(props) {
    const { isFeedbackModalOpen, onClose, onFeedbackSubmit } = props;
    const [feedback, setFeedback] = useState({ star: null, content: '' });

    const handleClose = () => {
        onClose();
    };

    const classes = useStyles();

    return (
        <div>
            <Dialog classes={{paper: classes.paper}} className={classes.root} aria-labelledby="customized-dialog-title" open={isFeedbackModalOpen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Feedback
                </DialogTitle>
                <DialogContent dividers>
                    <h2>How was your experience with this page?</h2>
                    <Grid>
                    <Rating
                        name="simple-controlled"
                        value={feedback.star}
                        onChange={(event, newValue) => {
                            setFeedback({...feedback, star: newValue });
                        }}
                    />
                    </Grid>
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs={12}>
                            <span>(1 = Needs Improvement, 5 = Love it!)</span>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs={12}>
                            <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            variant="outlined"
                            onChange={(event) => {
                                setFeedback({
                                    ...feedback,
                                    content: event.target.value
                                })
                            }}
                            placeholder={"Please tell us how we can improve it"}
                        />
                        </Grid>
                    </Grid>
                    
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs={5}></Grid>
                        <Grid item xs={7}>
                            <Link className={classes.action} href="#" onClick={(e) => { e.preventDefault(); handleClose() }}>
                                Cancel
                            </Link>
                            <Button  
                                onClick={() => {
                                    console.log(feedback)
                                    onFeedbackSubmit(feedback)
                                }} 
                                className={classes.action} 
                                variant="contained" 
                                disabled={!feedback.star} 
                                autoFocus 
                                color="primary"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>

                </DialogContent>
            </Dialog>
        </div>
    );
}