from app import app
from flask import request, jsonify


@app.route("/api/clients", methods=["POST"])
def add_client():
    data = request.json
    return jsonify({"message": "Client added successfully!"}), 201


@app.route("/api/list", methods=["GET"])
def get_client():
    clients = request.json
    return jsonify({"clients": clients})
