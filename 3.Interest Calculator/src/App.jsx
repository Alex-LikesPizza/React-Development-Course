import { useState } from 'react';
import { calculateInvestmentResults, formatter } from './util/investment';

import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result'

const INITIAL_INVESTMENT_RESULTS = {
  initialInvestment: '',
  annualInvestment: '',
  expectedReturn: '',
  duration: '',
}

function deriveData (investmentResults){
  const annualData = calculateInvestmentResults(investmentResults);
  const table = annualData.map(item => {
    const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - (annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment);
    const totalAmountInvested = item.valueEndOfYear - totalInterest;
    return(
      <tr key={item.year}>
        <td>{item.year}</td>
        <td>{formatter.format(item.valueEndOfYear)}</td>
        <td>{formatter.format(item.interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(totalAmountInvested)}</td>
      </tr>
    )}
  );
  return table;
}

function App() {

  const [investmentResults, setInvestmentsResults] = useState(INITIAL_INVESTMENT_RESULTS);

  function handleFormChange(newInvestmentResults){
    setInvestmentsResults({...newInvestmentResults});
  }
  
  
  return (
    <>
      <Header />
      <Form handleFormChange={handleFormChange} investmentResults={investmentResults} />
      <Result listData={deriveData(investmentResults)} />
    </>
  )
}

export default App
