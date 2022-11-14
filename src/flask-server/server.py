from flask import Flask, request

app = Flask(__name__)

import rds_db as db

@app.route("/")
def index():
    print("here")
    return "Hello World!"

@app.route('/create', methods=['POST'])
def insertRoute():
    print("made it here")
    if request.method == 'POST':
        name= request.form['name']
        email= request.form['email']
        password= request.form['password']
        movements= request.form['movements']
        wall= request.form['wall']
        hold= request.form['hold'] 
        db.insert_user(name, email, password, movements, wall, hold)
        users = db.get_user()
        print(users)

@app.route('/data')
def get_time():
    return {
        'Name':"geek", 
        "Age":"22",
        "Date":"hey", 
        "programming":"python"
        }

@app.get("/route")
def getRoute():
    print("i'm here")
    routes = db.get_route
    print(routes)

if __name__ == "__main__":
    app.run(debug=True)
