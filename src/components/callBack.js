import React from 'react';
import '../App.css';

class CallBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    //state = { term: '' }

    valChange = (e) => {
        // e.preventDefault();
        this.setState({ term: e.target.value });
    }

    formSubmit = (e) => {
        e.preventDefault();
        // alert();
        this.props.afterSubmit(this.state.term);
    }

    render() {
        return (
            <div className="center">
                <form onSubmit={this.formSubmit}>
                    <input type="text" value={this.state.term} onChange={this.valChange} />
                    <button type="submit">Go</button>
                </form>
            </div>
        );
    }
}

export default CallBack;