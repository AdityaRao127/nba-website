import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import os
from sklearn import datasets, linear_model

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
all_data = []


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
            
            # weighting the stats based on importance
            if(stat == 'average_scoring_margin'):
                df['Statistic'] = df['Statistic'] * 1.15
            elif(stat == 'defensive_efficiency'):
                df['Statistic'] = df['Statistic'] * 1.30
            elif(stat == 'efg_pct'):
                df['Statistic'] = df['Statistic'] * 1.20 
            elif(stat == 'opponent_efg_pct'): # made negative, lower is better
                df['Statistic'] = df['Statistic'] * -1.20
            elif(stat == 'win_pct'):
                df['Statistic'] = df['Statistic'] * 1.15
            
            df['Year'] = season
            df['Year'] = df['Year'].astype(int)
            df = df.groupby(['Team', 'Year', 'Statistic']).sum().reset_index()
            df = df.sort_values('Rank', ascending=True)
            # filters
            all_data.append(df)
            print(f"Dataframe after grouping:\n{df}")
        if n < 4:
            next_stat = statistic[n+1]
            next_folder_path = os.path.join(path, next_stat)
            if os.path.exists(next_folder_path):
                next_file_path = next_folder_path + "/" + next_stat + ending + ".csv"
                print(f"Next file path: {next_file_path}")
                df = pd.read_csv(next_file_path)
                print(f"Dataframe after reading CSV:\n{df.head()}") 
                season = int(file.split('_')[-1].split('.')[0])
                df['Year'] = season
                df['Year'] = df['Year'].astype(int)
                df['Statistic'] = stat
                df = df.groupby(['Team', 'Year', 'Statistic']).sum()
                df = df.sort_values('Rank', ascending=True)

                print(f"Dataframe for next statistic:\n{df}")
     
# Concatenate
all_data_df = pd.concat(all_data, ignore_index=True)
print("Concatenated all data:\n", all_data_df.head())

# Get sum for all stats based on team and year
print("Data before final grouping and summing:\n", all_data_df.head())
total_df = all_data_df.groupby(['Year', 'Team']).sum().reset_index()
#total_df["Statistic"] = total_df["Statistic"]/21

print("Grouped and summed data:\n", total_df.head())

with pd.option_context('display.max_rows', None, 'display.max_columns', None):
    print("Total summed values for each team in each season:\n", total_df)


    
    
