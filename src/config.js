const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "cloud-note-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://k9alisidr1.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_SRvyfa2Qo",
    APP_CLIENT_ID: "39o8225e98su781vggigmksa9j",
    IDENTITY_POOL_ID: "us-east-1:43cd4d7d-b212-4032-b13c-5e1291af45b4",
  },
};

export default config;