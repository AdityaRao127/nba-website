import React from 'react';
import logisticRegressionPic from '../images/logistic_regression_model_visualization.png';
import kmeansImage1 from '../images/initial_analysis_1.png';
import kmeansImage2 from '../images/initial_analysis_2.png';
import kmeansImage3 from '../images/initial_analysis_3.png';
import kmeansImage4 from '../images/initial_analysis_4.png';
import kmeansImage5 from '../images/initial_analysis_5.png';
import kmeansImage6 from '../images/initial_analysis_6.png';
import clusteringImage1 from '../images/efg_oefg.jpg';
import clusteringImage2 from '../images/defensive_efficiency_avg_scoring_margin.jpg';
import katex from 'katex';
import 'katex/dist/katex.min.css'; // Import Katex CSS
import './ModelBreakdown.css'; // Import custom CSS

const equation = `(Reg. Season Win\\% \\times 0.15) + (Effective Field Goal Percentage \\times 0.20) + (Defensive Efficiency \\times -0.30) + (Opponent Effective Field Goal Percentage \\times -0.20) + (Average Scoring Margin \\times 0.15)`;
const equationInHTML = katex.renderToString(equation);

const ModelBreakdown = () => {
    return (
        <div className="model-breakdown">
            <h1 className="title">Model Breakdown</h1>

            <section className="section">
                <h2 className="section-title">Determining the Features and Collecting the Data</h2>
                <p className="section-text">
                    The first step in building our model was to determine the features that would be most indicative of a team's success. We collected data on various metrics such as Regular Season Win Percentage, Effective Field Goal Percentage, Defensive Efficiency, Opponent Effective Field Goal Percentage, and Average Scoring Margin. This data was collected from the NBA seasons spanning from 2004 to 2023.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">What is Logistic Regression?</h2>
                <p className="section-text">
                    Logistic Regression is a classification algorithm used to predict the probability of a binary outcome. It is a type of supervised learning.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">Why did I use Logistic Regression?</h2>
                <div className="section-content">
                    <img src={logisticRegressionPic} alt="Logistic Regression" className="section-image" />
                    <p className="section-text">
                        I chose to use Logistic Regression for this model because it is an algorithm that works well for binary classification problems. It allows us to understand the relationship between the predictor variables and the outcome variable. In the NBA example, we used a custom, weighted success-score metric and paired it against the teams that won the championship. Here is the formula for the success metric:
                        <span dangerouslySetInnerHTML={{ __html: equationInHTML }} />
                    </p>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">How does the model perform?</h2>
                <p className="section-text">
                    The performance of this model was evaluated using the accuracy score, and the typical accuracy outputted was around 95-96%.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">K-means Clustering</h2>
                <div className="kmeans-images">
                    <div className="image-row">
                        <div className="image-container">
                            <img src={kmeansImage1} alt="K-means Image 1" className="kmeans-image" />
                            <p className="image-description">Image 1: Description of the first K-means clustering image.</p>
                        </div>
                        <div className="image-container">
                            <img src={kmeansImage2} alt="K-means Image 2" className="kmeans-image" />
                            <p className="image-description">Image 2: Description of the second K-means clustering image.</p>
                        </div>
                        <div className="image-container">
                            <img src={kmeansImage3} alt="K-means Image 3" className="kmeans-image" />
                            <p className="image-description">Image 3: Description of the third K-means clustering image.</p>
                        </div>
                    </div>
                    <div className="image-row">
                        <div className="image-container">
                            <img src={kmeansImage4} alt="K-means Image 4" className="kmeans-image" />
                            <p className="image-description">Image 4: Description of the fourth K-means clustering image.</p>
                        </div>
                        <div className="image-container">
                            <img src={kmeansImage5} alt="K-means Image 5" className="kmeans-image" />
                            <p className="image-description">Image 5: Description of the fifth K-means clustering image.</p>
                        </div>
                        <div className="image-container">
                            <img src={kmeansImage6} alt="K-means Image 6" className="kmeans-image" />
                            <p className="image-description">Image 6: Description of the sixth K-means clustering image.</p>
                        </div>
                    </div>
                </div>
                <div className="clustering-images">
                    <h3 className="section-subtitle">Clustering Results</h3>
                    <div className="image-row">
                        <div className="image-container-vertical">
                            <img src={clusteringImage1} alt="Clustering Image 1" className="clustering-image" />
                            <p className="image-description">Description of the first clustering image.</p>
                        </div>
                        <div className="image-container-vertical">
                            <img src={clusteringImage2} alt="Clustering Image 2" className="clustering-image" />
                            <p className="image-description">Description of the second clustering image.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ModelBreakdown;
