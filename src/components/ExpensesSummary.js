import React from 'react';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';
import numeral from 'numeral';



export const ExpensesSummary = ({expenseCount, expensesTotal}) => (
    <div>
        {
            expenseCount === 1 ? (
                <h1>{`You are viewing 1 expense totalling ${expensesTotal}`}</h1>
            ) : ( 
                <h1>{`You are viewing ${expenseCount} expenses totalling ${expensesTotal}`}</h1>
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        expensesTotal: numeral(selectExpensesTotal(selectExpenses(state.expenses, state.filters)) / 100).format('$0,0.00')
    };
};

export default connect(mapStateToProps)(ExpensesSummary);