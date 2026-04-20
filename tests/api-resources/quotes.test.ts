// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RandomQuoteAPI from 'random-quote-api';

const client = new RandomQuoteAPI({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource quotes', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.quotes.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
