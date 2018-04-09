import React, { Component } from "react"

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts"

const data2 = [
    { name: "Eric", percentage: 100 },
    { name: "Ryan", percentage: 70 },
    { name: "Ben", percentage: 75 },
    { name: "Aiden", percentage: 95 }
]

class ApartmentGraph extends Component {
    constructor() {
        super();

        this.domain = [
            [0, 100],
            [0, 150]
        ]

        this.title = [
            '% of Tasks Done on Time',
            'Total Karma Accumulated'
        ]

        this.state = {
            index: 0,
            data: [
                    [
                        { name: "Eric", dataPoint: 100 },
                        { name: "Ryan", dataPoint: 70 },
                        { name: "Ben", dataPoint: 75 },
                        { name: "Aiden", dataPoint: 95 }
                    ],
                    [
                        {name: "Eric", dataPoint: 50 },
                        {name: "Ryan", dataPoint: 60},
                        {name: "Ben", dataPoint: 100},
                        {name: "Aiden", dataPoint: 40}
                    ],

                ]
        }
    }

    handleSelect = e => {
        this.setState({
            index: e.target.value
        })
    }

    render() {
        const { index, data } = this.state;
        console.log( index, data);
        return (
            <div style={{
                backgroundColor: "white",
                marginRight: "12px",
                border: "1px solid #D4D4D5",
                borderRadius: "5px"
            }}>
                <div>
                    <h1 style={{ lineHeight: "1.5em" }}>
                        {this.title[index]}
                    </h1>
                    <select name='jesus take the wheel' onChange={this.handleSelect}>
                        <option value={0}>tasks</option>
                        <option value={1}>karma</option>
                    </select>
                </div>
                <BarChart
                    width={550}
                    height={300}
                    data={data[index]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={this.domain[index]} />
                    <Tooltip />
                    <Bar dataKey={"dataPoint"} fill="#8BBFD5" />
                </BarChart>
            </div>
        )
    }
}

export default ApartmentGraph

// <Legend />
