import React from 'react';
import moment from 'moment';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
/**
 * This component comes from material-ui
 * documentation:
 * https://material-ui.com/components/pickers/
 */
// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

class DateAndTimePickers extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const timeStr = e.target.value;
    const { setValue } = this.props;
    setValue(new Date(timeStr));
  }

  render() {
    // const classes = useStyles();
    const { value } = this.props;
    const formattedDate = moment(value).format('YYYY-MM-DD[T]HH:mm:ss');
    return (
      // <form className={classes.container} noValidate>
      // <form noValidate>
        <TextField
          onChange={this.onChange}
          id="datetime-local"
          // label="Time Range"
          type="datetime-local"
          // defaultValue="2017-05-24T10:30"
          value={formattedDate}
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      // </form>
    );
  }
}

export default withRouter(DateAndTimePickers);

// export default function DateAndTimePickers(props) {
//   const classes = useStyles();
//   const { value, setValue } = props;
//   return (
//     <form className={classes.container} noValidate>
//       <TextField
//         onChange={onChange}
//         id="datetime-local"
//         // label="Time Range"
//         type="datetime-local"
//         defaultValue="2017-05-24T10:30"
//         value={value}
//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//     </form>
//   );
// }
