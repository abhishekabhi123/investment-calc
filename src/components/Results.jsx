import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData, "data");
  return <p>Results...</p>;
}
