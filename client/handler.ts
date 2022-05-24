// import AWS from "aws-sdk";
// import { Handler } from "aws-lambda";
// import { v4 } from "uuid";

// const docClient = new AWS.DynamoDB.DocumentClient();
// const tableName = "CustomersTable";

// const headers = {
//   "content-type": "application/json",
// };
// export const createUser: Handler = (event, context, callback) => {
//   const params = {
//     Item: {
//       UserId: {
//         S: v4(),
//       },
//       Age: {
//         N: "28",
//       },
//       Name: {
//         S: "bobby Ray",
//       },
//       Email: {
//         S: "bobRay420",
//       },
//     },
//     TableName: tableName,
//   };
// };

// export const createUser: APIGatewayProxyHandler = async (
//   event: APIGatewayProxyEvent
// ): Promise<APIGatewayProxyResult> => {
//   const reqBody = JSON.parse(event.body as string);
//   const user = {
//     ...reqBody,
//     userId: v4(),
//   };

//   await docClient
//     .put({
//       TableName: tableName,
//       Item: user,
//     })
//     .promise();

//   return {
//     statusCode: 201,
//     body: JSON.stringify(user),
//   };
// };

// export const getUser: APIGatewayProxyHandler = async (
//   event: APIGatewayProxyEvent
// ): Promise<APIGatewayProxyResult> => {
//   const id = event.pathParameters?.id;
//   const output = await docClient
//     .get({
//       TableName: tableName,
//       Key: {
//         userId: id,
//       },
//     })
//     .promise();

//   if (!output.Item) {
//     return {
//       statusCode: 404,
//       body: JSON.stringify({ error: "not found" }),
//     };
//   }

//   return {
//     statusCode: 200,
//     body: JSON.stringify(output.Item),
//   };
// };
