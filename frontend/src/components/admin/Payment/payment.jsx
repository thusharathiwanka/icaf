import React from 'react'
import {MdCreditCard, MdLockOutline, MdDateRange} from 'react-icons/md'

const payment = () => {

    const [CardDetails, setCardDetails] = useState("");


    return (
        <div>
        <form className="cdForm">
          <label label>card number</label>
          <br />
          <input
            type="text"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            onChange={(e) => setCardDetails({...CardDetails, number:e.target.value})}
            className="numberInput"
            required
          />
          <MdCreditCard className="cardIcon" />
          <br />
          <label>expiration date</label>
          <label className="cvc">cvc</label>
          <br />
          <input
            type="text"
            placeholder="(MM/YY)"
            onChange={(e) => setCardDetails({...CardDetails, date:e.target.value})}
            className="dateInput"
            required
          />
          <MdDateRange className="dateIcon" />
          <input
            type="text"
            placeholder="cvc"
            onChange={(e) => setCardDetails({...CardDetails, cvc:e.target.value})}
            className="cvcInput"
            required
          />
          <MdLockOutline className="lockIcon" />
          <br />
          <button
            type="submit"
            onClick={console.log("onclick")}
            className="payBt"
          >
            PAY
          </button>
        </form>
        </div>
    )
}

export default payment
