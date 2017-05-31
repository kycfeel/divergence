import React, { Component } from 'react';
import './App.css';
import Whatamidoing from './Whatamidoing.js';
import ReactCountdownClock from 'react-countdown-clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Task">
        <Whatamidoing task = {prompt("자리비움의 목적이 무엇인가요?")}
                      task_message = {prompt("추가로 남길 메시지가 있으신가요?", "타이머가 끝나기 전까지 돌아올게요.")}/>
        </div>
        <div className="App-Countdown">
        <ReactCountdownClock seconds={prompt("몇초 뒤 돌아올 예정이신가요?")}
                  color="#27a0f4"
                  alpha={0.9}
                  size={210}
                  onComplete="시간 만료!"/>
        </div>
        <div className="App-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">divergence</h5>
                <p class="grey-text text-lighten-4">잠시 자리를 비울 때 다른 사람들에게 내가 왜 나갔고, 언제 돌아오는지 알려줄 수 있어요. <br/>내가 입력하는 모든 정보는 암호화되어 올라가고, 브라우저를 닫으면 완전히 삭제됩니다. 안심하고 사용하세요.</p>

              </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          <br/><a class="white-text" href="https://github.com/kycfeel/divergence">GitHub</a> 에서 소스코드를 확인해 보세요. Made by <a class="orange-text text-lighten-3" href="https://twitter.com/kycfeel">kycfeel</a>, Theme from <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize.</a>
          </div>
        </div>
      </div>
    </div>

    );
  }
}

export default App;
