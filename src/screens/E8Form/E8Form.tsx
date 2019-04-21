import React, { FC, useState } from 'react';
import { withStyles, createStyles, WithStyles, Theme } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Chip from '@material-ui/core/Chip';
import CancelSubmitionInfoCard from './CancelSubmitionInfoCard';
import ExpandableListTile from './ExpandableListTile';
import BottomMessageTile from './BottomMessageTile';

interface IProps extends WithStyles<typeof styles> {
  history?: any;
}
interface IState {
  value: 'submitNew' | 'submitCancelPrevious';
  duration: string;
}

const E8Form: FC<IProps> = props => {
  const [state, setState] = useState<IState>({
    value: 'submitNew',
    duration: '30 λεπτά',
  });
  const selectSubmitionType = (e: any) => setState({ ...state, value: e.target.value });
  const selectDuration = (value: string) => () =>
    setState({ ...state, duration: value });
  const durationOptions = [
    { key: 0, value: '30 λεπτά' },
    { key: 1, value: '1 ώρα' },
    { key: 2, value: '1 ώρα, 30 λεπτά' },
    { key: 3, value: '2 ώρες' },
    { key: 4, value: '2 ώρες, 30 λεπτά' },
    { key: 5, value: '3 ώρες' },
    { key: 6, value: 'Άλλο...' },
  ];
  return (
    <>
      <section className={props.classes.section}>
        <ExpandableListTile
          employeeName="Γιάννης Χιονίδης"
          initials="ΓΧ"
          vatNumber="129384569"
          workHours="08:00 - 16:00"
          divider
          button
        />
        <FormControl className={props.classes.formControl}>
          <FormLabel>Τύπος υποβολής</FormLabel>
          <RadioGroup
            aria-label="Submition type"
            name="submitionType"
            value={state.value}
            onChange={selectSubmitionType}
          >
            <FormControlLabel
              value="submitNew"
              control={<Radio />}
              label="Νέα υποβολή"
            />
            <FormControlLabel
              value="submitCancelPrevious"
              control={<Radio />}
              label="Ακύρωση τελευταίας υποβολής"
            />
          </RadioGroup>
        </FormControl>
        {state.value === 'submitNew' ? (
          <>
            <FormControl className={`${props.classes.formControl} `}>
              <FormLabel>Διάρκεια υπερωρίας</FormLabel>
              <div className={props.classes.chipsForm}>
                {durationOptions.map(option => (
                  <Chip
                    className={props.classes.chip}
                    key={option.key}
                    // color={option.value === state.duration ? 'secondary' : 'primary'}
                    color="primary"
                    label={option.value}
                    onClick={selectDuration(option.value)}
                    variant={state.duration === option.value ? 'default' : 'outlined'}
                  />
                ))}
              </div>
            </FormControl>
            {state.duration === 'Άλλο...' && (
              <div style={{ width: '100%', height: '3rem', background: 'white' }} />
            )}
          </>
        ) : (
          <CancelSubmitionInfoCard />
        )}
        <BottomMessageTile message="Y1 1293845692 129384569 16001700" />
      </section>
    </>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    section: {
      paddingBottom: theme.spacing.unit * 10,
    },
    formControl: {
      margin: theme.spacing.unit * 2,
      display: 'block',
    },
    chipsForm: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: theme.spacing.unit,
    },
    chip: {
      margin: theme.spacing.unit,
      fontSize: '1rem',
    },
  });

export default withStyles(styles)(E8Form);
