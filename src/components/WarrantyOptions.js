import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, setCategorySell, setCategoryAll, setCategoryBuy} from '../actions/filters';
import {Link} from "react-router-dom";

export class WarrantyOptions extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onCategoryChange = (e) => {
        switch (e.target.value) {
            case 'all':
                this.props.setCategoryAll()
                break;
            case 'buy':
                this.props.setCategoryBuy()
                break;
            case 'sell':
                this.props.setCategorySell()
                break;
        }
    };

    render() {
        return (
            //     <div className="content-container">
            //         <div className="page-header__actions">
            //         </div>
            //     </div>
            <div className="page-header">
                <div className="content-container">
                    <div className="input-group">

                        <div className="input-group__item">
                            <select
                                className="select"
                                value={this.props.filters.category}
                                onChange={this.onCategoryChange}>
                                <option value="all">Wszystkie</option>
                                <option value="buy">Kupno</option>
                                <option value="sell">Sprzedaż</option>
                            </select>
                        </div>

                        <div className="input-group__item">
                            <input
                                type="text"
                                className="text-input"
                                value={this.props.filters.text}
                                placeholder="Wyszukaj"
                                onChange={this.onTextChange}/>
                        </div>
                        <Link to="/create" className="button">Stwórz</Link>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setCategoryAll: () => dispatch(setCategoryAll()),
    setCategoryBuy: () => dispatch(setCategoryBuy()),
    setCategorySell: () => dispatch(setCategorySell()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WarrantyOptions);
