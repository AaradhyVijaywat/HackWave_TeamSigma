from flask import Flask, request, jsonify
import pandas as pd
import matplotlib.pyplot as plt
from io import BytesIO
import base64
from sklearn.cluster import KMeans

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    data = pd.read_excel(file)
    # For CSV files, use: data = pd.read_csv(file)

    # Placeholder for data analysis and visualization
    # Let's use K-Means clustering as an example
    kmeans = KMeans(n_clusters=3, random_state=0).fit(data)
    data['cluster'] = kmeans.labels_

    # Plot the clusters
    plt.figure(figsize=(10, 5))
    plt.scatter(data.iloc[:, 0], data.iloc[:, 1], c=data['cluster'], cmap='viridis')
    plt.title('K-Means Clustering')
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
