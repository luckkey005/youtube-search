import React from 'react';
import axios from 'axios';

class GetDataWithCallback extends React.Component {
    state = { dat: [] }
    constructor(props) {
        super(props);
        this.titleref = React.createRef();
        this.setState({
            dat: axios.get('https://computerera.co.in/wp-json/wp/v2/posts').then(response => {
                return response.data;
            })
        });
        this.getDat();
    }
    componentDidMount() {
        // this.getDat()
        //console.log(this.titleref.current)
    }
    getDat() {
        return this.state.dat.map(item => {
            return <div key={item.id}><a href={item.link} style={{ display: 'block' }}>{item.title.rendered}</a> <br /></div>
            console.log(item)
        });
    }

    render() {
        return <div >hai {this.getDat}</div>
    }
}
export default GetDataWithCallback;
