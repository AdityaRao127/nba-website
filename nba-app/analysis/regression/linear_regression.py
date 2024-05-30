''' 
Steps:
1. define data frame with name, success metric, and whether team won championship or not. 

2. run linear regression only based on 2004-2023 data. Do not run on current season. 



'''

# Now you can import the required modules
from metric import all_data, statistic, avg_scoring_margin_df, defensive_efficiency_df, efg_pct_df, opponent_efg_pct_df, win_pct_df, total_df
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
from sklearn.linear_model import LinearRegression 


merged_df = total_df
merged_df = pd.merge(merged_df, efg_pct_df, on=['Team', 'Year'], suffixes=('_efg_pct', '_efg_pct'))
merged_df = pd.merge(merged_df, opponent_efg_pct_df, on=['Team', 'Year'], suffixes=('_efg_pct', '_opponent_efg_pct'))
merged_df = pd.merge(merged_df, defensive_efficiency_df, on=['Team', 'Year'], suffixes=('', '_defensive_efficiency'))
merged_df = pd.merge(merged_df, avg_scoring_margin_df, on=['Team', 'Year'], suffixes=('', '_avg_scoring_margin'))
merged_df = pd.merge(merged_df, win_pct_df, on=['Team', 'Year'], suffixes=('', '_win_percentage'))

df_combined = merged_df
print(df_combined)

won_champ = 0
df_combined['Won Championship'] = 0
print(df_combined.head())

nba_teams = [
    "San Antonio",
    "Detroit",
    "Dallas",
    "Phoenix",
    "Miami",
    "Memphis",
    "LA Clippers",
    "LA Lakers",
    "Washington",
    "Indiana",
    "Cleveland",
    "Brooklyn",
    "Sacramento",
    "Chicago",
    "Denver",
    "Orlando",
    "Golden State",
    "Milwaukee",
    "Boston",
    "Houston",
    "Minnesota",
    "Philadelphia",
    "Utah",
    "New Orleans",
    "Toronto",
    "Okla City",
    "Charlotte",
    "Atlanta",
    "New York",
    "Portland"
]

for season in range(2004, 2025):
    n = season - 2004
    champ_winner = nba_teams[n]
    if len(df_combined[(df_combined['Year'] == season) & (df_combined['Team'] == champ_winner)]) > 0:
        df_combined.loc[(df_combined['Year'] == season) & (df_combined['Team'] == champ_winner), 'Won Championship'] = 1
    else:
        df_combined.loc[(df_combined['Year'] == season) & (df_combined['Team'] != champ_winner), 'Won Championship'] = 0

print("test1")
print(df_combined.head())
df_combined = df_combined.sort_values(by=['Year', 'Won Championship', 'Team'], ascending=[True, False, True])

#with pd.option_context('display.max_rows', None, 'display.max_columns', None):  
    #print(df_combined)


# model

training_set = df_combined.loc[df_combined['Year'] <= 2023]
testing_set = df_combined.loc[df_combined['Year'] == 2024].copy()

# target y
X = training_set[['Success Score']]
y = training_set['Won Championship']

X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.75, random_state=42)


lr_model = LinearRegression()
lr_model.fit(X_train, y_train)

# Evaluateion
y_pred = lr_model.predict(X_val)
print("Validation Score:", lr_model.score(X_val, y_val))


predictions = lr_model.predict(testing_set[['Success Score']])
testing_set['Predicted Win'] = predictions

# Find the team with the highest predicted win
predicted_winner = testing_set.loc[testing_set['Predicted Win'].idxmax()]['Team']
sorted_teams = testing_set.sort_values(by='Predicted Win', ascending=False)


print(sorted_teams[['Team', 'Predicted Win', 'Year']])


plt.scatter(X_train, y_train, color='blue', label='Training data')

plt.scatter(X_val, y_val, color='red', label='Validation data')

plt.plot(X_val, y_pred, color='black', label='Regression line')

plt.xlabel('Success Score')
plt.ylabel('Won Championship')
plt.legend()
plt.show()
