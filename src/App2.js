import React from 'react';
import {connect} from 'react-redux';
import {fetchShipmentsData} from './actions/actions';
import {Route, Routes} from "react-router-dom";
import ShipmentsTable from "./components/ShipmentsTable";
import MyForm from "./components/MyForm";

class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchShipmentsData());
    }

    render() {
        const {error, loading, shipments} = this.props;


        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            const shipments = require('./assets/data/shipments.json');
            return (
                    <div className="App">
                        <h4>Error: {error.message}  - Data loaded from file  </h4>
                        <Routes>
                            <Route path="/" element={<ShipmentsTable data={shipments}/>}/>
                            <Route path="/form" element={<MyForm/>}/>
                        </Routes>
                    </div>
            );
        }

        return (
            <div className="App">

                <h4>Connection successful - Data loaded from server</h4>

                <Routes>
                    <Route path="/" element={<ShipmentsTable data={shipments}/>}/>
                    <Route path="/form" element={<MyForm/>}/>
                </Routes>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const {error, loading, shipments} = state;
    return {
        error,
        loading,
        shipments,
    };
}

export default connect(mapStateToProps)(App);
