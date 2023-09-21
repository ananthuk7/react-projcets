import { useState } from 'react';
import Header from './componenets/Header'
import InvestmentCaculatorForm from './componenets/InvestmentCaculatorForm';
import InvestmentResultTable from './componenets/InvestmentResultTable';


function App() {
  const [yearlyData, setyearlyData] = useState([])
  const [userInput, setUserInput] = useState(null)
  const calculateHandler = (userInput) => {
    setUserInput(userInput)

    let currentSavings = +userInput["currentSavings"];
    const yearlyContribution = +userInput["yearlySavings"];
    const expectedReturn = +userInput["expectedInterest"] / 100;
    const duration = +userInput["investmentDuration"];

    const yearData = []
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      })
    }
    setyearlyData(yearData);
  };



  return (
    <div>
      <Header />
      <InvestmentCaculatorForm calculateInvestment={calculateHandler} />
      {!userInput && <p style={{ textAlign: 'center' }}> No investment found</p>}
      {userInput && <InvestmentResultTable yearlyData={yearlyData} initialInvestment={userInput['currentSavings']} />}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
