import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import os
from sklearn import datasets, linear_model

dataframes = [None]*20
for i in range(20):
    dataframes[i] = pd.DataFrame() # Initialize empty DataFrames
    
path = '../data/'


statistic = ['average_scoring_margin',  'defensive_efficiency', 'efg_pct',  'opponent_efg_pct', 'win_pct']
season = 2004
ending = f"_{season}"

n= 0
folder_path = os.path.join(path, statistic[n])
folder_list = "../data/" + statistic[n] + "/"
print(folder_list)

file_path = folder_path + "/" + statistic[n] + ending + ".csv"
print("file path: " + file_path)

path_list = os.listdir(path)
print(path_list)
count = 0

for season in range(2004, 2025):
    ending = f"_{season}"
    for n, stat in enumerate(statistic):
        print(f"Processing statistic: {stat}")
        folder_path = os.path.join(path, stat)
        if os.path.exists(folder_path):
            folder_list = os.listdir(folder_path)
            for file in folder_list:
                file_path = os.path.join(folder_path, file)
                print(f"Reading file from path: {file_path}")
                df = pd.read_csv(file_path)
                season = int(file.split('_')[-1].split('.')[0])
                df['Year'] = season
                df['Year'] = df['Year'].astype(int)
                df = df.groupby(['Team', 'Statistic', 'Year']).sum()
                df = df.sort_values('Rank', ascending=True)
                print(f"Dataframe after grouping:\n{df}")
            if n < 4:
                next_stat = statistic[n+1]
                next_folder_path = os.path.join(path, next_stat)
                if os.path.exists(next_folder_path):
                    next_file_path = next_folder_path + "/" + next_stat + ending + ".csv"
                    print(f"Next file path: {next_file_path}")
                    df = pd.read_csv(next_file_path)
                    season = int(file.split('_')[-1].split('.')[0])
                    df['Year'] = season
                    df['Year'] = df['Year'].astype(int)
                    df = df.groupby(['Team', 'Statistic', 'Year']).sum()

                    print(f"Dataframe for next statistic:\n{df}")




    
    
