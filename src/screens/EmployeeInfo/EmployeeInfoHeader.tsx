import React, { FC } from 'react';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = (theme: any) =>
  createStyles({
    edit: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    empInfo: {
      paddingLeft: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit,
      paddingRight: theme.spacing.unit * 2,
      display: 'flex',
      justifyContent: 'flex-center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      flex: 1,
    },
    grow: {
      flexGrow: 1,
    },
    secondToolbar: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    secondaryActions: {
      display: 'flex',
    },
  });
interface IProps extends WithStyles<typeof styles> {
  classes: any;
  employeeName: string;
  vatNumber: string;
  workHours: string;
  initials: string;
  history?: any;
}

const EmployeeInfo: FC<IProps> = props => {
  const { classes, initials, employeeName, vatNumber, workHours, history } = props;

  return (
    <AppBar position="sticky" color="default">
      <Toolbar className={classes.grow}>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Back">
          <ArrowBackIcon onClick={history.goBack} />
        </IconButton>
        <List className={classes.grow}>
          <ListItem>
            <Avatar>{initials}</Avatar>
            <ListItemText primary={employeeName} />
          </ListItem>
        </List>
      </Toolbar>
      <Toolbar className={classes.secondToolbar}>
        <div className={classes.empInfo}>
          <Typography color="inherit">ΑΦΜ: {vatNumber}</Typography>
          <Typography color="inherit" className={classes.pos}>
            Ωράριο: {workHours}
          </Typography>
        </div>
        <div className={classes.secondaryActions}>
          <IconButton className={classes.menuButton} color="primary" aria-label="Delete">
            <DeleteIcon />
          </IconButton>
          <IconButton className={classes.menuButton} color="primary" aria-label="Edit">
            <EditIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(EmployeeInfo);
