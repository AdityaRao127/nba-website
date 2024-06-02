''' 
Steps:
1. define data frame with name, success metric, and whether team won championship or not. 

2. run linear regression only based on 2004-2023 data. Do not run on current season. 



'''

# Now you can import the required modules
from metric_for_model import all_data, statistic, avg_scoring_margin_df, defensive_efficiency_df, efg_pct_df, opponent_efg_pct_df, win_pct_df, total_df
import matplotlib.pyplot as plt
import numpy as np

from sklearn import datasets, linear_model
from sklearn.metrics import mean_squared_error, r2_score

import pandas as pd
import numpy as np

import numpy as np 
import pandas as pd 
import seaborn as sns 
import matplotlib.pyplot as plt 
from sklearn import preprocessing, svm 
from sklearn.model_selection import train_test_split 
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.metrics import accuracy_score
from scipy.special import expit
from scipy.stats import linregress
import seaborn as sns


merged_df = total_df
merged_df = pd.merge(merged_df, efg_pct_df, on=['Team', 'Year'], suffixes=('_efg_pct', '_efg_pct'))
merged_df = pd.merge(merged_df, opponent_efg_pct_df, on=['Team', 'Year'], suffixes=('_efg_pct', '_opponent_efg_pct'))
merged_df = pd.merge(merged_df, defensive_efficiency_df, on=['Team', 'Year'], suffixes=('', '_defensive_efficiency'))
merged_df = pd.merge(merged_df, avg_scoring_margin_df, on=['Team', 'Year'], suffixes=('', '_avg_scoring_margin'))
merged_df = pd.merge(merged_df, win_pct_df, on=['Team', 'Year'], suffixes=('', '_win_percentage'))

df_combined = merged_df
#print(df_combined)

won_champ = 0
df_combined['Won Championship'] = 0
#print(df_combined.head())

nba_teams = [
    "San Antonio", # 2004
    "Detroit", # 2005
    "Miami",   # 2006
    "San Antonio",  # 2007
    "Boston", # 2008
    "LA Lakers", # 2009
    "LA Lakers", # 2010
    "Dallas",   # 2011
    "Miami",    # 2012
    "Miami",    # 2013
    "San Antonio", # 2014
    "Golden State",     # 2015
    "Cleveland",   # 2016
    "Golden State", # 2017
    "Golden State", # 2018
    "Toronto", # 2019
    "LA Lakers", # 2020
    "Milwaukee", # 2021
    "Golden State", # 2022
    "Denver",   # 2023
    "Unknown" #2024
]

for season in range(2004, 2025):
    n = season - 2004
    champ_winner = nba_teams[n]
    if len(df_combined[(df_combined['Year'] == season) & (df_combined['Team'] == champ_winner)]) > 0:
        df_combined.loc[(df_combined['Year'] == season) & (df_combined['Team'] == champ_winner), 'Won Championship'] = 1
    else:
        df_combined.loc[(df_combined['Year'] == season) & (df_combined['Team'] != champ_winner), 'Won Championship'] = 0

#print("test1")
#print(df_combined.head())
# Save the combined DataFrame to a CSV file
df_combined.to_csv('dataframe_combined.csv', index=False)

df_combined = df_combined.sort_values(by=['Year', 'Won Championship', 'Team'], ascending=[True, False, True])

#with pd.option_context('display.max_rows', None, 'display.max_columns', None):  
    #print(df_combined)


# model

training_set = df_combined.loc[df_combined['Year'] <= 2023]
testing_set = df_combined.loc[df_combined['Year'] == 2024].copy()

# target y
X = training_set[['Success Score']]
y = training_set['Won Championship']

X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.20, random_state=42)


lr_model = LogisticRegression()
lr_model.fit(X_train, y_train)

# Evaluateion
y_pred = lr_model.predict(X_val)
print("Validation Score:", lr_model.score(X_val, y_val))

# Probability of eaach time winning
probabilities = lr_model.predict_proba(testing_set[['Success Score']])

win_probabilities = probabilities[:, 1]

testing_set['Win Probability'] = win_probabilities * 100

sorted_teams = testing_set.sort_values(by='Win Probability', ascending=False)
sorted_teams['Success Score'] = testing_set['Success Score']

all_teams_score = sorted_teams[['Team', 'Success Score', 'Win Probability']]

# Print the top 5 teams with the highest chance of winning
#print(sorted_teams[['Team', 'Win Probability', 'Success Score']].head(10))

# accuracy
predictions = lr_model.predict(testing_set[['Success Score']])
accuracy = round(accuracy_score(y_val, y_pred) * 100, 3)
testing_set['Predicted Win'] = predictions
#print("Accuracy:", accuracy, "%")
win_predicted = sorted_teams[['Team', 'Win Probability', 'Success Score']].head(1)
win_predicted_accuracy = win_predicted['Win Probability'].values[0]
team_name = win_predicted['Team'].values[0] 
#print(team_name, "has a predicted probability of winning the 2024 NBA Championship of", win_predicted_accuracy, "%")





# Scatter plot 
#plt.scatter(X, y, color='blue', label='Testing data')
#plt.scatter(X_val, y_val, color='red', label='Validation data')

# Logistic regression model fit 
# https://www.statology.org/plot-logistic-regression-in-python/
sns.regplot(x=training_set['Success Score'], y=training_set['Won Championship'], logistic=True,color='blue', label='Data Points', ci=None, scatter_kws={'color': 'green'}, line_kws={'color': 'red'})
plt.yticks([0, 1])
plt.title("Logistic Regression Model for Success Score vs. Winning Championship")
plt.legend()
#plt.show()
plt.savefig('../../src/images/logistic_regression_model_visualization.png')
plt.clf()

import onnx
from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import FloatTensorType

# ONNX
initial_type = [('float_input', FloatTensorType([None, 1]))]
onnx_model = convert_sklearn(lr_model, initial_types=initial_type)
with open("logistic_regression_model.onnx", "wb") as f:
    f.write(onnx_model.SerializeToString())