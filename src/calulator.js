import React from "react"
import Termommyter from "./termommyter"

export default class calulator extends React.Component {
    constructor() {
        super();
        this.state = {
            temperatyre: '',
            scale: 'c',
        }
    };


    handleFahrenheitChange = (temperatyre) => {
        this.setState({scale: 'f', temperatyre});
    };

    handleCelsiusChange = (temperatyre) => {
        this.setState({scale: 'c', temperatyre});
    };

    boilOrNot = () => {
        if (this.state.scale === 'c' && this.state.temperatyre >= 100) {
            return 'boil'
        } else if (this.state.scale === 'f' && this.state.temperatyre >= 212) {
            return 'boil'
        } else {
            return "not boil"
        }

    };
    toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;

    };
    toFahrengeit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    };
    tryToConvert = (temperatyre, convert) => {
        const input = parseFloat(temperatyre);
        if (Number.isNaN(input)) {
            return " ";
        }
        const output = convert(input);
        return output;
    };


    render() {
        const scale = this.state.scale;
        const temperatyre = this.state.temperatyre;
        const celsius = scale === 'f' ? this.tryToConvert(temperatyre, this.toCelsius) : temperatyre;
        const fahrenheit = scale === 'c' ? this.tryToConvert(temperatyre, this.toFahrengeit) : temperatyre;
        return (
            <div>
                <div>
                    <Termommyter
                        scale={'Celsius'}
                        temp={celsius}
                        change={this.handleCelsiusChange}

                    />

                </div>
                <div>
                    <Termommyter
                        scale={'Fahrenheit'}
                        temp={fahrenheit}
                        change={this.handleFahrenheitChange}
                    />


                </div>



                <div>Water was {this.boilOrNot()}</div>
                <div>{this.esliTemperaatura100()}</div>


            </div>
        )
    }
}