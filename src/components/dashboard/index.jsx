import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSomeData } from './../../actions/dashboard';

class Dashboard extends Component {
    // constructor() {
    //     this.state = {
    //         testDate: {}
    //     }
    // }

    componentDidMount() {
        this.props.setTestData();
    }
    
    render() {
        return (
            <div className="whole-dashboard">
               <p>Penis</p>
            </div>
        );
    }
}

const mapStateToProps = ({ dashboard }) => {
    return {
        testData: dashboard.testData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTestData: () => dispatch(getSomeData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

