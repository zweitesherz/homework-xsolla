import React from 'react';


// import style from './styles.css';

import logoSrc from './logo.png';


import stLess from './style.less'

function App() {

    return <div className={stLess.message}><img className={stLess.logo} alt="Xsolla2" src={logoSrc}/>Hello Xsolla school!</div>
}

export default App;

