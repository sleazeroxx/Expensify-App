//cannot use import moment from 'moment'; instead use:
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};