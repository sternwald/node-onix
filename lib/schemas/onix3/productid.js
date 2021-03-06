var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'ProductIdentifier',
    fields: {
        'type': {
            tag: 'ProductIDType',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        'value': {
            tag: 'IDValue',
            transform: String
        }
    },
    array: true,
    map: {
        to: 'value'
    }
};
