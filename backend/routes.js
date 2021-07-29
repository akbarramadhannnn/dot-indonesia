const express = require('express');
const router = express.Router();
const request = require('request');

router.post('/provinsi', (req, res, next) => {
  const { id } = req.body;

  var options = {
    method: 'GET',
    url: 'https://api.rajaongkir.com/starter/province',
    headers: { key: '62c573ad86a63af18a82ecedc984ed33' },
  };

  if (id) {
    options.qs = {
      id: id,
    };
  }

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    const result = JSON.parse(body);
    return res.json(result);
  });
});

router.post('/city', (req, res, next) => {
  const { id, provinsi } = req.body;

  var options = {
    method: 'GET',
    url: 'https://api.rajaongkir.com/starter/city',
    headers: { key: '62c573ad86a63af18a82ecedc984ed33' },
  };

  if (id) {
    options.qs = {
      id: id,
    };
  } else if (provinsi) {
    options.qs = {
      province: provinsi,
    };
  }

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    const result = JSON.parse(body);
    return res.json(result);
  });
});

router.post('/cost', (req, res, next) => {
  const { origin, destination, weight, courier } = req.body;

  var options = {
    method: 'POST',
    url: 'https://api.rajaongkir.com/starter/cost',
    headers: {
      key: '62c573ad86a63af18a82ecedc984ed33',
      'content-type': 'application/x-www-form-urlencoded',
    },
    form: { origin, destination, weight, courier },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    const result = JSON.parse(body);
    return res.json(result);
  });
});

module.exports = router;
