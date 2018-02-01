import React, {Component} from 'react';

// Components

import Main from  "./Main";
import Footer from "./Component/Footer/Footer";

class App extends Component {
    render() {
        return(
            <div>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default App;

