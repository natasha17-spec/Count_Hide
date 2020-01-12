import React from 'react';
import './App.css';




class Value extends React.Component {

    render = () => {

        return (

            <div className='middle'>
                {this.props.count && <div>
                    <span>{this.props.count_start}</span>
                    <button onClick={this.props.count_value}>ink</button>
                    <button onClick={this.props.setToZero}>reset</button>
                    <button onClick={this.props.onSetVisible}>set</button>
                </div>}

            </div>
        )
    }
}

export default Value;

