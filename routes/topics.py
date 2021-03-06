from utils.constants_funcs import *
from utils.crossdomain import *
import json
from . import routes
from flask import g


# Retrieve all topics
# http://127.0.0.1:8080/api/topics/all
@routes.route('/api/topics/all', methods=['GET'])
@crossdomain(origin='*')
def topics_all():
    if request.method == 'GET':
        try:
            exe_sql = "SELECT * FROM topics"
            res = g.conn.execute(exe_sql)
            rows = res.fetchall()
            topics = []
            for row in rows:
                exe_sql = "SELECT count(*) AS count FROM belongs, topics " \
                          "WHERE topics.name = belongs.topic AND topics.name = %s"
                res = g.conn.execute(exe_sql, row["name"])
                row_count = res.fetchone()
                topic = {
                    "topic_name": row["name"],
                    "description": row["description"],
                    "count": row_count["count"]
                }
                topics.append(topic)
            ret = {}
            ret[STATUS] = SUCCESS
            ret[RESULT] = topics
            print ret
            return json.dumps(ret)
        except Exception, e:
            print e
            return default_error_msg(e.message)


# User subscribes topic
# http://0.0.0.0:8080/api/topics/subscribes?uid=6&topicName=science&isSubscribe=0
@routes.route('/api/topics/subscribes', methods=['GET'])
@crossdomain(origin='*')
def topic_subscribes():
    if request.method == 'GET':
        try:
            is_sub = request.args.get('isSubscribe')
            uid = request.args.get('uid')
            topicName = request.args.get('topicName')
            if is_sub == "0":
                exe_sql = "DELETE FROM subscribes WHERE uid = %s AND topic = %s"
                g.conn.execute(exe_sql, uid, topicName)
            elif is_sub == "1":
                exe_sql = "SELECT count(*) AS count FROM subscribes WHERE uid = %s AND topic = %s"
                count = g.conn.execute(exe_sql, uid, topicName).fetchone()["count"]
                if count == 0:
                    exe_sql = "INSERT INTO subscribes(uid, topic) VALUES(%s, %s)"
                    g.conn.execute(exe_sql, uid, topicName)
            else:
                raise Exception("isSubscribe should be either 0 or 1")
            ret = {}
            ret[STATUS] = SUCCESS
            ret[RESULT] = NULL
            print ret
            return json.dumps(ret)
        except Exception, e:
            print e
            return default_error_msg(e.message)
