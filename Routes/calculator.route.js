const express = require("express");
const calculateRoute = express.Router();

calculateRoute.post("/", (req, res) => {
  try {
    let { AIA, IR, TotalYr } = req.body;
    let i=IR/100
    let MaturityValue = AIA*[((1 + i) ** TotalYr - 1) / i];
    let TotalInvestAmount=AIA*TotalYr
    let TotalInterset=MaturityValue-TotalInvestAmount
    res.status(200).send({MaturityValue,TotalInvestAmount,TotalInterset})
  } catch (error) {
    res.send(error)
  }
});


module.exports = { calculateRoute };

/**
 *  F = P[((1+i)n-1)/i]
 * Total Maturity Value(F) = P [({(1+i) ^n}-1)/i]
Total Maturity Value(F) = 1,00,000[({(1 + 0.071) ^ 15}-1)/0.071]
Total Maturity Value(F) = 25,32,343 

Total Investment Amount = Annual Instalment Amount * Total No. of Years
												= 1,00,000 * 15 = 15,00,000

Total Interest Gained = Total Maturity Value - Total Investment Amount
											= 25,32,343 - 15,00,000
											= 10,32,343
 */
