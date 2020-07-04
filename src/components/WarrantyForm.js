import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.warranty ? props.warranty.category : 'buy',
            number: props.warranty ? props.warranty.number : '',
            item: props.warranty ? props.warranty.item : '',
            model: props.warranty ? props.warranty.model : '',
            serialNumber: props.warranty ? props.warranty.serialNumber : '',
            startDate: props.warranty ? moment(props.warranty.startDate) : moment(),
            duration: props.warranty ? props.warranty.duration : 12,
            invoice: props.warranty ? props.warranty.invoice : '',
            other: props.warranty ? props.warranty.other : '',
            calendarFocused: false,
            error: ''
        }
    };

    onCategoryChange = (e) => {
        const category = e.target.value;
        this.setState(() => ({ category }));
    };

    onNumberChange = (e) => {
        const number = e.target.value;
        this.setState(() => ({ number }));
    };

    onItemChange = (e) => {
        const item = e.target.value;
        this.setState(() => ({ item }));
    };

    onModelChange = (e) => {
        const model = e.target.value;
        this.setState(() => ({ model }));
    };

    onSerialNumberChange = (e) => {
        const serialNumber = e.target.value;
        this.setState(() => ({ serialNumber }));
    };

    onDateChange = (startDate) => {
        if (startDate) this.setState(() => ({ startDate }))
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    };

    onDurationChange = (e) => {
        const duration = e.target.value;
        if (duration.isInteger()) {
            this.setState(() => ({ duration }));
        }
    };

    onInvoiceChange = (e) => {
        const invoice = e.target.value;
        this.setState(() => ({ invoice }));
    };

    onOtherChange = (e) => {
        const other = e.target.value;
        this.setState(() => ({ other }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.number || !this.state.duration) {
            this.setState(() => ({ error: 'Wypełnij wymagane pola.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                category: this.state.category,
                number: this.state.number,
                item: this.state.item,
                model: this.state.model,
                serialNumber: this.state.serialNumber,
                startDate: this.state.startDate.valueOf(),
                duration: this.state.duration,
                invoice: this.state.invoice,
                other: this.state.other,
            });
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error &&(<p>{this.state.error}</p>)}

                    <select value={this.state.category} onChange={this.onCategoryChange}>
                        <option selected value="buy">Kupno</option>
                        <option value="sell">Sprzedaż</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Numer gwarancji"
                        autoFocus
                        value={this.state.number}
                        onChange={this.onNumberChange}
                    />

                    <input
                        type="text"
                        placeholder="Przedmiot"
                        value={this.state.item}
                        onChange={this.onItemChange}
                    />

                    <input
                        type="text"
                        placeholder="Model"
                        value={this.state.model}
                        onChange={this.onModelChange}
                    />

                    <input
                        type="text"
                        placeholder="Serial Number"
                        value={this.state.serialNumber}
                        onChange={this.onSerialNumberChange}
                    />

                    <SingleDatePicker
                        date={this.state.startDate}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        isOutsideRange={() => false}
                        showClearDates={true}
                        numberOfMonths={1}
                    />

                    <input
                        type="number"
                        placeholder="Okres gwarancji"
                        value={this.state.duration}
                        onChange={this.onDurationChange}
                    />

                    <input
                        type="text"
                        placeholder="Numer faktury"
                        value={this.state.invoice}
                        onChange={this.onInvoiceChange}
                    />

                    <input
                        type="text"
                        placeholder="Inne"
                        value={this.state.other}
                        onChange={this.onOtherChange}
                    />

                    <div>
                        <button>Zapisz</button>
                    </div>
                </form>
            </div>
        );
    };
};