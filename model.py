import numpy as np
import pandas as pd
import pickle

data = pd.read_csv("spg.csv")

# from sklearn.preprocessing import MinMaxScaler
# scaler = MinMaxScaler()
# data.iloc[::,::] = scaler.fit_transform(data.iloc[::,::])

X = data.drop('generated_power_kw', axis=1)
y = data["generated_power_kw"]

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X,y, test_size=0.2, random_state=42)

from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score

rfr = RandomForestRegressor()
rfr.fit(X_train,y_train)
y_pred_rfr = rfr.predict(X_test)
mse = mean_squared_error(y_test, y_pred_rfr)
r2 = r2_score(y_test, y_pred_rfr)
print(y_pred_rfr)

pickle.dump(rfr, open('model2.pkl','wb'))

model = pickle.load(open('model2.pkl', 'rb'))

print("R2 Score : ",r2 *100,"%")