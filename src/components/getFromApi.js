import React from 'react';
import { Markup } from 'interweave';
import axios from 'axios';

class GetFromApi extends React.Component {

    state = { list: [] }
    componentDidMount() {
        this.getUser();
    }

    async getUser() {
        try {
            const response = await axios.get('https://computerera.co.in/wp-json/wp/v2/posts');
            this.setState({ list: response.data });
        } catch (error) {
            console.error(error);
        }
    }

    getList = () => {
        return this.state.list.map((user) => {
            return (<div key={user.id} className="postDiv s6">
                <h2><a href={user.link}>{user.title.rendered}</a></h2>
                <Markup id={user.id} content={user.content.rendered}></Markup>
            </div>);
        });
    }
    render() {
        return (
            <div className="list">{this.getList()}</div>
        );
    }

}

export default GetFromApi;

