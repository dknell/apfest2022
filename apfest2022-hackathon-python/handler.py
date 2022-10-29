import json
import datetime


def databases(event, context):
    body = {
        "message": "Go Team Cobra Force!! Your function executed successfully!"
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response
