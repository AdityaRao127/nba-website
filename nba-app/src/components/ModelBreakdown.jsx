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
import { InlineMath } from 'react-katex';

const equation = `(\\text{Reg. Season Win\\%} \\times 0.15) + (\\text{Effective Field Goal Percentage} \\times 0.20) + (\\text{Defensive Efficiency} \\times -0.30) + (\\text{Opponent Effective Field Goal Percentage} \\times -0.20) + (\\text{Average Scoring Margin} \\times 0.15)`;

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
                        <br></br>
                        <br></br>
                        <InlineMath math={equation} />
                    </p>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">How does the model perform?</h2>
                <p className="section-text">
                    The performance of this model was evaluated using the accuracy score, and the typical accuracy outputted was around 95-97%.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">K-means Clustering</h2>
                <div className="kmeans-images">
                    <div className="image-row">
                        <div className="image-container">
                            <img src={kmeansImage1} alt="K-means Image 1" className="kmeans-image" />
                            <p className="image-description">Examining Effective Field Goal Percentage and Opponent Effective Field Goal Percentage relation to winning regular season games</p>
                        </div>
                        <div className="image-container">
                            <img src={kmeansImage2} alt="K-means Image 2" className="kmeans-image" />
                            <p className="image-description">Examining Effective Field Goal Percentage and Defensive Efficiency relation to winning regular season games</p>
                        </div>
                        <div className="image-container">
                            <img src={kmeansImage3} alt="K-means Image 3" className="kmeans-image" />
                            <p className="image-description">Examining Effective Field Goal Percentage and Average Scoring Margin relation to winning regular season games</p>
                        </div>
                    </div>
                    <div className="image-row">
                        <div className="image-container">
                            <img src={kmeansImage4} alt="K-means Image 4" className="kmeans-image" />
                            <p className="image-description">Examining Opponent Effective Field Goal Percentage and Defensive Efficiency relation to winning regular season games</p>
                        </div>
                        <div className="image-container">
                            <img src={kmeansImage5} alt="K-means Image 5" className="kmeans-image" />
                            <p className="image-description">Examining Opponent Effective Field Goal Percentage and Average Scoring Margin relation to winning regular season games</p>
                        </div>
                        <div className="image-container">
                            <img src={kmeansImage6} alt="K-means Image 6" className="kmeans-image" />
                            <p className="image-description">Examining Defensive Efficiency and Average Scoring Margin relation to winning regular season gamesge.</p>
                        </div>
                    </div>
                </div>
                <div className="clustering-images">
                    <h3 className="section-subtitle">Clustering Results</h3>
                    <p className="section-text">
                        The clustering analysis was performed using the K-means algorithm to group teams based on the most relevant stat comparisons in the above section. This clustering relates these stats to winning championships based on regular season stats. </p>
                    <div className="image-row">
                        <div className="image-container-vertical">
                            <img src={clusteringImage1} alt="Clustering Image 1" className="clustering-image" />
                            <p className="image-description">Cluster 1: Play-in teams; Cluster 2: Championship Teams; Cluster 3: Playoff Teams</p>
                        </div>
                        <div className="image-container-vertical">
                            <img src={clusteringImage2} alt="Clustering Image 2" className="clustering-image" />
                            <p className="image-description">Cluster 1: Championship Teams; Cluster 2: Playoff teams; Cluster 3: Play-in team</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ModelBreakdown;
