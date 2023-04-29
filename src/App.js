import './App.css';
import {Component} from "react";

import axios from "axios";
import ShipmentsTable from "./components/ShipmentsTable";
import {Route, Routes} from "react-router-dom";
import MyForm from "./components/MyForm";
import dataFromFile from './assets/data/shipments.json';
import Test2 from "./components/Test2";
import Test1 from "./components/Test1";
import {connect} from "react-redux";


class App extends Component {

    state = {
        shipmentsData: []
    }

    url = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
    url1 = "shipments.json";

    //url = "/assets/data/shipments.json";

    componentDidMount() {
        axios.get(this.url)
            .then(res => {
                const data = res.data;
                this.setState({shipmentsData: data});
            })
            .catch(error => this.setState({shipmentsData: dataFromFile}));


    }


    render() {

        const name = 'John';
        const age = 30;


        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<ShipmentsTable data={this.state.shipmentsData}/>}/>
                    <Route path="/form" element={<MyForm/>}/>
                    <Route path="/test1" element={<Test1 name={name} age={age}/>}/>
                    <Route path="/test2" element={<Test2/>}/>

                </Routes>

            </div>

        );
    }
}


const mapStateToProps = (state) => ({
    shipments: state.shipments,
    loading: state.loading,
    error: state.error,
});

export default connect(mapStateToProps)(App);

/*export default App;*/
