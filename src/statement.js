const plays = require("./data/plays.json");
const invoices = require("./data/invoices.json");

function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;
  const format = new Intl.NumberFormat("en-US",
                                        { style: "currency", 
                                          currency: "USD",
                                          minimumFractionDigits: 2 
                                        }
                                      ).format;

  invoice.performances.forEach(elem => {
    const play = plays[elem.playID];
    let thisAmount = 0;
    switch (play.type) {
      case "tragedy":
        thisAmount = 40000;
        if (elem.audience > 30) {
          thisAmount += 1000 * (elem.audience - 30);
        }
        break;
      case "comedy":
        thisAmount = 30000;
        if (elem.audience > 20) {
          thisAmount += 10000 + 500 * (elem.audience - 20);
        }
        thisAmount += 300 * elem.audience;
        break;
      default:
          throw new Error(`unknown type: ${play.type}`);
      }
  
      volumeCredits += Math.max(elem.audience - 30, 0);
      if ("comedy" === play.type)
       volumeCredits += Math.floor(elem.audience / 5);
  
      result += `  ${play.name}: ${format(thisAmount/100)} (${elem.audience} seats)\n`;
      totalAmount += thisAmount;
  });
  result += `Amount owed is ${format(totalAmount/100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;
}

console.log(statement(invoices[0], plays));