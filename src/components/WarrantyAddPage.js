import React from 'react';
import { connect } from 'react-redux';
import WarrantyForm from './WarrantyForm';
import { startAddWarranty } from '../actions/warranty';

export class WarrantyAddPage extends React.Component {
    onSubmit = (warranty) => {
        this.props.startAddWarranty(warranty);
        this.props.history.push('/');
    };

    onReturn = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Nowa Gwarancja</h1>
                    </div>
                </div>
                <div className="content-container">
                    <WarrantyForm onSubmit={this.onSubmit} />
                    <div>
                        <button className="button button--tertiary" onClick={this.onReturn}>Wróć</button>
                    </div>
                </div>

            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
   startAddWarranty: (warranty) => dispatch(startAddWarranty(warranty))
});

export default connect(undefined, mapDispatchToProps)(WarrantyAddPage)