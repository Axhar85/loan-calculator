import './LoanCalculator.css';
import LoanJS from "loanjs";
import { useState } from 'react';

export default function LoanCalculator() {
    const [value, setvalue] = useState({
        "loan-amount": 1,
        "loan-term": 2,
        "intrest-rate": 3
    });
    const [installments, setInstallments] =  useState([]);
    const handleSubmit = (event: any) => {
        event.preventDefault();
        calculate(100000, 30, 4);
    };
    const calculate = (amount: number, years: number, rate: number) => {
        var loan = new LoanJS.Loan(amount, years * 12, rate);
        setInstallments(loan.installments)

    };
    const amountFormat = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

    return (
        <div> 
        <form onSubmit={handleSubmit}> 
            <h1>Loan Calculator</h1>
        <div className="form-item">
            <h2>Loan Amount</h2>
            <div className="form-input"> 
                <input 
                    type="number"
                    name="loan-amount"
                    placeholder="0"
                    value={value["loan-amount"]}
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
                    value={value["intrest-rate"]}
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
                value={value["loan-term"]}
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
        {!!installments?.length && (
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Payment Amount</th>
              <th>Interest Paid</th>
              <th>Principal Paid</th>
              <th>Remain</th>
            </tr>
          </thead>

          <tbody>
            {installments.map((i: any, ind: number) => (
              <tr key={ind}>
                <td>{ind}</td>
                <td>{amountFormat(i.installment)}</td>
                <td>{amountFormat(i.interest)}</td>
                <td>{amountFormat(i.capital)}</td>
                <td>{amountFormat(i.remain)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
        </div>
        
    )
};


