/* @flow */
import moment from 'moment';

export default class RemainderTimeFilter {
  static NAME: string = 'remaindertime';

  static factory() {
    return (input) => {
      const today = new Date();
      const isToday = (today.toDateString() === new Date(input).toDateString());
      return (isToday) ? moment(input).format('HH:mm') : moment(input).format('LLLL');
    };
  }
}
