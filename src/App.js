import './App.css';
import {Component} from "react";
import axios from "axios";
import ShipmentsTable from "./components/ShipmentsTable";
import {Route, Routes} from "react-router-dom";
import MyForm from "./components/MyForm";

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
{/*                <Routes>

                <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                </Routes>*/}

                {/*<ShipmentsTable data={this.state.shipmentsData}/>*/}
                <MyForm/>

            </div>
        );
    }
}

export default App;
