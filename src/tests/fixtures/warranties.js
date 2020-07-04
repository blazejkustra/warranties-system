import moment from 'moment';

export default [{
    id: '0',
    category: 'buy',
    number: 1234,
    item: 'Laptop',
    model: 'macbook pro',
    serialNumber: '123 989',
    startDate: moment(0).add(4, 'days').valueOf(),
    duration: 12,
    invoice: 'abc123',
    other: ''
}, {
    id: '1',
    category: 'sell',
    number: 123,
    item: 'PC',
    model: 'master race',
    serialNumber: '19997664352',
    startDate: moment(0).add(12, 'days').valueOf(),
    duration: 6,
    invoice: 'abc123123',
    other: 'nothing more than other'
}]

