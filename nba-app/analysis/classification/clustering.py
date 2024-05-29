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


#df = metric.total_df
# check if loaded properly
#print(df)
merged_df = pd.DataFrame()
merged_df = efg_pct_df
merged_df = pd.merge(merged_df, opponent_efg_pct_df, on=['Team', 'Year'], suffixes=('_efg_pct', '_opponent_efg_pct'))
merged_df = pd.merge(merged_df, defensive_efficiency_df, on=['Team', 'Year'], suffixes=('', '_defensive_efficiency'))
merged_df = pd.merge(merged_df, win_pct_df, on=['Team', 'Year'], suffixes=('', '_win_pct'))
merged_df = pd.merge(merged_df, avg_scoring_margin_df, on=['Team', 'Year'], suffixes=('', '_avg_scoring_margin'))
#test the merge
print(merged_df.head())
print(opponent_efg_pct_df.head())


# Stats overview, correlation coefficients


y_label =  "Win Percentage"
x_label = ["Effective Field Goal Percentage", "Opponent Effective Field Goal Percentage", "Defensive Efficiency", "Average Scoring Margin"]
n = 0

for season in range(2004, 2024):
    for stat in x_label:
        season_df = merged_df[merged_df['Year'] == season]
        print("test2")
        print(season_df.head())
        sns.scatterplot(x=stat, y=y_label, data=season_df, hue='Team')
        plt.title((stat) + "vs. " + (y_label) + str(season) + " - " + str(season+1))
        plt.legend(bbox_to_anchor=(1.05, 1), loc='upper left')

        # correlation coefficient https://stackoverflow.com/questions/70759369/adding-correlation-coefficient-to-a-seaborn-scatter-plot
        r, p = sp.stats.pearsonr(x=season_df[stat], y=season_df[y_label])
        ax= plt.gca()
        plt.text(.05, .8, "Person's r {:.2f}".format(r), transform=ax.transAxes)

        # correlation line
        m, b = np.polyfit(season_df[stat], season_df[y_label], 1)
        X_plot = np.linspace(ax.get_xlim()[0], ax.get_xlim()[1], 100)
        plt.plot(X_plot, m*X_plot + b, '-')
        
        
        plt.show() ## since steph curry era, it was relevenat. now it's not
    n+=1 
    
'''
    # other plot with trendline
    sns.regplot(x=x_label, y=y_label, data=avg_scoring_margin_df, scatter=False, color='red')
    sns.regplot(x=x, y=y, data=df, scatter=False, color='blue')
    plt.xticks(rotation=45)
    plt.title(str(season) + " - " + str(season+1) + " (with Trendline)")
    #plt.show()

## KMEANS CLUSTERING
encoder = LabelEncoder()
df['Team'] = encoder.fit_transform(df['Team'])
x = "Year"
y = "Success Score" ## success score

X = df[[x,y]].values

kmeans = KMeans(n_clusters=3).fit(X) 
# 3 clusters for champ contendors, playoff contendors, rebuilding teams

clusters = kmeans.labels_
cluster_df = pd.DataFrame(np.hstack((X, clusters.reshape(-1, 1))), columns=[x, y, "Cluster"])

sns.scatterplot(x=x, y=y, data=cluster_df, hue="Cluster")
plt.plot()
plt.show()

#trend over years
plt.figure(figsize=(10,6))
sns.lineplot(data=df, x='Year', y='Success Score', hue='Team')
plt.title('Success Score Trend Over Years')
plt.show()

# save to public folder

'''