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
#print("All years:")
#print(merged_df['Year'].unique())
#print(opponent_efg_pct_df.head())


# Stats overview, correlation coefficients


y_label =  "Win Percentage"
x_label = ["Effective Field Goal Percentage", "Opponent Effective Field Goal Percentage", "Defensive Efficiency", "Average Scoring Margin"]
n = 0

for season in range(2004, 2025):
    for stat in x_label:
        season_df = merged_df[merged_df['Year'] == season]
        print("test2")
        plt.figure(figsize=(16.5,8))
        print(season_df.head())
        sns.scatterplot(x=stat, y=y_label, data=season_df, hue='Team')
        plt.title((stat) + " vs. " + (y_label) + " " + str(season-1) + " - " + str(season))
        plt.legend(bbox_to_anchor=(1.015, 1), loc='upper left')

        # correlation coefficient https://stackoverflow.com/questions/70759369/adding-correlation-coefficient-to-a-seaborn-scatter-plot
        r, p = sp.stats.pearsonr(x=season_df[stat], y=season_df[y_label])
        ax= plt.gca()
        plt.text(.05, .95, "Pearson's r {:.2f}".format(r), transform=ax.transAxes, weight='bold', color='red', fontsize=14)

        # correlation line
        m, b = np.polyfit(season_df[stat], season_df[y_label], 1)
        X_plot = np.linspace(ax.get_xlim()[0], ax.get_xlim()[1], 100)
        plt.plot(X_plot, m*X_plot + b, '-')

        # Save the figure to a file
        folder_path = f'../../src/images/{season}'
        absolute_folder_path = os.path.abspath(folder_path)
        print(f'Saving images in: {absolute_folder_path}')
        if not os.path.exists(folder_path):
            os.makedirs(folder_path, exist_ok=True)
        plt.savefig(f'{folder_path}/{stat.replace(" ", "_")}_vs_{y_label.replace(" ", "_")}.png')
        plt.clf()
