exports.handler = async (event) => {
    let response={
        statusCode: 200,
        body: 'Anuhya Uppalapati says '+event["queryStringParameters"]['keyword'],
    };
    return response;
};