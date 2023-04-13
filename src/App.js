import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import axios from "axios";
import ShipmentsTable from "./components/ShipmentsTable";

class App extends Component {

    state = {
        shipmentsData: []
    }

    url = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";

    componentDidMount() {
        axios.get(this.url)
            .then(res => {
                const data = res.data;
                this.setState({shipmentsData: data});
            });
    }



    render() {
        return (
            <div className="App">
              <ShipmentsTable data={this.state.shipmentsData}/>
            </div>
        );
    }
}

export default App;
