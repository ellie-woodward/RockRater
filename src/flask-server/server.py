from flask import Flask, request, jsonify, current_app
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://Setter:password@database-1.crfcb5hcbuci.us-east-1.rds.amazonaws.com/RockRater'
app.config['SQLALCHEMY_TRACK_MODIFICATONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


# Users class for the Users column of the Database
# can add Users
# can get Users
class Users(db.Model):
    name = db.Column(db.String(100), primary_key=True)
    email = db.Column(db.String(100))
    password = db.Column(db.String(100))
    movements = db.Column(db.String(100))
    wall = db.Column(db.String(100))
    hold = db.Column(db.String(100))

    def __init__(self, name, email, password, movements, wall, hold):
        self.name = name
        self.email = email
        self.password = password
        self.movements = movements
        self.wall = wall
        self.hold = hold

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('name', 'email', 'password', 'movements', 'wall', 'hold')

user_schema = UsersSchema()
users_schema = UsersSchema(many=True)

@app.route('/getUsers', methods = ['GET'])
def get_users():
    all_users = Users.query.all()
    results = users_schema.dump(all_users)
    return jsonify(results)

@app.route('/getUsers/<name>/', methods = ['GET'])
def get_users_by_name(name):
    user = Users.query.get(name)
    return user_schema.jsonify(user)

@app.route('/deleteUsers/<name>/', methods = ['DELETE'])
def delete_user_by_routeName(name):
    user = Users.query.get(name)
    db.session.delete(user)
    db.session.commit()
    return user_schema.jsonify(user)

@app.route('/addUsers', methods = ['POST'])
def addUser():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    movements = request.json['movements']
    wall = request.json['wall']
    hold = request.json['hold']

    users = Users(name, email, password, movements, wall, hold)
    db.session.add(users)
    db.session.commit()
    return user_schema.jsonify(users)


# Routes class for the Routes column of the Database
# can add routes
# can get Routes
class Routes(db.Model):
    routeName = db.Column(db.String(100), primary_key=True)
    setterName = db.Column(db.String(100))
    grade = db.Column(db.Float())
    belayNumber = db.Column(db.Integer())
    color = db.Column(db.String(100))

    def __init__(self, routeName, setterName, grade, belayNumber, color):
        self.routeName = routeName
        self.setterName = setterName
        self.grade = grade
        self.belayNumber = belayNumber
        self.color = color

class RoutesSchema(ma.Schema):
    class Meta:
        fields = ('routeName', 'setterName', 'grade', 'belayNumber', 'color')

route_schema = RoutesSchema()
routes_schema = RoutesSchema(many=True)

@app.route('/getRoutes', methods = ['GET'])
def get_Routes():
    all_routes = Routes .query.all()
    results = routes_schema.dump(all_routes)
    return jsonify(results)

@app.route('/getRoutes/<routeName>/', methods = ['GET'])
def get_route_by_name(routeName):
    route = Routes.query.get(routeName)
    return  route_schema.jsonify(route)

@app.route('/deleteRoutes/<routeName>/', methods = ['DELETE'])
def delete_route_by_routeName(routeName):
    print("im here") 
    route = Routes.query.get(routeName)
    print("im here 1") 
    print(type(route))
    db.session.delete(route)
    print("im here 2") 
    db.session.commit()
    print("im here 3") 
    return route_schema.jsonify(route)

@app.route('/addRoutes', methods = ['POST'])
def addRoutes():
    routeName = request.json['routeName']
    setterName = request.json['setterName']
    grade = request.json['grade']
    belayNumber = request.json['belayNumber']
    color = request.json['color']

    routes = Routes(routeName, setterName, grade, belayNumber, color)
    db.session.add(routes)
    db.session.commit()
    return route_schema.jsonify(routes)


# Comments class for the Comments column of the Database
# can add Comments
# can get Comments
class Comments(db.Model):
    routeName = db.Column(db.String(100))
    userName = db.Column(db.String(100))
    review = db.Column(db.String(100000), primary_key=True)

    def __init__(self, routeName, userName, review):
        self.routeName = routeName
        self.userName = userName
        self.review = review

class CommentsSchema(ma.Schema):
    class Meta:
        fields = ('routeName', 'userName', 'review')

comment_schema = CommentsSchema()
comments_schema = CommentsSchema(many=True)

@app.route('/getComments', methods = ['GET'])
def get_Comments():
    all_comments = Comments.query.all()
    results = comments_schema.dump(all_comments)
    return jsonify(results)

@app.route('/getComments/<routeName>/', methods = ['GET'])
def get_comments_by_routeName(routeName):
    comments = Comments.query.get(routeName)
    return comment_schema.jsonify(comments)

@app.route('/deleteComments/<comment>/', methods = ['DELETE'])
def delete_comments_by_routeName(comment):
    comments = Comments.query.get(comment)
    db.session.delete(comments)
    db.session.commit()
    return comments_schema.jsonify(comments)


@app.route('/addComments', methods = ['POST'])
def addComments():
    routeName = request.json['routeName']
    userName = request.json['userName']
    review = request.json['review']

    comments = Comments(routeName, userName, review)
    db.session.add(comments)
    db.session.commit()
    return comment_schema.jsonify(comments)    

if __name__ == "__main__":
    app.run(debug=True)
