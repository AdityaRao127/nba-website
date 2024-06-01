from flask import Flask, request, jsonify
import onnxruntime as rt
import numpy as np
import pandas as pd
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()
port = os.getenv('APP_PORT')
# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load the combined DataFrame
df_combined = pd.read_csv('dataframe_combined.csv')



def get_success_score(team):
    latest_season = 2024
    team_data = df_combined[(df_combined['Team'] == team) & (df_combined['Year'] == latest_season)]
    
    if team_data.empty:
        return None
    
    success_score = team_data['Success Score'].values[0]
    return success_score

@app.route('/')
def home():
    return "Hello, World!"

@app.route('/predictions', methods=['POST'])
def predict():
    data = request.get_json()
    team = data.get("team")
    
    # Load ONNX model
    session = rt.InferenceSession("logistic_regression_model.onnx")

    # sucess score
    latest_season = 2024
    team_data = df_combined[(df_combined['Team'] == team) & (df_combined['Year'] == latest_season)]
    
    if team_data.empty:
        return jsonify({'error': 'Team data not found'}), 404

    success_score = team_data['Success Score'].values[0]

    input_name = session.get_inputs()[0].name
    inputs = np.array([[success_score]], dtype=np.float32)

    # Make prediction
    probs = session.run(None, {input_name: inputs})
    win_probability = probs[1][0][1] * 100  

    return jsonify({'team': team, 'win_probability': f"{win_probability:.3f}%"})

if __name__ == '__main__':
    import os
    app.run(host='0.0.0.0', port=int(os.getenv('PORT', port)))