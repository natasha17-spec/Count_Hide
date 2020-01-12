import React from 'react';
import './App.css';




class Value extends React.Component {

    render = () => {
        let classBtnColor = this.props.min < 0 || this.props.min === "" || this.props.min >= this.props.max ? 'btn_error': '';
        let disabled = this.props.min < 0 || this.props.min === "" || this.props.min >= this.props.max ? this.props.disabled===true: '';
        let classColor = this.props.count_start === this.props.max ? 'error':'';

        return (

            <div className='counters'>
                <div className='count_center'>
                    <div className='count_start_center'>
                    <div className='count_start'>
                        <span className={classColor}>{this.props.count_start}</span>
                    </div>
                    <button
                        disabled={disabled}
                        className={`${classBtnColor} ${classColor}`}
                        onClick={this.props.count_value}

                    >inc</button>
                    <button  className={classBtnColor} onClick={this.props.setToZero}>reset</button>
                    <button  className={classBtnColor} onClick={this.props.onSetVisible}>set</button>
                </div>
            </div>
            </div>

        )
    }
}

export default Value;

