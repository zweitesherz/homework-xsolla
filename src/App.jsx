
import { hot } from 'react-hot-loader/root';

import React from 'react';



import logoSrc from './logo.png';

import stLess from './style.less';





function App() {

    return <div className={stLess.message}>
        <img className={stLess.logo} alt="Xsolla2" src={logoSrc}/>
        Hello Xsolla school, hello!
        <br/>

        <input/>
    </div>
}

export default hot(App);

