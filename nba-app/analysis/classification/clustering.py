## k-means clustering
from sklearn.cluster import KMeans
from sklearn.preprocessing import LabelEncoder
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import os
from sklearn import datasets, linear_model
import seaborn as sns
import metric
from metric import all_data, statistic, avg_scoring_margin_df, defensive_efficiency_df, efg_pct_df, opponent_efg_pct_df, win_pct_df
from metric import defensive_efficiency_df
import scipy as sp

df = metric.total_df
# check if loaded properly
#print(df)
merged_df = pd.DataFrame()
merged_df = efg_pct_df
merged_df = pd.merge(merged_df, opponent_efg_pct_df, on=['Team', 'Year'], suffixes=('_efg_pct', '_opponent_efg_pct'))
merged_df = pd.merge(merged_df, defensive_efficiency_df, on=['Team', 'Year'], suffixes=('', '_defensive_efficiency'))
merged_df = pd.merge(merged_df, avg_scoring_margin_df, on=['Team', 'Year'], suffixes=('', '_avg_scoring_margin'))
merged_df = pd.merge(merged_df, win_pct_df, on=['Team', 'Year'], suffixes=('', '_win_percentage'))
#test the merge
#print("All years:")
#print(merged_df['Year'].unique())
#print(opponent_efg_pct_df.head())



# Determining which stats to use for K-means by plotting scatter plots. 3 clusters for champ contendors, playoff contendors, rebuilding teams

statistics = ["Effective Field Goal Percentage", "Opponent Effective Field Goal Percentage", "Defensive Efficiency", "Average Scoring Margin"]

n = 0
for i in range(len(statistics)):
    for j in range(i+1, len(statistics)):
        x_label = statistics[i]
        y_label = statistics[j]
        sns.scatterplot(x=x_label, y=y_label, data=merged_df, hue='Win Percentage')
        plt.savefig(f"../../src/images/initial_analysis_{n+1}.png") # Added .png extension to the saved image file
        plt.show()
        plt.clf()
        n += 1

    

## KMEANS CLUSTERING

## How does defensive efficiency and average scoring margin correlate to winning reg season games?

x = "Defensive Efficiency"
y = "Average Scoring Margin"

X = merged_df[[x,y]].values

kmeans = KMeans(n_clusters=3).fit(X) 
# 3 clusters for champ contendors, playoff contendors, rebuilding teams

clusters = kmeans.labels_
print(clusters) # 0, 1, 2 for each cluster.
print(merged_df['Win Percentage'].values) # print this, map to cluster values to see what cluster values mean

#0 = rebuild, 1 = champ contendors, 2 = playoff contendors

cluster_df = pd.DataFrame(np.hstack((X, clusters.reshape(-1, 1))), columns=[x, y, "Win Percentage"])


sns.scatterplot(x=x, y=y, data=cluster_df, hue="Win Percentage")
plt.plot()
plt.savefig("../../src/images/defensive_efficiency_avg_scoring_margin.jpg")
plt.show()
plt.clf()


## find teams from each cluster
merged_df['Cluster'] = clusters

rebuilding_teams = merged_df.loc[merged_df['Cluster'] == 2, ['Team', 'Year']]
playoff_contendors = merged_df.loc[merged_df['Cluster'] == 1, ['Team', 'Year']]
champ_contendors = merged_df.loc[merged_df['Cluster'] == 0, ['Team', 'Year']]

#metric_clusters_merged = pd.concat([rebuilding_teams, playoff_contendors, champ_contendors], ignore_index=True)

print("reb", rebuilding_teams.head())

#print("Clustered Teams", cluster_merged_df.head())
print("Rebuilding teams: ", rebuilding_teams)
print("Playoff contendors: ", playoff_contendors)
print("Champ contendors: ", champ_contendors)

print("Defensive Efficiency and Average Scoring Margin Results")
## All championship contenders based on defensive efficiency and average scoring margin. The hue represents the win percentage.
with open('dfgvsasc.txt', 'w') as f:
    for season in range(2004, 2025):
        f.write(f"{season} Season\n")
        rebuilding_teams_season = rebuilding_teams.loc[rebuilding_teams['Year'] == season, 'Team']
        for team in rebuilding_teams_season:
            f.write(f"{team} in {season} - Play-in contendors\n")
        
        playoff_contendors_season = playoff_contendors.loc[playoff_contendors['Year'] == season, 'Team']
        for team in playoff_contendors_season:
            f.write(f"{team} in {season} - Playoff contender\n")
            
        champ_contendors_season = champ_contendors.loc[champ_contendors['Year'] == season, 'Team']
        for team in champ_contendors_season:
            f.write(f"{team} in {season} - Championship contender\n")
            
        f.write("\n")
    
##
##
##

#How does effective field goal percentage and opponent effective field goal percentage correlate to winning reg season games?
x = "Effective Field Goal Percentage"
y = "Opponent Effective Field Goal Percentage"

X = merged_df[[x,y]].values

kmeans = KMeans(n_clusters=3).fit(X) 
# 3 clusters for champ contendors, playoff contendors, rebuilding teams

clusters = kmeans.labels_
print(clusters) # 0, 1, 2 for each cluster.
print(merged_df['Win Percentage'].values) # print this, map to cluster values to see what cluster values mean

#0 = rebuild, 1 = champ contendors, 2 = playoff contendors

cluster_df = pd.DataFrame(np.hstack((X, clusters.reshape(-1, 1))), columns=[x, y, "Win Percentage"])


sns.scatterplot(x=x, y=y, data=cluster_df, hue="Win Percentage")
plt.gca().invert_yaxis()
plt.plot()
plt.savefig("../../src/images/efg_oefg.jpg")
plt.show()
plt.clf()


## find teams from each cluster
merged_df['Cluster'] = clusters

rebuilding_teams = merged_df.loc[merged_df['Cluster'] == 0, ['Team', 'Year']]
playoff_contendors = merged_df.loc[merged_df['Cluster'] == 1, ['Team', 'Year']]
champ_contendors = merged_df.loc[merged_df['Cluster'] == 2, ['Team', 'Year']]

#metric_clusters_merged = pd.concat([rebuilding_teams, playoff_contendors, champ_contendors], ignore_index=True)

print("reb", rebuilding_teams.head())

#print("Clustered Teams", cluster_merged_df.head())
print("Rebuilding teams: ", rebuilding_teams)
print("Playoff contendors: ", playoff_contendors)
print("Champ contendors: ", champ_contendors)

print("Defensive Efficiency and Average Scoring Margin Results")
## All championship contenders based on defensive efficiency and average scoring margin. The hue represents the win percentage.
with open('efgvsoefg.txt', 'w') as f:
    for season in range(2004, 2025):
        f.write(f"{season} Season\n")
        rebuilding_teams_season = rebuilding_teams.loc[rebuilding_teams['Year'] == season, 'Team']
        for team in rebuilding_teams_season:
            f.write(f"{team} in {season} - Play-in contendors\n")
        
        playoff_contendors_season = playoff_contendors.loc[playoff_contendors['Year'] == season, 'Team']
        for team in playoff_contendors_season:
            f.write(f"{team} in {season} - Playoff contender\n")
            
        champ_contendors_season = champ_contendors.loc[champ_contendors['Year'] == season, 'Team']
        for team in champ_contendors_season:
            f.write(f"{team} in {season} - Championship contender\n")
            
        f.write("\n")