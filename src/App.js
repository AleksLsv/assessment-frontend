import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {deleteShipment, fetchShipmentsData} from './actions/actionCreators';
import {Route, Routes} from "react-router-dom";
import ShipmentsTable from "./components/ShipmentsTable";
import MyForm from "./components/MyForm";


class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchShipmentsData());
    }

    handleDelete = (orderNo) => {
        this.props.dispatch(deleteShipment(orderNo));
    };


    render() {
        const {error, loading, shipments, loadedFromFile} = this.props;


        if (loading) {
            return <div>Loading...</div>;
        }

        if (error && !loadedFromFile) {
            return <div>
                <h4>Error: {error.message} </h4>
            </div>;
        }

        return (
            <div className="App">
                {(loadedFromFile) ? (
                    <h4>Error: {error.message} - Data loaded from file </h4>
                ) : (
                    <h4>Connection successful - Data loaded from server</h4>
                )}

                <Routes>
                    <Route path="/" element={<ShipmentsTable data={shipments} onDelete={this.handleDelete}/>}/>
                    <Route path="/form" element={<MyForm/>}/>
                </Routes>
            </div>
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
        /*deleteShipment: (orderNo) => {
            dispatch(deleteShipment(orderNo));
        }*/
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
