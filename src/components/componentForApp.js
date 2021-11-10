import React from 'react';

import Test from './test';
import CallBack from './callBack';
import GetFromApi from './getFromApi';
import GetDataWithCallback from './getDataWithCallback';

class ComponentForApp extends React.Component {
    // passing state as a prop example
    // state = { timing: new Date() }

    // componentDidMount() {
    //     this.timer = setInterval(() => this.tick(), 1000);
    // }
    // tick() {
    //     this.setState({ timing: new Date() });
    // }
    // render() {
    //     return (
    //         <Test time={this.state.timing} />
    //     );
    // }

    // passing function as prop example
    // textValueChange(term) {
    //     console.log(term);
    // }
    // render() {
    //     return (
    //         <CallBack afterSubmit={this.textValueChange} />
    //     );
    // }

    // get things from api
    // render() {
    //     return (
    //         <GetFromApi />
    //     );
    // }

    render() {
        return <GetDataWithCallback />;
    }

}

export default ComponentForApp;
