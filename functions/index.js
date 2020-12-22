const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51Hz44jIuu30IjyLcfTz9kV2BwVPRvDpFp5Ys8ZFf3O8PLVAP6EkZX36oD3RJxYtBe32gW2zgaNNYOS8rhAR73p4m00gf3HmL0f')

// API

// App config
const app = express();

// Middleware
app.use(cors({origin: true}))
app.use(express.json())

// API routes
app.get('/', (request, response) => response
    .status(200)
    .send('Hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received', total);
})

// Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/my-f4f2f/us-central1/api