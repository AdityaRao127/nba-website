import React, { useState } from 'react';
import nba_draft from '../images/nba_draft.jpg';
import larry_trophy from '../images/larry_trophy.jpg';
import playoff_logo from '../images/playoff_logo.jpg';
import playin_logo from '../images/playin_logo.jpg';
import './Prediction.css'; 
const apiUrl = import.meta.env.VITE_API_URL


function Prediction() {
    const [team, setTeam] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    const nbaTeams = {
        'Atlanta Hawks': 'Atlanta',
        'Boston Celtics': 'Boston',
        'Golden State Warriors': 'Golden State',
        'Phoenix Suns': 'Phoenix',
        'LA Clippers': 'LA Clippers',
        'Cleveland Cavaliers': 'Cleveland',
        'New York Knicks': 'New York',
        'Utah Jazz': 'Utah',
        'Philadelphia 76ers': 'Philadelphia',
        'Brooklyn Nets': 'Brooklyn',
        'Miami Heat': 'Miami',
        'Memphis Grizzlies': 'Memphis',
        'Dallas Mavericks': 'Dallas',
        'Washington Wizards': 'Washington',
        'Milwaukee Bucks': 'Milwaukee',
        'Orlando Magic': 'Orlando',
        'San Antonio Spurs': 'San Antonio',
        'Oklahoma City Thunder': 'Okla City',
        'Minnesota Timberwolves': 'Minnesota',
        'Toronto Raptors': 'Toronto',
        'Los Angeles Lakers': 'LA Lakers',
        'Detroit Pistons': 'Detroit',
        'Denver Nuggets': 'Denver',
        'Chicago Bulls': 'Chicago',
        'Charlotte Hornets': 'Charlotte',
        'New Orleans Pelicans': 'New Orleans',
        'Sacramento Kings': 'Sacramento',
        'Indiana Pacers': 'Indiana',
        'Houston Rockets': 'Houston',
        'Portland Trail Blazers': 'Portland',
    };
// change
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const response = await fetch(apiUrl, { // test test
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ team }),
        });
    
        if (response.ok) {
            const data = await response.json();
            setPrediction(data);
            setLoading(false);
        } else {
            console.error('Response:', response);
            setLoading(false);
        }
    };

    return (
        <div className="prediction-container">
          <form onSubmit={handleSubmit} className="prediction-form">
            <h1>🏀 Predicted Winners 2024 🏀</h1>
            <div className="form-group">
              <label>
                Selcet a team:
                <select value={team} onChange={(e) => setTeam(e.target.value)} className="team-select">
                  <option value="">Select a team</option>
                  {Object.entries(nbaTeams).map(([displayName, actualName]) => (
                    <option key={actualName} value={actualName}>
                      {displayName}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <button type="submit" className="submit-button">Predict</button>
          </form>
          {loading ? (
            <div className="loading-container">
              <p>Loading...</p>
            </div>
          ) : (
            prediction && (
              <div className="prediction-result">
                <h2>Prediction</h2>
                <p className="team-name">Team: {Object.keys(nbaTeams).find(key => nbaTeams[key] === prediction.team)}</p>
                <p className="win-probability">Win Probability: {prediction.win_probability}</p>
                {parseFloat(prediction.win_probability) < 0.4 && (
                  <div className="result-section">
                    <p>The {prediction.team} are going to be battling for a high draft pick!</p>
                    <p>Good luck in the draft!</p>
                    <img src={nba_draft} alt="Draft" className="result-image" />
                  </div>
                )}
                {parseFloat(prediction.win_probability) >= 0.4 && parseFloat(prediction.win_probability) < 5 && (
                  <div className="result-section">
                    <p>Looks like the {Object.keys(nbaTeams).find(key => nbaTeams[key] === prediction.team)} will be fighting for a play-in spot!</p>
                    <img src={playin_logo} alt="Play-in" className="result-image" />
                  </div>
                )}
                {parseFloat(prediction.win_probability) >= 5 && parseFloat(prediction.win_probability) < 10.5 && (
                  <div className="result-section">
                    <p>{Object.keys(nbaTeams).find(key => nbaTeams[key] === prediction.team)} will be battling in the playoffs!</p>
                    <img src={playoff_logo} alt="Playoffs" className="result-image" />
                  </div>
                )}
                {parseFloat(prediction.win_probability) >= 10.5 && (
                  <div className="result-section">
                    <p>Looks like {Object.keys(nbaTeams).find(key => nbaTeams[key] === prediction.team)} are serious championship contenders!</p>
                    <img src={larry_trophy} alt="Championship" className="result-image" />
                  </div>
                )}
              </div>
            )
          )}
        </div>
    );
}

export default Prediction;