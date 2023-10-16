/* eslint-disable react/prop-types */
import { Component } from "react";

class DataView extends Component {
    constructor() {
        super()
    }
    render() {
        console.log(this.props)
        return (
            <>
                <h1 className="text-center">EMPLOYEE FEEDBACK DATA</h1>
                <div >
                    <div className="data">
                        {this.props.data.map((item, idx) => (
                            <h3 key={idx}>Name : {item.name} || Department : {item.depart} || Rating : {item.rating}</h3>
                        ))}
                    </div>
                </div>
                <div className="backBtn">
                    <button onClick={() => this.props.toggleComp()}>GO Back</button>
                </div>
            </>
        )
    }
}
export default DataView;