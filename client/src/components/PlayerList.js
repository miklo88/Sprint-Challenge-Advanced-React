import React, { Component } from 'react';
import axios from 'axios';
import Player from './Player';

export default class PlayersList extends Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/players`)
        .then(res => {
            console.log("Results", res)
            this.setState({players: res.data})
        })
        .catch(err => {
            console.log("Error", err)
        })
    }

    
    render() {
        return (
            <div>
                {this.state.players.map((person, index) => {
                    return (
                        <Player key={index} person={person} />
                    )
                })}
            </div>
        )
    }
}