from flask import Flask, render_template
import yaml

app = Flask(__name__)

# Load configuration from YAML file
with open('config.yaml', 'r') as file:
    config_data = yaml.safe_load(file)
    
# Route to display information from the configuration file
@app.route('/')
def index():
    return render_template('index.html', config_data=config_data)


if __name__ == '__main__':
    app.run(debug=True)