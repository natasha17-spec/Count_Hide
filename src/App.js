import React from 'react';
import './App.css';
import Value from "./Value";
import Setting from "./Setting";




class App extends React.Component {
    state = {
        count_start: 0,
        min: 0,
        max: 20,
        count: true,
        set: false
    };
    componentDidMount() {
        this.restoreState()
    }

    saveState = () =>{
    let stateAsString = JSON.stringify(this.state);
    localStorage.setItem('count',stateAsString);
};
    restoreState = () => {
        let state = {
            count_start: 0,
            min: 0,
            max: 50,
            error: false,
            set: false,

        };

        let stateAsString = localStorage.getItem('count');
        if (stateAsString != null) {
            state = JSON.parse(stateAsString);}
        this.setState(state)};




    maxValue = (e) => {
        let max = e.target.value;
        this.setState({
                max: Number(max)
            }
        )
    };
    minValue = (e) => {
        let min = e.target.value;
        this.setState({
                min: Number(min)

            }
        )
    };


    setValue = () => {
        if (this.state.max > this.state.min && this.state.min >= 0) {
            this.setState({
                count_start: this.state.min,
                error: false,
                set: false
            },
                ()=>{
                    this.saveState()
                }
                )

        }
    };
    count_value = (newValue) => {
        if (this.state.count_start < this.state.max) {
            this.setState({
                    count_start: this.state.count_start + 1
                },
                ()=>{
                    this.saveState()
                }
            );
            if (this.state.count_start === this.state.max) {
                this.setState({
                    error: true,
                    set: false
                },
                    ()=>{
                        this.saveState()
                    }
                    )
            }
        }
    };
    setToZero = () => {
        this.setState({
                count_start: this.state.min
            },
            ()=>{
                this.saveState()
            }
        )
    };

    onSetVisible = () => {
        this.setState({
            count: false,
            set: true
        })
    };
    onCountVisible = () => {
        this.setState({
            count: true,
            set: false,
            count_start:this.state.min,
            min:this.state.min
        })
    };

    render = () => {
        return (
            <div>
                <Value
                    count_value={this.count_value}
                    count_start={this.state.count_start}
                   setToZero={this.setToZero}
                    onSetVisible={this.onSetVisible}
                />
                <Setting
                    maxValue={this.maxValue}
                    minValue={this.minValue}
                    min={this.min}
                    max={this.max}
                    onCountVisible={this.onCountVisible}
                    set={this.state.set}

                />
            </div>
        )

    }
}

export default App;

