import './App.css';
import {Component} from "react";
import axios from "axios";
import ShipmentsTable from "./components/ShipmentsTable";
import {Route, Routes} from "react-router-dom";
import MyForm from "./components/MyForm";
import dataFromFile from './assets/data/shipments.json';


class App extends Component {

    state = {
        shipmentsData: []
    }

    url = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
    /*url = "/assets/data/shipments.json";*/

    componentDidMount() {
        axios.get(this.url)
            .then(res => {
                const data = res.data;
                this.setState({shipmentsData: data});
            })
            .catch(error => this.setState({shipmentsData: dataFromFile}));

    }


    render() {
        return (
            <div className="App">
{/*                <Routes>

                <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                </Routes>*/}

                <ShipmentsTable data={this.state.shipmentsData}/>
               {/* <MyForm/>*/}

            </div>
        );
    }
}

export default App;
