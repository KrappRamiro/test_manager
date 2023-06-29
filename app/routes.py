from app import app
from flask import render_template, request, jsonify
from app.forms import TestsForm

app.config["SECRET_KEY"] = "your_secret_key_here"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/process-form/", methods=["GET", "POST"])
def process_form():
    form_data = request.get_json()
    return jsonify(form_data)
