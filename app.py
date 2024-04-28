from flask import Flask, request, jsonify
import pandas as pd
import matplotlib.pyplot as plt
from io import BytesIO
import base64

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    data = pd.read_excel(file)
    # For CSV files, use: data = pd.read_csv(file)

    # Placeholder for data analysis and visualization
    # For example, let's plot a simple bar chart
    plt.figure(figsize=(10, 5))
    data.plot(kind='bar')
    plt.title('Data Visualization')
    plt.xlabel('X-axis')
    plt.ylabel('Y-axis')

    # Save the plot to a BytesIO object
    img = BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    plot_url = base64.b64encode(img.getvalue()).decode()

    return jsonify({'plot_url': plot_url})

if __name__ == '__main__':
    app.run(debug=True)
