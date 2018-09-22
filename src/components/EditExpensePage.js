import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense); /* expense=updates */
        this.props.history.push('/');
    }
    onClick = (e) => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit} 
                />
                <button 
                    onClick={this.onClick}>Remove
                </button>
            </div>
        );
    }
};

// const EditExpensePage = (props) => {
//     return (
//         <div>
//             <ExpenseForm 
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     props.dispatch(editExpense(props.expense.id, expense ));
//                     props.history.push('/');
//                 }}
//             />
//             <button 
//                 onClick={(e) => {
//                     props.dispatch(removeExpense({ id: props.expense.id }));
//                     props.history.push('/');
//                 }
//             }>Remove</button>
//         </div>
//     );
// };

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

const mapStateToProps = (state, props) => {
    return {
        // adds expense prop, using current props to search the array
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
}; // The component above now has access to the expense:

// React router Renders the Higher Order Component, 
// the HOC passes the props through and allows us to add new ones

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);