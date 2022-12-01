import pymysql

conn = pymysql.connect (
    host = 'database-1.crfcb5hcbuci.us-east-1.rds.amazonaws.com',
    port = 3306,
    user = 'Setter',
    password = 'password',
    db = 'RockRater'
)

def insert_route(name, setter, grade, number, color):
    cur=conn.cursor()
    cur.execute("INSERT INTO Routes (name,setter,grade,number,color) VALUES (%s,%s,%d,%d,%s)", (name, setter, grade, number, color))
    conn.commit

def insert_user(name, email, password, movements, wall, hold):
    cur=conn.cursor()
    cur.execute("INSERT INTO Users (name,email,password,movements,wall,hold) VALUES (%s,%s,%s,%s,%s,%s)", (name, email, password, movements, wall, hold))
    conn.commit

def insert_comment(route, user, comment):
    cur=conn.cursor()
    cur.execute("INSERT INTO Users (routeName, userName, comment) VALUES (%s,%s,%s)", (route, user, comment))
    conn.commit

def get_route():
    cur=conn.cursor()
    cur.execute("SELECT * FROM Routes")
    route = cur.fetchall()
    return route

def get_user():
    cur=conn.cursor()
    cur.execute("SELECT * FROM Users")
    users = cur.fetchall()
    return users

def get_comment():
    cur=conn.cursor()
    cur.execute("SELECT * FROM Comments")
    users = cur.fetchall()
    return users