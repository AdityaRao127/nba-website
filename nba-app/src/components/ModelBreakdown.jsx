import logisticRegressionPic from '../images/logistic_regression_model_visualization.png';
import katex from 'katex';

const equation = `(Reg. Season Win\\% \\times 0.15) + (Effective Field Goal Percentage \\times 0.20) + (Defensive Efficiency \\times 0.30) + (Opponent Effective Field Goal Percentage \\times 0.20) + (Average Scoring Margin \\times 0.15)`;
const equationInHTML = katex.renderToString(equation);


const ModelBreakdown = () => {
    return (
      <div className="model-breakdown">
        <h1>Model Breakdown</h1>
        <br />
        <br />
        <h2><strong>What is Logistic Regression?</strong></h2>
        <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
          Logistic Regression is a classification algorithm used to predict the probability of a binary outcome. It is a type of supervised learning. 
        </p>
        <br />
        <h2><strong>Why did I use Logistic Regression?</strong></h2>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <img src={logisticRegressionPic} alt="Logistic Regression" style={{ width: "30%", marginRight: "20px" }} />
          <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
            I chose to use Logistic Regression for this model because it is an algorithm that works well for binary classification problems. It allows us to understand the relationship between the predictor variables and the outcome variable. 
            In the NBA example, we used a custom, weighted success-score metric and paired it against the teams that won the championship.
            Here is the formula for the success metric: <span dangerouslySetInnerHTML={{ __html: equationInHTML }} />
            
          </p>
        </div>
        <br />
        <h2><strong>How does the model perform?</strong></h2>
        <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
         The performanceo of this model was evaluated using the accuracy score, and the typical accuracy outputted was around 95-96%. 
        </p>
      </div>
    );
  }

export default ModelBreakdown;