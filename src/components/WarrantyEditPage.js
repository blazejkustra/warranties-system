import React from 'react';
import {connect} from 'react-redux';
import WarrantyForm from './WarrantyForm';
import {startEditWarranty, startRemoveWarranty} from '../actions/warranty';
import OptionModal from "./OptionModal";

export class WarrantyEditPage extends React.Component {
    state = {
        selectedOptionRemove: undefined,
        selectedOptionReturn: undefined
    }

    handleClearSelectedOptionRemove = () => {
        this.setState(() => ({ selectedOptionRemove: undefined }));
    }

    handleClearSelectedOptionReturn = () => {
        this.setState(() => ({ selectedOptionReturn: undefined }));
    }

    onSubmit = (warranty) => {
        this.props.startEditWarranty(this.props.warranty.id, warranty);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.setState(() => ({ selectedOptionRemove: 'Czy na pewno chcesz usunąć?' }));
    };

    onRemoveConfirm = () => {
        this.props.startRemoveWarranty(this.props.warranty.id);
        this.props.history.push('/');
    };

    onReturn = () => {
        this.setState(() => ({ selectedOptionReturn: 'Czy na pewno chcesz wrócić?' }));
    };

    onReturnConfirm = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edycja</h1>
                    </div>
                </div>
                <div className="content-container">
                    <WarrantyForm warranty={this.props.warranty} onSubmit={this.onSubmit}/>
                    <div>
                        <button className="button button--secondary" onClick={this.onRemove}>Usuń</button>
                    </div>
                    <div>
                        <button className="button button--tertiary" onClick={this.onReturn}>Wróć</button>
                    </div>
                </div>
                <OptionModal
                    onConfirm={this.onRemoveConfirm}
                    selectedOption={this.state.selectedOptionRemove}
                    handleClearSelectedOption={this.handleClearSelectedOptionRemove}
                />
                <OptionModal
                    onConfirm={this.onReturnConfirm}
                    selectedOption={this.state.selectedOptionReturn}
                    handleClearSelectedOption={this.handleClearSelectedOptionReturn}
                />
            </div>
        );
    };
};

const mapStateToProps = (state, props) => ({
    warranty: state.warranties.find((warranty) => warranty.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    startEditWarranty: (id, warranty) => dispatch(startEditWarranty(id, warranty)),
    startRemoveWarranty: (id) => dispatch(startRemoveWarranty(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WarrantyEditPage)