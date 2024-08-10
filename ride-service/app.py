from flask import Flask, jsonify, request

app = Flask(__name__)

rides = []

@app.route('/rides', methods=['POST'])
def request_ride():
    ride = request.json
    rides.append(ride)
    return jsonify(ride), 201

@app.route('/rides', methods=['GET'])
def get_rides():
    return jsonify(rides), 200

@app.route('/rides/<int:ride_id>', methods=['GET'])
def get_ride(ride_id):
    ride = next((r for r in rides if r['id'] == ride_id), None)
    if ride:
        return jsonify(ride), 200
    return jsonify({'message': 'Ride not found'}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)