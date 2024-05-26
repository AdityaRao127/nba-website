from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import os
from sklearn import datasets, linear_model
import seaborn as sns
import metric
from metric import all_data, statistic




df = metric.total_df
print(df)

x_label = "Team"
y_label =  "Success Score"
for season in range(2004, 2024):
    df_season= df[df['Year'] == season]
    sns.scatterplot(x=x_label, y=y_label, data=df_season, hue='Success Score')
    plt.xticks(rotation=45)
    plt.title(str(season) + " - " + str(season+1))
    #plt.show()

## KMEANS CLUSTERING

x = "Rank"
y = "Success Score" ## success score

X = df[[x,y]].values

kmeans = KMeans(n_clusters=3).fit(X) 
# 3 clusters for champ contendors, playoff contendors, rebuilding teams

clusters = kmeans.labels_
cluster_df = pd.Dataframe(np.hstack((X, clusters.reshape(-1, 1))), columns=[x, y, "Team"])
