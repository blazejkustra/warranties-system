import React from 'react';
import { connect } from 'react-redux';
import WarrantyForm from './WarrantyForm';
import { startAddWarranty } from '../actions/warranty';

export class WarrantyAddPage extends React.Component {
    onSubmit = (warranty) => {
        this.props.startAddWarranty(warranty);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <WarrantyForm onSubmit={this.onSubmit} />
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
   startAddWarranty: (warranty) => dispatch(startAddWarranty(warranty))
});

export default connect(undefined, mapDispatchToProps)(WarrantyAddPage)