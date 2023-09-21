import { useState } from "react"
import PropTypes from 'prop-types'
import classes from './InvestmentCaculatorForm.module.css'

const InvestmentCaculatorForm = ({ calculateInvestment }) => {
    const [investmentValue, setInvestmentValue] = useState({
        currentSavings: 10000,
        yearlySavings: 3, expectedInterest: 12, investmentDuration: 10
    })

    const reset = () => {
        setInvestmentValue({
            currentSavings: "",
            yearlySavings: "", expectedInterest: "", investmentDuration: ""
        })
    }

    const handleInputChange = (e) => {
        if (e.target.id === 'current-savings') {
            setInvestmentValue((prevState) => { return { ...prevState, currentSavings: e.target.value } })
        }
        if (e.target.id === 'yearly-contribution') {
            setInvestmentValue((prevState) => { return { ...prevState, yearlySavings: e.target.value } })
        }
        if (e.target.id === 'expected-return') {
            setInvestmentValue((prevState) => { return { ...prevState, expectedInterest: e.target.value } })
        }
        if (e.target.id === 'duration') {
            setInvestmentValue((prevState) => { return { ...prevState, investmentDuration: e.target.value } })
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (investmentValue.currentSavings === '' ||
            investmentValue.expectedInterest === '' ||
            investmentValue.investmentDuration === '' ||
            investmentValue.yearlySavings === '') return
        calculateInvestment(investmentValue)
    }
    return (
        <div>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes["input-group"]}>
                    <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input type="number" id="current-savings" value={investmentValue.currentSavings} onChange={handleInputChange} />
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input type="number" id="yearly-contribution" value={investmentValue.yearlySavings} onChange={handleInputChange} />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label htmlFor="expected-return">
                            Expected Interest (%, per year)
                        </label>
                        <input type="number" id="expected-return" value={investmentValue.expectedInterest} onChange={handleInputChange} />
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input type="number" id="duration" value={investmentValue.investmentDuration} onChange={handleInputChange} />
                    </p>
                </div>
                <p className={classes["actions"]}>
                    <button type="reset" className={classes["buttonAlt"]} onClick={reset}>
                        Reset
                    </button>
                    <button type="submit" className={classes["button"]}>
                        Calculate
                    </button>
                </p>
            </form >
        </div >
    )
}

InvestmentCaculatorForm.propTypes = {
    calculateInvestment: PropTypes.func,
}

export default InvestmentCaculatorForm