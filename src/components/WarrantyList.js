import React from 'react';
import {connect} from "react-redux";
import WarrantyListItem from './WarrantyListItem';
import getVisibleWarranties from '../selectors/getVisibleWarranties'

export const WarrantyList = (props) => (
    <div className="content-container">
        <table>
            <thead className="list-header">
            <tr>
                <th>Edycja</th>
                <th>K/S</th>
                <th>Numer Stickera</th>
                <th>Przedmiot</th>
                <th>Model</th>
                <th>Numer Seryjny</th>
                <th>Data</th>
                <th>Okres Gwarancji</th>
                <th>Faktura</th>
                <th>Inne</th>
            </tr>
            </thead>
            <tbody className="list-body">
            {props.warranties.length === 0 ? (
                <div>Brak gwarancji</div>
            ) : (
                props.warranties.map((warranty) => {
                    return <WarrantyListItem key={warranty.id} {...warranty}/>
                }))
            }
            </tbody>
        </table>
    </div>
);

const mapStateToProps = (state) => {
    return {
        warranties: getVisibleWarranties(state.warranties, state.filters)
    };
};

export default connect(mapStateToProps)(WarrantyList)



