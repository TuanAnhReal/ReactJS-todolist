import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux_01/redux/actions';

class CounterApp extends React.Component {
    incClick = () => {
        this.props.increment(5);
    }
    decClick = () => {
        this.props.decrement(4);
    }

    render() {
        return (
            <>
                <h2>CHƯƠNG TRÌNH ĐẾM SỐ</h2>
                <h2>Tác giả: {this.props.user}</h2>
                <h2 style={{ color: 'red', fontSize: '20px' }}>Hiện hành: {this.props.count}</h2>
                <button onClick={this.incClick}>Tăng</button>
                <button onClick={this.decClick}>Giảm</button>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
        user: state.user.name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (num) => dispatch(actions.increment(num)), // {type:'INCREMENT', payload:num}
        decrement: (num) => dispatch(actions.decrement(num)), // {type:'DECREMENT', payload:num}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);