import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import os
from sklearn import datasets, linear_model

efg_path = '../data/efg_pct/'
file_list = os.listdir(efg_path)

data_list = []

for file in file_list:
    full_path = os.path.join(efg_path, file) # efg_path + file
    data = pd.read_csv(full_path)
    data_list.append(data)
    
data_array = pd.concat(data_list, ignore_index=True)

team_match = dict(zip(data_array['Team'], data_array['Statistic']))

print(team_match) #remove later

def weighted_score():
    pass