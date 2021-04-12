const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const {ApolloServer, gql} = require("");

// eslint-disable-next-line max-len
const serviceAccount = require("./chat-function-react-graphql-firebase-adminsdk-4xwmt-2bb6f245d9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
