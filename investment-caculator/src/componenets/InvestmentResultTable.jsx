import PropTypes from 'prop-types'
import currencyConverter from '../utils/currencyConverter'

import classes from './InvestmentResultTable.module.css'

const InvestmentResultTable = ({ yearlyData, initialInvestment }) => {
    return (
        <div><table className={classes["result"]}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {yearlyData.map((year) => <tr key={year.year}>
                    <td>{year.year}</td>
                    <td>{currencyConverter.format(year.savingsEndOfYear)}</td>
                    <td>{currencyConverter.format(year.yearlyInterest)}</td>
                    <td>{currencyConverter.format((year.savingsEndOfYear - (+initialInvestment) - year.yearlyContribution * year.year))}</td>
                    <td>{currencyConverter.format(((+initialInvestment) + year.yearlyContribution * year.year))}</td>
                </tr>)}

            </tbody>
        </table></div>
    )
}

InvestmentResultTable.propTypes = {
    yearlyData: PropTypes.array,
    initialInvestment: PropTypes.number
}

export default InvestmentResultTable