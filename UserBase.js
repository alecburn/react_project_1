import React, {Component} from 'react';

class UserItem extends Component {
    state = {
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'http://github.com/mojombo'
    };

    render() {
        const {login, avatar_url, html_url} = this.state;

        return (
            <div claaName='carb text-center'>
                <img
                    src={this.state.avatar_url}
                    alt=''
                    className='round-img'
                    style={{width: '60px'}}
                />
                <h3>{this.state.login}</h3>

                <div>
                    <a href={this.state.html_url} className='btn btn-dark btn sm my-1'>
                        More
                    </a>
                </div>
            </div>
        );
    }
}


export default UserItem;