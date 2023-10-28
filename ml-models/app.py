from flask import Flask, request , jsonify
import pickle
import numpy as np

app = Flask(_name_)

model = pickle.load('model.pkl','rb')

sample_data = {
    "temperature_2_m_above_gnd": 7.43,
    "relative_humidity_2_m_above_gnd": 80,
    "mean_sea_level_pressure_MSL": 1031.3,
    "total_precipitation_sfc": 0,
    "snowfall_amount_sfc": 0,
    "total_cloud_cover_sfc": 100,
    "high_cloud_cover_high_cld_lay": 0,
    "medium_cloud_cover_mid_cld_lay": 0,
    "low_cloud_cover_low_cld_lay": 100,
    "shortwave_radiation_backwards_sfc": 303.49,
    "wind_speed_10_m_above_gnd": 2.9,
    "wind_direction_10_m_above_gnd": 119.74,
    "wind_speed_80_m_above_gnd": 3.55,
    "wind_direction_80_m_above_gnd": 113.96,
    "wind_speed_900_mb": 3.08,
    "wind_direction_900_mb": 110.56,
    "wind_gust_10_m_above_gnd": 3.96,
    "angle_of_incidence": 22.376969,
    "zenith": 65.083226,
    "azimuth": 168.3542
}

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    # Ensure that all the required features are present in the received data
    required_features = list(sample_data.keys())
    for feature in required_features:
        if feature not in data:
            return jsonify({"error": f"Missing feature: {feature}"})
    
    # Convert the data to a format suitable for the model
    input_data = [data[feature] for feature in required_features]
    print(input_data)
    input_data = np.array(input_data).reshape(1, -1)

    # Use the Random Forest model to make a prediction
    prediction = model.predict(input_data)
    print(prediction)

    return jsonify({"prediction": prediction[0]})