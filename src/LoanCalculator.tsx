import React from 'react'

export default function LoanCalculator() {
    return (
        <div className="form-item">
            <h2>Loan Calculator</h2>
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
    )
};


