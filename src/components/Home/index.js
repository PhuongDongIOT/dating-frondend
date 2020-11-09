import React from 'react';

import styles from "./style.module.css";
import love from "./love.svg";
import dating from "./lover-dating.png";

import Register from '../Register';

class Home extends React.Component {
  state = {
    seen: false
    };
   togglePop = () => {
    this.setState({
     seen: !this.state.seen
    });
   };
  render() {
    return (
      <div className={styles.heroImage}>
        <div className={styles.logo}>
          <img src={love} />
        </div>
        <div className={styles.row}>
          <div className={styles.heroTextLeft}>
            <h1>Qué es Lorem Ipsum</h1>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum es simplemente el texto de relleno
              de las imprentas y archivos de texto. Lorem Ipsum es simplemente
              el texto de relleno de las imprentas y archivos de texto.
            </p>
          </div>
          <div className={styles.heroTextRight}>
            <img src={dating} />
            <div className={styles.buttonText}>
                <button>REGISTER</button>
                <a  onClick={this.togglePop}>Bạn đã có tài khoản !!</a>
            </div>
          </div>
        </div>
        {this.state.seen ? <Register toggle={this.togglePop} /> : null}
      </div>
    );
  }
}

export default Home;
