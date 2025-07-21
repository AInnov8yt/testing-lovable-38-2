from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/message', methods=['GET'])
def message():
    return jsonify({"message": "Hello from the Python backend!"})

if __name__ == '__main__':
    app.run(debug=True)