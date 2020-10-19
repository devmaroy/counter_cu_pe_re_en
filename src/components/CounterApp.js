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
            <div className="container counter">
                <h1 className="counter__title">Counter</h1>
                <div className="app-body">
                    <button
                        className="button counter__control"
                        onClick={ this.handleAddOne }
                    >
                        +
                    </button>
                    <h2 className="counter__number">{ this.state.count }</h2>
                    <button
                        className="button counter__control"
                        onClick={ this.handleMinusOne }
                    >
                        -
                    </button>
                </div>
                <button
                    className="button button--link"
                    onClick={ this.handleReset }
                >
                    reset
                </button>
            </div>
        )
    }
}