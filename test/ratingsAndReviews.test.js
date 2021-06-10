const axios = require('axios');
import React from 'react';
import {render, screen} from '@testing-library/react';
import RatingsAndReviews from '../client/src/modules/ratingsAndReviews/ratingsAndReviews.jsx';

describe('Ratings and reviews', () => {
  test('renders Review', () => {
    const {container} = render(<RatingsAndReviews />);
    expect(container.contains(screen.getByText("Review"))).toBe(true);
  });
});

describe('test API connection', function() {
  test('should respond to a GET request for reviews', function () {
    axios({
      url: "http://localhost:3001/reviews",
      data: {id: 25167}
    })
      .then((response) => {
        expect(JSON.stringify(response.data)).toBe(
          JSON.stringify({
            "product": "25167",
            "page": 0,
            "count": 5,
            "results": [
                {
                    "review_id": 406630,
                    "rating": 5,
                    "summary": "Camo Onesie",
                    "recommend": true,
                    "response": null,
                    "body": "Blend in to your crowd",
                    "date": "2021-06-07T00:00:00.000Z",
                    "reviewer_name": "test post",
                    "helpfulness": 0,
                    "photos": []
                },
                {
                    "review_id": 406629,
                    "rating": 3,
                    "summary": "Camo Onesie",
                    "recommend": true,
                    "response": null,
                    "body": "Blend in to your crowd",
                    "date": "2021-06-07T00:00:00.000Z",
                    "reviewer_name": "Jackets",
                    "helpfulness": 0,
                    "photos": []
                },
                {
                    "review_id": 406628,
                    "rating": 3,
                    "summary": "Camo Onesie",
                    "recommend": true,
                    "response": null,
                    "body": "Blend in to your crowd",
                    "date": "2021-06-07T00:00:00.000Z",
                    "reviewer_name": "Jackets",
                    "helpfulness": 0,
                    "photos": []
                },
                {
                    "review_id": 406627,
                    "rating": 5,
                    "summary": "Camo Onesie",
                    "recommend": true,
                    "response": null,
                    "body": "Blend in to your crowd",
                    "date": "2021-06-07T00:00:00.000Z",
                    "reviewer_name": "Jackets",
                    "helpfulness": 0,
                    "photos": []
                },
                {
                    "review_id": 406626,
                    "rating": 5,
                    "summary": "Camo Onesie",
                    "recommend": true,
                    "response": null,
                    "body": "Blend in to your crowd",
                    "date": "2021-06-07T00:00:00.000Z",
                    "reviewer_name": "Jackets",
                    "helpfulness": 0,
                    "photos": []
                }
            ]
          })
        );
      })
      .catch(console.error)
  });
});