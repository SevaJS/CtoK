import React from "react"
import  m from'./App.module.css'




export default class termommyter extends React.Component {


    handlerChange = (e) => {

        this.props.change(e.target.value)
    };

    render() {
        return (
            <div className={m.input}>
                <div>Input temp on {this.props.scale}</div>
                <input
                    value={this.props.temp}
                    onChange={this.handlerChange}
                />
            </div>

        )
    }
}