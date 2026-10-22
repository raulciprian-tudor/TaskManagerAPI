from flask import Flask
import sqlite3
from dotenv import load_dotenv
from flask_cors import CORS
import os

load_dotenv()  # we need to load .env file here

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])
# Connect to the SQLite database
connection = sqlite3.connect("taskmanager.db")
# create a cursor object -> responsible for executing SQL commands and queries on db
cursor = connection.cursor()

from app import routes
