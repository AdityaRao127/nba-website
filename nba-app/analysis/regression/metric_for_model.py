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
#(folder_list)

file_path = folder_path + "/" + statistic[n] + ending + ".csv"
#("file path: " + file_path)

path_list = os.listdir(path)
#(path_list)
count = 0
all_data = []

# all stat metrics
avg_scoring_margin_df = pd.DataFrame()
defensive_efficiency_df = pd.DataFrame()
efg_pct_df = pd.DataFrame()
opponent_efg_pct_df = pd.DataFrame()
win_pct_df = pd.DataFrame()
unweighted_df = pd.DataFrame()


for n, stat in enumerate(statistic):
    #(f"Processing statistic: {stat}")
    folder_path = os.path.join(path, stat)
    if os.path.exists(folder_path):
        folder_list = os.listdir(folder_path)
        for file in folder_list:
            file_path = os.path.join(folder_path, file)
            #(f"Reading file from path: {file_path}")
            df = pd.read_csv(file_path)
            season = int(file.split('_')[-1].split('.')[0])
            
            df['Year'] = season
            df['Year'] = df['Year'].astype(int)
            unweighted_df = df.groupby(['Team', 'Year', 'Statistic']).sum().reset_index()
 
            
            if stat == 'average_scoring_margin':
                avg_scoring_margin_df = pd.concat([avg_scoring_margin_df, unweighted_df], ignore_index=True)
            elif stat == 'defensive_efficiency':
                defensive_efficiency_df = pd.concat([defensive_efficiency_df, unweighted_df], ignore_index=True)
            elif stat == 'efg_pct':
                efg_pct_df = pd.concat([efg_pct_df, unweighted_df], ignore_index=True)
            elif stat == 'opponent_efg_pct':
                opponent_efg_pct_df = pd.concat([opponent_efg_pct_df, unweighted_df], ignore_index=True)
            elif stat == 'win_pct':
                win_pct_df = pd.concat([win_pct_df, unweighted_df], ignore_index=True)
                
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
            
            # rank indiviually within a season
            df['Year'] = season
            df['Year'] = df['Year'].astype(int)
            df = df.groupby(['Team', 'Year', 'Statistic']).sum().reset_index()
            df['Rank'] = df.groupby('Year')['Statistic'].rank(ascending=False)
            
            # filters
            all_data.append(df)
            #(f"Dataframe after grouping:\n{df}")
        if n < 4:
            next_stat = statistic[n+1]
            next_folder_path = os.path.join(path, next_stat)
            if os.path.exists(next_folder_path):
                next_file_path = next_folder_path + "/" + next_stat + ending + ".csv"
                #(f"Next file path: {next_file_path}")
                df = pd.read_csv(next_file_path)
                #(f"Dataframe after reading CSV:\n{df.head()}") 
                season = int(file.split('_')[-1].split('.')[0])
                df['Year'] = season
                df['Year'] = df['Year'].astype(int)
                df['Statistic'] = stat
                df = df.groupby(['Team', 'Year', 'Statistic']).sum()
                #df['Rank'] = df.groupby('Year')['Statistic'].rank(ascending=False)

                #(f"Dataframe for next statistic:\n{df}")

#("Indiviudal Metrics\n")


avg_scoring_margin_df = avg_scoring_margin_df.rename(columns={'Statistic': 'Average Scoring Margin'})
defensive_efficiency_df = defensive_efficiency_df.rename(columns={'Statistic': 'Defensive Efficiency'})
efg_pct_df = efg_pct_df.rename(columns={'Statistic': 'Effective Field Goal Percentage'})
opponent_efg_pct_df = opponent_efg_pct_df.rename(columns={'Statistic': 'Opponent Effective Field Goal Percentage'})
win_pct_df = win_pct_df.rename(columns={'Statistic': 'Win Percentage'})
##(avg_scoring_margin_df.head())
#with pd.option_context('display.max_rows', None, 'display.max_columns', None):
    #("Total summed values for each team in each season2:\n", avg_scoring_margin_df)

# Concatenate 
all_data_df = pd.concat(all_data, ignore_index=True)
#("Concatenated all data:\n", all_data_df.head())

#("Data before final grouping and summing:\n", all_data_df.head())
total_df = all_data_df.groupby(['Year', 'Team']).sum().reset_index()
total_df = total_df.rename(columns={'Statistic': 'Success Score'})

# Rank
total_df['Rank'] = total_df.groupby('Year')['Success Score'].rank(ascending=False, method='first')
total_df['Rank'] = total_df['Rank'].astype(int)  # Convert rank to integer

# Sort 
total_df = total_df.sort_values(by=['Year', 'Rank'])

#with pd.option_context('display.max_rows', None, 'display.max_columns', None):
    #("Total summed values for each team in each season:\n", total_df)
 
    
