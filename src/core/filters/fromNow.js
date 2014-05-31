import moment from 'moment';

/**
 * @ngInject
 */
export default function() {
    return function(dateString) {
        return moment(new Date(dateString)).fromNow();
    };
};