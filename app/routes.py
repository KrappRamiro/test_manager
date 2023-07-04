from app import app
from flask import render_template, request, jsonify, make_response
from app.forms import TestsForm

app.config["SECRET_KEY"] = "your_secret_key_here"


@app.route("/")
def index():
    # Que aca te deje seleccionar que proyecto queres ver
    return render_template("index.html")


@app.route("/process-form/", methods=["GET", "POST"])
def process_form():
    form_data = {}
    for key, value in request.form.items():
        form_data[key] = value

    files = request.files
    for key, file in files.items():
        form_data[key] = file.filename
    print(form_data)
    return "Files processed successfully"
