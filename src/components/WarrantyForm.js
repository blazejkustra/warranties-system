import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.warranty ? props.warranty.category : 'sell',
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
        if (!duration || duration.match(/^[0-9]*[1-9][0-9]*$/)) {
            this.setState(() => ({ duration: parseInt(duration) }));
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
                <form className="form" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} onSubmit={this.onSubmit}>
                    {this.state.error &&(<p className="form__error">{this.state.error}</p>)}

                    <select className="select" value={this.state.category} onChange={this.onCategoryChange}>
                        <option value="sell">Sprzedaż</option>
                        <option value="buy">Kupno</option>
                    </select>

                    <input
                        type="text"
                        className="text-input"
                        placeholder="Numer Stickera"
                        autoFocus
                        value={this.state.number}
                        onChange={this.onNumberChange}
                    />

                    <input
                        type="text"
                        className="text-input"
                        placeholder="Przedmiot"
                        value={this.state.item}
                        onChange={this.onItemChange}
                    />

                    <input
                        type="text"
                        className="text-input"
                        placeholder="Model"
                        value={this.state.model}
                        onChange={this.onModelChange}
                    />

                    <input
                        type="text"
                        className="text-input"
                        placeholder="Numer Seryjny"
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
                        displayFormat={() => "DD/MM/YYYY"}
                    />

                    <input
                        type="number"
                        className="text-input"
                        placeholder="Okres gwarancji"
                        value={this.state.duration}
                        onChange={this.onDurationChange}
                    />

                    <input
                        type="text"
                        className="text-input"
                        placeholder="Numer faktury"
                        value={this.state.invoice}
                        onChange={this.onInvoiceChange}
                    />

                    <input
                        type="text"
                        className="text-input"
                        placeholder="Inne"
                        value={this.state.other}
                        onChange={this.onOtherChange}
                    />

                    <div>
                        <button className="button" >Zapisz</button>
                    </div>
                </form>
            </div>
        );
    };
};