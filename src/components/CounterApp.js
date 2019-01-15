import React from 'react';

export default class CounterApp extends React.Component {
    state = {
        count: 0
    };

    componentDidMount() {
        const stringCount = localStorage.getItem( 'count' );
        const count = parseInt( stringCount, 10 );
        
        if ( ! isNaN( count ) ) {
            this.setState( () => ( { count } ) );
        }
    }

    componentDidUpdate( prevProps, prevState ) {
        if ( prevState.count !== this.state.count ) {
            localStorage.setItem( 'count', this.state.count );
        }
    }

    handleAddOne = () => {
        this.setState( ( prevState ) => ( { count: prevState.count + 1 } ) );
    }

    handleMinusOne = () => {
        this.setState( ( prevState ) => ( { count: prevState.count - 1 } ) );
    }

    handleReset = () => {
        this.setState( () => ( { count: 0 } ) );
    }

    render() {
        return (
            <div>
                <h1>Counter: { this.state.count }</h1>
                <button onClick={ this.handleAddOne }>+</button>
                <button onClick={ this.handleMinusOne }>-</button>
                <button onClick={ this.handleReset }>reset</button>
            </div>
        )
    }
}