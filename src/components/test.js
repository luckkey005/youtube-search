import React from 'react';

class Test extends React.Component {
    render() {
        return (<p>{this.props.time.toLocaleString()}</p>);
    };
}

export default Test;