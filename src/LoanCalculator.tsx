import React from 'react'

export default function LoanCalculator() {
    return (
        <div> 
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
        </div>
        
    )
};


