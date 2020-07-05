import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const WarrantyListItem = ({id, category, number, item, model, serialNumber, startDate, duration, invoice, other}) => (
    <tr>
        <th>
            <Link to={`/edit/${id}`}><img src="/images/edit.svg" className="svg"/></Link>
        </th>
        <th className="list__unbreakable">{category === 'buy' ? 'Kupno' : 'Sprzedaż'}</th>
        <th>{number}</th>
        <th>{item}</th>
        <th>{model}</th>
        <th>{serialNumber}</th>
        <th className="list__unbreakable">{moment(startDate).format('DD-MM-YYYY')}</th>
        <th>{duration}</th>
        <th>{invoice}</th>
        <th>{other}</th>
    </tr>
);

export default WarrantyListItem;