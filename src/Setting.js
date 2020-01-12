import React from 'react';
import './App.css';




class Setting extends React.Component {


    render = () => {

        return (
           <div>
                {this.props.set && <div>
                   <span>maxValue</span> <input onChange={this.props.maxValue} value={this.props.max} type='number'/>
                   <span>minValue</span> <input onChange={this.props.minValue} value={this.props.min} type="number"/>
                    <button   onClick={this.props.onCountVisible}>set</button>
                </div>}
           </div>

        )
    }
}

export default Setting;

