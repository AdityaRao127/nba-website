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
import 'katex/dist/katex.min.css'; 
import './ModelBreakdown.css'; 
import HeaderPages from './NewHeader.jsx';


const equation = `(Reg. Season Win\\% \\times 0.15) + (Effective Field Goal Percentage \\times 0.20) + (Defensive Efficiency \\times -0.30) + (Opponent Effective Field Goal Percentage \\times -0.20) + (Average Scoring Margin \\times 0.15)`;
const equationInHTML = katex.renderToString(equation);

const ModelBreakdown = () => {
    return (
        <>
            <HeaderPages/>
            <div className="model-breakdown" style={{marginTop:'-300px'}}>
                <h1 className="title">Model Breakdown</h1>

                <section className="section">
                    <h2 className="section-title">Determining the Features and Collecting the Data</h2>
                    <p className="section-text">
                        The first step in building our model was to determine the features that would be most indicative of a team's success. We collected data on various metrics such as Regular Season Win Percentage, Effective Field Goal Percentage, Defensive Efficiency, Opponent Effective Field Goal Percentage, and Average Scoring Margin. This data was collected from the NBA seasons spanning from 2004 to 2024.
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
                                <p className="image-description">Comparisons across Opponent EFG% vs. EFG%</p>
                            </div>
                            <div className="image-container">
                                <img src={kmeansImage2} alt="K-means Image 2" className="kmeans-image" />
                                <p className="image-description">Comparisons across Defensive Efficiency vs. EFG%</p>
                            </div>
                            <div className="image-container">
                                <img src={kmeansImage3} alt="K-means Image 3" className="kmeans-image" />
                                <p className="image-description">Comparisons across Average Scoring Margin vs. EFG%</p>
                            </div>
                        </div>
                        <div className="image-row">
                            <div className="image-container">
                                <img src={kmeansImage4} alt="K-means Image 4" className="kmeans-image" />
                                <p className="image-description">Comparisons across Defensive Efficiency vs. Opponent EFG%.</p>
                            </div>
                            <div className="image-container">
                                <img src={kmeansImage5} alt="K-means Image 5" className="kmeans-image" />
                                <p className="image-description">Comparisons across Average Scoring Margin vs. Opponent EFG%.</p>
                            </div>
                            <div className="image-container">
                                <img src={kmeansImage6} alt="K-means Image 6" className="kmeans-image" />
                                <p className="image-description">Comparisons across Average Scoring Margin vs. Defensive Efficiency.</p>
                            </div>
                        </div>
                    </div>
                    <div className="clustering-images">
                        <h3 className="section-subtitle">Clustering Results</h3>
                        <h4 className="section-subtitle">Pick the two best clusters, after analyzing the 6 clustering results above.</h4>
                        <div className="image-row">
                        <div className="image-container-vertical">
                                <img src={clusteringImage1} alt="Clustering Image 1" className="clustering-image" />
                                <p className="image-description">Assigning teams to clusters based on Opponent EFG% vs. EFG%.</p>
                            </div>
                            <div className="image-container-vertical">
                                <img src={clusteringImage2} alt="Clustering Image 2" className="clustering-image" />
                                <p className="image-description">Assigning teams to clusters based on Average Scoring Margin vs. Defensive Efficiency.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ModelBreakdown;
