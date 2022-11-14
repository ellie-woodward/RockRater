import pymysql

conn = pymysql.connect (
    host = "database-1.crfcb5hcbuci.us-east-1.rds.amazonaws.com",
    port = 3306,
    user = "setter",
    password = "password",
    db = "RockRater"
)

# cursor=conn.cursor()
# create_table="""
# create table Routes (routeName varchar(200),setterName varchar(200),grade float(),belayNumber int(),color varchar(200))
# create table Users (name varchar(200),email varchar(200),password varchar(200),movements varchar(200),wall varchar(200),hold varchar(200))
# """
# cursor.execute(create_table)

def insert_route(name, setter, grade, number, color):
    cur=conn.cursor()
    cur.execute("INSERT INTO Routes (name,setter,grade,number,color) VALUES (%s,%s,%d,%d,%s)")
    conn.commit

def insert_user(name, email, password, movements, wall, hold):
    cur=conn.cursor()
    cur.execute("INSERT INTO Users (name,email,password,movements,wall,hold) VALUES (%s,%s,%s,%s,%s,%s)")
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