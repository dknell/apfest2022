import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult
} from "aws-lambda";

export const databases = async (
  event: APIGatewayProxyEvent
): Promise < APIGatewayProxyResult > => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Team V8!! Your function executed successfully!",
    }, ),
  };
};
