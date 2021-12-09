import './LoanCalculator.css';
import LoanJS from "loanjs";
import { useState } from 'react';

export default function LoanCalculator() {
    const [installments, setInstallments] =  useState([]);
    const handleSubmit = (event: any) => {
        event.preventDefault();
        calculate(100000, 30, 4);
    };
    const calculate = (amount: number, years: number, rate: number) => {
        var loan = new LoanJS.Loan(amount, years * 12, rate);
        setInstallments(loan.installments)
        console.log(setInstallments)
    };
    

    return (
        <form onSubmit={handleSubmit}> 
            <h1>Loan Calculator</h1>
        <div className="form-item">
            <h2>Loan Amount</h2>
            <div className="form-input"> 
                <input 
                    type="number"
                    name="loan-amount"
                    placeholder="0"
                />
            </div>
            </div>
            <div className="form-item">
            <h2>Intrest Amount</h2>
            <div className="form-input"> 
                <input 
                    type="number"
                    name="intrest-rate-amount"
                    placeholder="0"
                />
            </div>
        </div>
            <div className="form-item">
            <h2>Loan Terms (years)</h2>
             <div className="form-input"> 
                <input 
                type="number"
                name="loan-term-amount"
                placeholder="0"
                />
             </div>
        </div>
        < div className= "form-action">
                <input 
                type="submit"
                name="Calculate"
                className="calculate-button"
                />
            
        </div>
        </form>
        
    )
};


