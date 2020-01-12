import React from 'react';
import './App.css';




class Setting extends React.Component {
    render = () => {
        debugger
        let classInputSetColor = this.props.min < 0 || this.props.min === "" || this.props.min >= this.props.max ? 'btn_error': '';

        return (
            <div className='counters'>
                <div className='span_input_btn'>
                    <div className='span_input'>
                        <div className='span_input_one'>
                            <span className={classInputSetColor}>maxValue</span> <input onChange={this.props.maxValue} value={this.props.max}
                                                         type='number'/>
                        </div>
                        <div className='span_input_one'>
                            <span className={classInputSetColor}>minValue</span> <input onChange={this.props.minValue} value={this.props.min}
                                                         type="number"/>
                        </div>
                    </div>
                    <div className='btn'>
                        <button className={classInputSetColor} onClick={this.props.onCountVisible}>set</button>

                    </div>
                </div>
            </div>

        )
    }
}

export default Setting;

