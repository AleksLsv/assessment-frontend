import React from 'react';
import { connect } from 'react-redux';
import { fetchShipmentsData } from './actions/actions';
import {Route, Routes} from "react-router-dom";
import ShipmentsTable from "./components/ShipmentsTable";
import MyForm from "./components/MyForm";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";

class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchShipmentsData());
    }

    render() {
        const { error, loading, shipments } = this.props;

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
/*            <ul>
                {shipments.map((shipment) => (
                    <li key={shipment.orderNo}>{shipment.customer}</li>
                ))}
            </ul>*/

            <div className="App">

                <Routes>
                    <Route path="/" element={<ShipmentsTable data={shipments}/>}/>
                    <Route path="/form" element={<MyForm/>}/>
                </Routes>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { error, loading, shipments } = state;
    return {
        error,
        loading,
        shipments,
    };
}

export default connect(mapStateToProps)(App);
