import skl2onnx
from sklearn.linear_model import LogisticRegression

# Assume you have a trained logistic regression model
log_reg_model = LogisticRegression()

# Convert the model to ONNX
onnx_model = skl2onnx.convert_sklearn(log_reg_model, initial_types=[('input', FloatTensorType([None, 10]))])
with open("log_reg_model.onnx", "wb") as f:
    f.write(onnx_model.SerializeToString())