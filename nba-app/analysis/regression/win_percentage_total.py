import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import os
from sklearn import datasets, linear_model

efg_path = '../data/win_pct/'
file_list = os.listdir(efg_path)

efg_data_list = []

## MEHTOD 1
for efgfile in file_list:
    full_path = os.path.join(efg_path, efgfile) # efg_path + file
    data = pd.read_csv(full_path)
    efg_data_list.append(data)
    
efg_data_array = pd.concat(efg_data_list, ignore_index=True)

efg_team_match = dict(zip(efg_data_array['Team'], efg_data_array['Statistic']))

#print(efg_team_match) #remove later


## METHOD 2
# Initialize an empty list to store DataFrames
dataframes = []

for file in file_list:
        df = pd.read_csv(os.path.join(efg_path, file))
        dataframes.append(df)
        print(f"Read {file}, content:\n{df.to_string()}")  # Print all rows

season1 = 2003
season2 = 2004
for i in range(len(dataframes)):
    df = dataframes[i]
    df["Statistic"] = pd.to_numeric(df["Statistic"])
    df = df.sort_values("Statistic", ascending=False)
    num_datasets = len(df[df["Rank"]=="1"].columns)
    colors = ['blue'] * num_datasets
    plt.scatter(df["Team"], df["Statistic"])
    plt.title(f'Win Percentage from {season1} - {season2}')
    plt.xlabel('Win Percentage')
    plt.xticks(rotation=45)
    plt.ylabel('Team')
    plt.show()
    season1 += 1
    season2 += 1




def weighted_score():
    pass