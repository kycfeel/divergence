import React, { Component } from 'react';

class Whatamidoing extends Component {
    render() {
        return (
            <div>
              <h2>나는 지금 <a class="orange-text text-lighten-3">{this.props.task}</a> 중이에요!</h2>
              <h5>타이머가 끝나기 전까지 돌아올게요.</h5>
            </div>
        );
    }
}

export default Whatamidoing;
