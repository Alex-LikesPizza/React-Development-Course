
function Form({handleFormChange, investmentResults}) {

  function handleChange(e){
    const newResult = {...investmentResults};
    newResult[e.target.dataset.section] = +e.target.value;
    if(e.target.dataset.section === "duration") newResult[e.target.dataset.section] = Math.abs(+e.target.value);
    handleFormChange(newResult);
    console.log(newResult);
  }


  return (
    <form id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input data-section="initialInvestment" onChange={handleChange} type="number" value={investmentResults.initialInvestment} />
        </div>
        <div>
          <label>Annual Investment</label>
          <input data-section="annualInvestment" onChange={handleChange} type="number" value={investmentResults.annualInvestment} />
        </div>
      </div>

      <br />

      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input data-section="expectedReturn" onChange={handleChange} type="number" value={investmentResults.expectedReturn} />
        </div>
        <div>
          <label>Duration</label>
          <input data-section="duration" onChange={handleChange} type="number" value={investmentResults.duration} />
        </div>
      </div>
    </form>
  )
}

export default Form