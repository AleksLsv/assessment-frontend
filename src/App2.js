import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {deleteShipment, fetchShipmentsData} from './actions/actions';
import {Route, Routes} from "react-router-dom";
import ShipmentsTable from "./components/ShipmentsTable";
import MyForm from "./components/MyForm";


class App2 extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchShipmentsData());
    }

    handleDelete = (orderNo) => {
        this.props.dispatch(deleteShipment(orderNo));
    };


    render() {
        const {error, loading, shipments} = this.props;


        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            /*return <div>Error: {error.message}</div>;*/
            const shipments = require('./assets/data/shipments.json');
            return (
                    <div className="App">
                        <h4>Error: {error.message}  - Data loaded from file  </h4>
                        <Routes>
                            <Route path="/" element={<ShipmentsTable data={shipments} onDelete={this.handleDelete}/>}/>
                            <Route path="/form" element={<MyForm/>}/>
                        </Routes>
                    </div>
            );
        }

        return (
            <div className="App">

                <h4>Connection successful - Data loaded from server</h4>

                <Routes>
                    <Route path="/" element={<ShipmentsTable data={shipments} onDelete={this.handleDelete}/>}/>
                    <Route path="/form" element={<MyForm/>}/>
                </Routes>

            </div>

            /*<ul>
                {shipments.map((shipment) => (
                    <li key={shipment.orderNo}>{shipment.customer}</li>
                ))}
            </ul>*/
        );
    }
}

function mapStateToProps(state) {
    const {error, loading, shipments, loadedFromFile} = state.shipments;
    return {
        error,
        loading,
        shipments,
        loadedFromFile,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        deleteShipment: (orderNo) => {
            dispatch(deleteShipment(orderNo));
        }
    }
}

//export default connect(mapStateToProps)(App2);
export default connect(mapStateToProps, mapDispatchToProps)(App2);
