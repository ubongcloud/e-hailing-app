from flask import Flask, jsonify, request

app = Flask(__name__)

riders = []

@app.route('/riders', methods=['POST'])
def register_rider():
    rider = request.json
    riders.append(rider)
    return jsonify(rider), 201

@app.route('/riders/<int:rider_id>', methods=['GET'])
def get_rider(rider_id):
    rider = next((r for r in riders if r['id'] == rider_id), None)
    if rider:
        return jsonify(rider), 200
    return jsonify({'message': 'Rider not found'}), 404

@app.route('/riders/<int:rider_id>', methods=['PUT'])
def update_rider(rider_id):
    rider = next((r for r in riders if r['id'] == rider_id), None)
    if rider:
        rider.update(request.json)
        return jsonify(rider), 200
    return jsonify({'message': 'Rider not found'}), 404

@app.route('/riders/login', methods=['POST'])
def login_rider():
    data = request.json
    rider = next((r for r in riders if r['email'] == data['email'] and r['password'] == data['password']), None)
    if rider:
        return jsonify({'message': 'Login successful'}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)