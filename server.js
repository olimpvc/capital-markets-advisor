const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', async (req, res) => {
  try {
    const formData = new URLSearchParams(req.body);

    const response = await fetch('https://docs.google.com/forms/u/2/d/11qO_XyP929--QbLP9rXj9zzDPDlinZ9Nd051klkJlj8/formResponse', {
      method: 'POST',
      body: formData,
    });

    res.status(200).send('Form submitted successfully');
  } catch (error) {
    res.status(500).send('Error submitting form');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});