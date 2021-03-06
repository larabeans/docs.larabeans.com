define({ "api": [
  {
    "group": "Localization",
    "name": "getAllLocalizations",
    "type": "GET",
    "url": "/v1/localizations",
    "title": "Get all localizations",
    "description": "<p>Return all available localizations that are &quot;configured&quot; in the application</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  // TODO..\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Localization/UI/API/Routes/GetAllLocalizations.v1.private.php",
    "groupTitle": "Localization"
  },
  {
    "group": "Location",
    "name": "createCity",
    "type": "POST",
    "url": "/v1/cities",
    "title": "Create New City",
    "description": "<p>Adds city to existing state and country</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticate User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/CreateCity.v1.private.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"City\",\n    \"id\":\"eqwja3vw94kzmxr0\",\n    \"name\":\"City Name\",\n    \"latitude\":null,\n    \"longitude\":null\n  },\n  \"meta\":{\n    \"include\":[\n    ],\n    \"custom\":[\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "createCountry",
    "type": "POST",
    "url": "/v1/countries",
    "title": "Create Country",
    "description": "<p>Adds country record</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "native",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alpha2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alpha3",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isd",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "capital",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "continent",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcontinent",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emoji",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emoji_unicode",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/CreateCountry.v1.private.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"Country\",\n    \"id\":\"eqwja3vw94kzmxr0\",\n    \"name\":\"Country Name\",\n    \"code\":null,\n    \"native\":null,\n    \"alpha2\":null,\n    \"alpha3\":null,\n    \"isd\":null,\n    \"capital\":null,\n    \"currency\":null,\n    \"emoji\":null,\n    \"emoji_unicode\":null,\n  },\n  \"meta\":{\n    \"include\":[\n      States,\n      Cities\n    ],\n    \"custom\":[\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "createLocation",
    "type": "POST",
    "url": "/v1/locations",
    "title": "Create Location",
    "description": "<p>Creates Location/Address for any locatable entity</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locatable_type",
            "description": "<p>Type of locatable entity e.g. user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locatable_id",
            "description": "<p>UUID of locatable entity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address_line_1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address_line_2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "post_code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/CreateLocation.v1.private.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      \"object\": \"Location\",\n      \"id\": \"\",\n      \"address_line_1\": \"House #335, Street #17\",\n      \"address_line_2\": \"Bla Bla Town, Phase 1\",\n      \"post_code\": \"0213 566\",\n      \"latitude\": \"0.899656565\",\n      \"longitude\": \"0.323565666\",\n      \"created_at\": \"2021-01-19T06:12:35.000000Z\",\n      \"updated_at\": \"2021-01-19T06:12:35.000000Z\",\n      \"real_id\": \"87dbf76c-099d-4c6c-bc8c-5c440e51a785\",\n      \"country\": {\n      \"data\": {\n        \"object\": \"Country\",\n        \"id\": \"gomreqn3a943vxpl\",\n        \"name\": \"Pakistan\",\n        \"native\": \"Pakistan\",\n        \"alpha2\": \"PK\",\n        \"alpha3\": \"PAK\",\n        \"isd\": \"92\",\n        \"capital\": \"Islamabad\",\n        \"currency\": \"PKR\",\n        \"continent\": \"Asia\",\n        \"subcontinent\": \"Southern Asia\",\n        \"emoji\": \"🇵🇰\",\n        \"emoji_unicode\": \"U+1F1F5 U+1F1F0\",\n        \"created_at\": \"2021-01-19T06:12:35.000000Z\",\n        \"updated_at\": \"2021-01-19T06:12:35.000000Z\",\n        \"real_id\": 167\n        }\n      },\n      \"state\": {\n        \"data\": {\n          \"object\": \"State\",\n          \"id\": \"qekr8ny0vy7b6mjx\",\n          \"country_id\": 167,\n          \"name\": \"Islamabad Capital Territory\",\n          \"code\": \"IS\",\n          \"created_at\": \"2021-01-19T06:12:38.000000Z\",\n          \"updated_at\": \"2021-01-19T06:12:38.000000Z\",\n          \"real_id\": 3169\n        }\n      },\n      \"city\": {\n        \"data\": {\n          \"object\": \"City\",\n          \"id\": \"0o6vk48q9w04pw9j\",\n          \"name\": \"Islamabad\",\n          \"latitude\": \"33.72148000\",\n          \"longitude\": \"73.04329000\",\n          \"created_at\": \"2021-01-19T06:13:42.000000Z\",\n          \"updated_at\": \"2021-01-19T06:13:42.000000Z\",\n          \"real_id\": 85475\n        }\n      }\n    }\n  ],\n  \"meta\": {\n    \"include\": [\n      \"country\",\n      \"state\",\n      \"city\"\n    ],\n    \"custom\": [],\n    \"pagination\": {\n      \"total\": 1,\n      \"count\": 1,\n      \"per_page\": 10,\n      \"current_page\": 1,\n      \"total_pages\": 1,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "createState",
    "type": "POST",
    "url": "/v1/states",
    "title": "Create State",
    "description": "<p>Add state record to existing country</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/CreateState.v1.private.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"State\",\n    \"id\":\"eqwja3vw94kzmxr0\",\n    \"name\":\"State Name\",\n    \"code\":null\n  },\n  \"meta\":{\n    \"include\":[\n      Cities\n    ],\n    \"custom\":[\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "deleteCity",
    "type": "DELETE",
    "url": "/v1/cities/:id",
    "title": "Delete City",
    "description": "<p>Deletes existing city record</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>City Id</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/DeleteCity.v1.private.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"City\",\n    \"id\":\"eqwja3vw94kzmxr0\",\n    \"name\":\"City Name\",\n    \"latitude\":null,\n    \"longitude\":null\n  },\n  \"meta\":{\n    \"include\":[\n    ],\n    \"custom\":[\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "deleteCountry",
    "type": "DELETE",
    "url": "/v1/countries/:id",
    "title": "Delete Country",
    "description": "<p>Deletes existing country record</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Country Id</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/DeleteCountry.v1.private.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"Country\",\n    \"id\":\"eqwja3vw94kzmxr0\",\n    \"name\":\"Country Name\",\n    \"code\":null,\n    \"native\":null,\n    \"alpha2\":null,\n    \"alpha3\":null,\n    \"isd\":null,\n    \"capital\":null,\n    \"currency\":null,\n    \"emoji\":null,\n    \"emoji_unicode\":null,\n  },\n  \"meta\":{\n    \"include\":[\n      States,\n      Cities\n    ],\n    \"custom\":[\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "deleteLocation",
    "type": "DELETE",
    "url": "/v1/locations/:id",
    "title": "Delete a Location",
    "description": "<p>Delete Location by Id</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Location id</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/DeleteLocation.v1.public.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      \"object\": \"Location\",\n      \"id\": \"\",\n      \"address_line_1\": \"House #335, Street #17\",\n      \"address_line_2\": \"Bla Bla Town, Phase 1\",\n      \"post_code\": \"0213 566\",\n      \"latitude\": \"0.899656565\",\n      \"longitude\": \"0.323565666\",\n      \"created_at\": \"2021-01-19T06:12:35.000000Z\",\n      \"updated_at\": \"2021-01-19T06:12:35.000000Z\",\n      \"real_id\": \"87dbf76c-099d-4c6c-bc8c-5c440e51a785\",\n      \"country\": {\n      \"data\": {\n        \"object\": \"Country\",\n        \"id\": \"gomreqn3a943vxpl\",\n        \"name\": \"Pakistan\",\n        \"native\": \"Pakistan\",\n        \"alpha2\": \"PK\",\n        \"alpha3\": \"PAK\",\n        \"isd\": \"92\",\n        \"capital\": \"Islamabad\",\n        \"currency\": \"PKR\",\n        \"continent\": \"Asia\",\n        \"subcontinent\": \"Southern Asia\",\n        \"emoji\": \"🇵🇰\",\n        \"emoji_unicode\": \"U+1F1F5 U+1F1F0\",\n        \"created_at\": \"2021-01-19T06:12:35.000000Z\",\n        \"updated_at\": \"2021-01-19T06:12:35.000000Z\",\n        \"real_id\": 167\n        }\n      },\n      \"state\": {\n        \"data\": {\n          \"object\": \"State\",\n          \"id\": \"qekr8ny0vy7b6mjx\",\n          \"country_id\": 167,\n          \"name\": \"Islamabad Capital Territory\",\n          \"code\": \"IS\",\n          \"created_at\": \"2021-01-19T06:12:38.000000Z\",\n          \"updated_at\": \"2021-01-19T06:12:38.000000Z\",\n          \"real_id\": 3169\n        }\n      },\n      \"city\": {\n        \"data\": {\n          \"object\": \"City\",\n          \"id\": \"0o6vk48q9w04pw9j\",\n          \"name\": \"Islamabad\",\n          \"latitude\": \"33.72148000\",\n          \"longitude\": \"73.04329000\",\n          \"created_at\": \"2021-01-19T06:13:42.000000Z\",\n          \"updated_at\": \"2021-01-19T06:13:42.000000Z\",\n          \"real_id\": 85475\n        }\n      }\n    }\n  ],\n  \"meta\": {\n    \"include\": [\n      \"country\",\n      \"state\",\n      \"city\"\n    ],\n    \"custom\": [],\n    \"pagination\": {\n      \"total\": 1,\n      \"count\": 1,\n      \"per_page\": 10,\n      \"current_page\": 1,\n      \"total_pages\": 1,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "deleteState",
    "type": "DELETE",
    "url": "/v1/states/:id",
    "title": "Delete State",
    "description": "<p>Deletes existing state record</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>State Id</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/DeleteState.v1.private.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"State\",\n    \"id\":\"eqwja3vw94kzmxr0\",\n    \"name\":\"State Name\",\n    \"code\":null\n  },\n  \"meta\":{\n    \"include\":[\n      Cities\n    ],\n    \"custom\":[\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "findCity",
    "type": "GET",
    "url": "/v1/cities/:id",
    "title": "Find City",
    "description": "<p>Find City BY Id</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>City Id</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/FindCity.v1.public.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"City\",\n    \"id\":\"eqwja3vw94kzmxr0\",\n    \"name\":\"City Name\",\n    \"latitude\":null,\n    \"longitude\":null\n  },\n  \"meta\":{\n    \"include\":[\n    ],\n    \"custom\":[\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "findCountry",
    "type": "GET",
    "url": "/v1/countries/:id",
    "title": "Find Country",
    "description": "<p>Find country by Id</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Country Id</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/FindCountry.v1.public.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"Country\",\n    \"id\":\"eqwja3vw94kzmxr0\",\n    \"name\":\"Country Name\",\n    \"code\":null,\n    \"native\":null,\n    \"alpha2\":null,\n    \"alpha3\":null,\n    \"isd\":null,\n    \"capital\":null,\n    \"currency\":null,\n    \"emoji\":null,\n    \"emoji_unicode\":null,\n  },\n  \"meta\":{\n    \"include\":[\n      States,\n      Cities\n    ],\n    \"custom\":[\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "findLocation",
    "type": "GET",
    "url": "/v1/locations/:id",
    "title": "Find Location",
    "description": "<p>Find location by id</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Location ID</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/FindLocation.v1.public.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      \"object\": \"Location\",\n      \"id\": \"\",\n      \"address_line_1\": \"House #335, Street #17\",\n      \"address_line_2\": \"Bla Bla Town, Phase 1\",\n      \"post_code\": \"0213 566\",\n      \"latitude\": \"0.899656565\",\n      \"longitude\": \"0.323565666\",\n      \"created_at\": \"2021-01-19T06:12:35.000000Z\",\n      \"updated_at\": \"2021-01-19T06:12:35.000000Z\",\n      \"real_id\": \"87dbf76c-099d-4c6c-bc8c-5c440e51a785\",\n      \"country\": {\n      \"data\": {\n        \"object\": \"Country\",\n        \"id\": \"gomreqn3a943vxpl\",\n        \"name\": \"Pakistan\",\n        \"native\": \"Pakistan\",\n        \"alpha2\": \"PK\",\n        \"alpha3\": \"PAK\",\n        \"isd\": \"92\",\n        \"capital\": \"Islamabad\",\n        \"currency\": \"PKR\",\n        \"continent\": \"Asia\",\n        \"subcontinent\": \"Southern Asia\",\n        \"emoji\": \"🇵🇰\",\n        \"emoji_unicode\": \"U+1F1F5 U+1F1F0\",\n        \"created_at\": \"2021-01-19T06:12:35.000000Z\",\n        \"updated_at\": \"2021-01-19T06:12:35.000000Z\",\n        \"real_id\": 167\n        }\n      },\n      \"state\": {\n        \"data\": {\n          \"object\": \"State\",\n          \"id\": \"qekr8ny0vy7b6mjx\",\n          \"country_id\": 167,\n          \"name\": \"Islamabad Capital Territory\",\n          \"code\": \"IS\",\n          \"created_at\": \"2021-01-19T06:12:38.000000Z\",\n          \"updated_at\": \"2021-01-19T06:12:38.000000Z\",\n          \"real_id\": 3169\n        }\n      },\n      \"city\": {\n        \"data\": {\n          \"object\": \"City\",\n          \"id\": \"0o6vk48q9w04pw9j\",\n          \"name\": \"Islamabad\",\n          \"latitude\": \"33.72148000\",\n          \"longitude\": \"73.04329000\",\n          \"created_at\": \"2021-01-19T06:13:42.000000Z\",\n          \"updated_at\": \"2021-01-19T06:13:42.000000Z\",\n          \"real_id\": 85475\n        }\n      }\n    }\n  ],\n  \"meta\": {\n    \"include\": [\n      \"country\",\n      \"state\",\n      \"city\"\n    ],\n    \"custom\": [],\n    \"pagination\": {\n      \"total\": 1,\n      \"count\": 1,\n      \"per_page\": 10,\n      \"current_page\": 1,\n      \"total_pages\": 1,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "findState",
    "type": "GET",
    "url": "/v1/states/:id",
    "title": "Find State",
    "description": "<p>Find state by Id</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>State Id</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/FindState.v1.public.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"State\",\n    \"id\":\"eqwja3vw94kzmxr0\",\n    \"name\":\"State Name\",\n    \"code\":null\n  },\n  \"meta\":{\n    \"include\":[\n      Cities\n    ],\n    \"custom\":[\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "getAllCities",
    "type": "GET",
    "url": "/v1/cities",
    "title": "Get All Cities",
    "description": "<p>Get all cities,query parameters supporting search criteria available here</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>include columns e.g. id;name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>search columns e.g. name:search-users</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>name of column e.g. id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortedBy",
            "description": "<p>asc or desc</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "include",
            "description": "<p>country,state,city</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>records per page</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/GetAllCities.v1.public.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      // same object structure of the single response\n    },\n    {\n      // ...\n    },\n    // ...\n  ],\n  \"include\": [\n    \"xxx\",\n    \"yyy\",\n  ],\n  \"custom\": [],\n  \"meta\": {\n    \"pagination\": {\n      \"total\": x,\n      \"count\": x,\n      \"per_page\": x,\n      \"current_page\": x,\n      \"total_pages\": x,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "getAllCountries",
    "type": "GET",
    "url": "/v1/countries",
    "title": "Get All Countries",
    "description": "<p>Get all countries,query parameters supporting search criteria available here</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>include columns e.g. id;name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>search columns e.g. name:search-users</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>name of column e.g. id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortedBy",
            "description": "<p>asc or desc</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "include",
            "description": "<p>country,state,city</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>records per page</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/GetAllCountries.v1.public.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      // same object structure of the single response\n    },\n    {\n      // ...\n    },\n    // ...\n  ],\n  \"include\": [\n    \"xxx\",\n    \"yyy\",\n  ],\n  \"custom\": [],\n  \"meta\": {\n    \"pagination\": {\n      \"total\": x,\n      \"count\": x,\n      \"per_page\": x,\n      \"current_page\": x,\n      \"total_pages\": x,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "getAllLocations",
    "type": "GET",
    "url": "/v1/locations",
    "title": "Get all Locations",
    "description": "<p>Get all locations,query parameters supporting search criteria available here</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>include columns e.g. id;name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>search columns e.g. name:search-users</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>name of column e.g. id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortedBy",
            "description": "<p>asc or desc</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "include",
            "description": "<p>country,state,city</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>records per page</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/GetAllLocations.v1.public.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      // same object structure of the single response\n    },\n    {\n      // ...\n    },\n    // ...\n  ],\n  \"include\": [\n    \"xxx\",\n    \"yyy\",\n  ],\n  \"custom\": [],\n  \"meta\": {\n    \"pagination\": {\n      \"total\": x,\n      \"count\": x,\n      \"per_page\": x,\n      \"current_page\": x,\n      \"total_pages\": x,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "getAllStates",
    "type": "GET",
    "url": "/v1/states",
    "title": "Get All Cities",
    "description": "<p>Get all states,query parameters supporting search criteria available here</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>include columns e.g. id;name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>search columns e.g. name:search-users</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>name of column e.g. id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortedBy",
            "description": "<p>asc or desc</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "include",
            "description": "<p>country,state,city</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>records per page</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/GetAllStates.v1.public.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      // same object structure of the single response\n    },\n    {\n      // ...\n    },\n    // ...\n  ],\n  \"include\": [\n    \"xxx\",\n    \"yyy\",\n  ],\n  \"custom\": [],\n  \"meta\": {\n    \"pagination\": {\n      \"total\": x,\n      \"count\": x,\n      \"per_page\": x,\n      \"current_page\": x,\n      \"total_pages\": x,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "updateCity",
    "type": "PUT",
    "url": "/v1/cities/:id",
    "title": "Update City",
    "description": "<p>Endpoint description here..</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/UpdateCity.v1.private.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"City\",\n    \"id\":\"eqwja3vw94kzmxr0\",\n    \"name\":\"City Name\",\n    \"latitude\":null,\n    \"longitude\":null\n  },\n  \"meta\":{\n    \"include\":[\n    ],\n    \"custom\":[\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "updateCountry",
    "type": "PUT",
    "url": "/v1/countries/:id",
    "title": "Update Country",
    "description": "<p>Endpoint description here..</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "native",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alpha2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alpha3",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isd",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "capital",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "continent",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcontinent",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emoji",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emoji_unicode",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/UpdateCountry.v1.private.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"Country\",\n    \"id\":\"eqwja3vw94kzmxr0\",\n    \"name\":\"Country Name\",\n    \"code\":null,\n    \"native\":null,\n    \"alpha2\":null,\n    \"alpha3\":null,\n    \"isd\":null,\n    \"capital\":null,\n    \"currency\":null,\n    \"emoji\":null,\n    \"emoji_unicode\":null,\n  },\n  \"meta\":{\n    \"include\":[\n      States,\n      Cities\n    ],\n    \"custom\":[\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "updateLocation",
    "type": "PATCH",
    "url": "/v1/locations/:id",
    "title": "Update a location",
    "description": "<p>Update location by id</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address_line_1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address_line_2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "post_code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/UpdateLocation.v1.public.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      \"object\": \"Location\",\n      \"id\": \"\",\n      \"address_line_1\": \"House #335, Street #17\",\n      \"address_line_2\": \"Bla Bla Town, Phase 1\",\n      \"post_code\": \"0213 566\",\n      \"latitude\": \"0.899656565\",\n      \"longitude\": \"0.323565666\",\n      \"created_at\": \"2021-01-19T06:12:35.000000Z\",\n      \"updated_at\": \"2021-01-19T06:12:35.000000Z\",\n      \"real_id\": \"87dbf76c-099d-4c6c-bc8c-5c440e51a785\",\n      \"country\": {\n      \"data\": {\n        \"object\": \"Country\",\n        \"id\": \"gomreqn3a943vxpl\",\n        \"name\": \"Pakistan\",\n        \"native\": \"Pakistan\",\n        \"alpha2\": \"PK\",\n        \"alpha3\": \"PAK\",\n        \"isd\": \"92\",\n        \"capital\": \"Islamabad\",\n        \"currency\": \"PKR\",\n        \"continent\": \"Asia\",\n        \"subcontinent\": \"Southern Asia\",\n        \"emoji\": \"🇵🇰\",\n        \"emoji_unicode\": \"U+1F1F5 U+1F1F0\",\n        \"created_at\": \"2021-01-19T06:12:35.000000Z\",\n        \"updated_at\": \"2021-01-19T06:12:35.000000Z\",\n        \"real_id\": 167\n        }\n      },\n      \"state\": {\n        \"data\": {\n          \"object\": \"State\",\n          \"id\": \"qekr8ny0vy7b6mjx\",\n          \"country_id\": 167,\n          \"name\": \"Islamabad Capital Territory\",\n          \"code\": \"IS\",\n          \"created_at\": \"2021-01-19T06:12:38.000000Z\",\n          \"updated_at\": \"2021-01-19T06:12:38.000000Z\",\n          \"real_id\": 3169\n        }\n      },\n      \"city\": {\n        \"data\": {\n          \"object\": \"City\",\n          \"id\": \"0o6vk48q9w04pw9j\",\n          \"name\": \"Islamabad\",\n          \"latitude\": \"33.72148000\",\n          \"longitude\": \"73.04329000\",\n          \"created_at\": \"2021-01-19T06:13:42.000000Z\",\n          \"updated_at\": \"2021-01-19T06:13:42.000000Z\",\n          \"real_id\": 85475\n        }\n      }\n    }\n  ],\n  \"meta\": {\n    \"include\": [\n      \"country\",\n      \"state\",\n      \"city\"\n    ],\n    \"custom\": [],\n    \"pagination\": {\n      \"total\": 1,\n      \"count\": 1,\n      \"per_page\": 10,\n      \"current_page\": 1,\n      \"total_pages\": 1,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Location",
    "name": "updateState",
    "type": "PUT",
    "url": "/v1/states/:id",
    "title": "Update State",
    "description": "<p>Endpoint description here..</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Location/UI/API/Routes/UpdateState.v1.private.php",
    "groupTitle": "Location",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"State\",\n    \"id\":\"eqwja3vw94kzmxr0\",\n    \"name\":\"State Name\",\n    \"code\":null\n  },\n  \"meta\":{\n    \"include\":[\n      Cities\n    ],\n    \"custom\":[\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "OAuth2",
    "name": "ClientAdminWebAppLoginProxy",
    "type": "post",
    "url": "/v1/clients/web/admin/login",
    "title": "Login (Password Grant with proxy)",
    "description": "<p>Login Users using their email and password, without client_id and client_secret.</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token_type\": \"Bearer\",\n  \"expires_in\": 315360000,\n  \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbG...\",\n  \"refresh_token\": \"ZFDPA1S7H8Wydjkjl+xt+hPGWTagX...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Authentication/UI/API/Routes/ProxyLoginForAdminWebClient.v1.public.php",
    "groupTitle": "OAuth2"
  },
  {
    "group": "OAuth2",
    "name": "ClientAdminWebAppRefreshProxy",
    "type": "post",
    "url": "/v1/clients/web/admin/refresh",
    "title": "Refresh",
    "description": "<p>If <code>refresh_token</code> is not provided the w'll try to get it from the http cookie.</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "refresh_token",
            "description": "<p>The refresh Token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token_type\": \"Bearer\",\n  \"expires_in\": 315360000,\n  \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbG...\",\n  \"refresh_token\": \"ZFDPA1S7H8Wydjkjl+xt+hPGWTagX...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Authentication/UI/API/Routes/ProxyRefreshForAdminWebClient.v1.public.php",
    "groupTitle": "OAuth2"
  },
  {
    "group": "OAuth2",
    "name": "LoginCredentialsGrant",
    "type": "post",
    "url": "/v1/oauth/token",
    "title": "Login (Client Credentials Grant)",
    "description": "<p>Login Users using their username and passwords. (For Third-Party Clients). You must have client ID and secret first. You can generate them by creating new Client in our Web App.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_secret",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "description": "<p>must be <code>client_credentials</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scope",
            "description": "<p>you can leave it empty</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token_type\": \"Bearer\",\n  \"expires_in\": 315360000,\n  \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbG...\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Authentication/UI/API/Routes/LoginUsingCredentialGrant.v1.public.php",
    "groupTitle": "OAuth2"
  },
  {
    "group": "OAuth2",
    "name": "LoginPasswordGrant",
    "type": "post",
    "url": "/v1/oauth/token",
    "title": "Login (Password Grant)",
    "description": "<p>Login Users using their username and passwords. (For First-Party Clients)</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_secret",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "description": "<p>must be <code>password</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scope",
            "description": "<p>you can leave it empty</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token_type\": \"Bearer\",\n  \"expires_in\": 315360000,\n  \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbG...\",\n  \"refresh_token\": \"Oukd61zgKzt8TBwRjnasd...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Authentication/UI/API/Routes/LoginUsingPasswordGrant.v1.private.php",
    "groupTitle": "OAuth2"
  },
  {
    "group": "OAuth2",
    "name": "Logout",
    "type": "DELETE",
    "url": "/v1/logout",
    "title": "Logout",
    "description": "<p>User Logout. (Revoking Access Token)</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 Accepted\n{\n  \"message\": \"Token revoked successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Authentication/UI/API/Routes/Logout.v1.public.php",
    "groupTitle": "OAuth2"
  },
  {
    "group": "Payment",
    "name": "deletePaymentAccount",
    "type": "DELETE",
    "url": "/v1/user/paymentaccounts/:id",
    "title": "Delete Payment Account",
    "description": "<p>Deletes a payment account. Also deletes the corresponding model with the account details (e.g., for stripe, ...)</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    // ...\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Payment/UI/API/Routes/DeletePaymentAccount.v1.private.php",
    "groupTitle": "Payment"
  },
  {
    "group": "Payment",
    "name": "getPaymentAccount",
    "type": "GET",
    "url": "/v1/user/paymentaccounts/:id",
    "title": "Find Payment Account by ID",
    "description": "<p>Find Details for a specific payment account. Note that this outputs respective &quot;visible&quot; fields from the model of the Payment Provider (e.g., Paypal)</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  // ...\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Payment/UI/API/Routes/GetPaymentAccount.v1.private.php",
    "groupTitle": "Payment"
  },
  {
    "group": "Payment",
    "name": "getPaymentAccountDetails",
    "type": "GET",
    "url": "/v1/user/paymentaccounts/:id",
    "title": "Find Payment Account Details",
    "description": "<p>Find Details for a specific payment account. Note that this outputs respective &quot;visible&quot; fields from the model of the Payment Provider (e.g., Paypal)</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  // Insert the response of the request here...\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Payment/UI/API/Routes/FindPaymentAccountDetails.v1.private.php",
    "groupTitle": "Payment"
  },
  {
    "group": "Payment",
    "name": "getPaymentAccounts",
    "type": "GET",
    "url": "/v1/user/paymentaccounts",
    "title": "Get All Payment Accounts",
    "description": "<p>Get All Payment Accounts for this user</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  // Insert the response of the request here...\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Payment/UI/API/Routes/GetAllPaymentAccounts.v1.private.php",
    "groupTitle": "Payment"
  },
  {
    "group": "Payment",
    "name": "updatePaymentAccount",
    "type": "PATCH",
    "url": "/v1/user/paymentaccounts/:id",
    "title": "Update Payment Account",
    "description": "<p>Updates a single Payment Account. Does NOT (!) update the account credentials from the respective payment gateway (e.g., Paypal).</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    // ...\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Payment/UI/API/Routes/UpdatePaymentAccount.v1.private.php",
    "groupTitle": "Payment"
  },
  {
    "group": "RolePermission",
    "name": "assignUserToRole",
    "type": "post",
    "url": "/v1/roles/assign",
    "title": "Assign User to Roles",
    "description": "<p>Assign new roles to user. This endpoint does not sync the user with the new roles. It simply assign new role to the user. So make sure to never send an already assigned role since it will cause an error. To sync (update) all existing roles with the new ones use <code>/roles/sync</code> endpoint instead.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "roles_ids",
            "description": "<p>Role ID or Array of Roles ID's</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Authorization/UI/API/Routes/AssignUserToRole.v1.private.php",
    "groupTitle": "RolePermission",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n      \"object\":\"User\",\n      \"id\":eqwja3vw94kzmxr0,\n      \"name\":\"Mahmoud Zalt\",\n      \"email\":\"x.rolllln@hotmail.com\",\n      \"confirmed\":\"0\",\n      \"created_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"updated_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"readable_created_at\":\"1 second ago\",\n      \"readable_updated_at\":\"1 second ago\",\n      \"roles\":{\n         \"data\":[\n            {\n               \"object\": \"Role\",\n               \"id\": abcderf,\n               \"name\":\"admin\",\n               \"description\":\"Super Administrator\",\n               \"display_name\":\"\"\n            },\n            {\n               \"object\": \"Role\",\n               \"id\": ascderf,\n               \"name\":\"client\",\n               \"description\":\"Special Client!\",\n               \"display_name\":\"\"\n            }\n         ]\n      }\n   },\n   \"meta\":{\n      \"include\":[\n         \"stores\",\n         \"invoices\",\n      ],\n      \"custom\":[\n\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "RolePermission",
    "name": "attachPermissionToRole",
    "type": "post",
    "url": "/v1/permissions/attach",
    "title": "Attach Permissions to Role",
    "description": "<p>Attach new permissions to role. This endpoint does not sync the role with the new permissions. It simply attach new permission to the role. So make sure to never send an already attached permission since it will cause an error. To sync (update) all existing permissions with the new ones use <code>/permissions/sync</code> endpoint instead.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>Role ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "permissions_ids",
            "description": "<p>Permission ID or Array of Permissions ID's</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Authorization/UI/API/Routes/AttachPermissionToRole.v1.private.php",
    "groupTitle": "RolePermission",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n      \"object\":\"Role\",\n      \"id\":\"eqwja3vw94kzmxr0\",\n      \"name\":\"praesentium-aut\",\n      \"description\":null,\n      \"display_name\":null,\n      \"permissions\":{\n         \"data\":[\n            {\n               \"object\":\"Permission\",\n               \"id\":\"n9kq6345javb05je\",\n               \"name\":\"est-sit-voluptatem\",\n               \"description\":null,\n               \"display_name\":null\n            },\n            {\n               \"object\":\"Permission\",\n               \"id\":\"999q6345javb05je\",\n               \"name\":\"something-else\",\n               \"description\":null,\n               \"display_name\":null\n            }\n         ]\n      }\n   },\n   \"meta\":{\n      \"include\":[\n\n      ],\n      \"custom\":[\n\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "RolePermission",
    "name": "createRole",
    "type": "post",
    "url": "/v1/roles",
    "title": "Create a Role",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique Role Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "display_name",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Authorization/UI/API/Routes/CreateRole.v1.private.php",
    "groupTitle": "RolePermission",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n      \"object\":\"Role\",\n      \"id\":\"eqwja3vw94kzmxr0\",\n      \"name\":\"praesentium-aut\",\n      \"description\":null,\n      \"display_name\":null,\n      \"permissions\":{\n         \"data\":[\n            {\n               \"object\":\"Permission\",\n               \"id\":\"n9kq6345javb05je\",\n               \"name\":\"est-sit-voluptatem\",\n               \"description\":null,\n               \"display_name\":null\n            },\n            {\n               \"object\":\"Permission\",\n               \"id\":\"999q6345javb05je\",\n               \"name\":\"something-else\",\n               \"description\":null,\n               \"display_name\":null\n            }\n         ]\n      }\n   },\n   \"meta\":{\n      \"include\":[\n\n      ],\n      \"custom\":[\n\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "RolePermission",
    "name": "deleteRole",
    "type": "delete",
    "url": "/v1/roles/:id",
    "title": "Delete a Role",
    "description": "<p>Delete Role by ID</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated Role"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 OK\n{\n    \"message\": \"Role (manager) Deleted Successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Authorization/UI/API/Routes/DeleteRole.v1.private.php",
    "groupTitle": "RolePermission"
  },
  {
    "group": "RolePermission",
    "name": "detachPermissionFromRole",
    "type": "post",
    "url": "/v1/permissions/detach",
    "title": "Detach Permissions from Role",
    "description": "<p>Detach existing permission from role. This endpoint does not sync the role It just detach the passed permissions from the role. So make sure to never send an non attached permission since it will cause an error. To sync (update) all existing permissions with the new ones use <code>/permissions/sync</code> endpoint instead.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>Role ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String-Array",
            "optional": false,
            "field": "permissions_ids",
            "description": "<p>Permission ID or Array of Permissions ID's</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Authorization/UI/API/Routes/DetachPermissionsFromRole.v1.private.php",
    "groupTitle": "RolePermission",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n      \"object\":\"Role\",\n      \"id\":\"eqwja3vw94kzmxr0\",\n      \"name\":\"praesentium-aut\",\n      \"description\":null,\n      \"display_name\":null,\n      \"permissions\":{\n         \"data\":[\n            {\n               \"object\":\"Permission\",\n               \"id\":\"n9kq6345javb05je\",\n               \"name\":\"est-sit-voluptatem\",\n               \"description\":null,\n               \"display_name\":null\n            },\n            {\n               \"object\":\"Permission\",\n               \"id\":\"999q6345javb05je\",\n               \"name\":\"something-else\",\n               \"description\":null,\n               \"display_name\":null\n            }\n         ]\n      }\n   },\n   \"meta\":{\n      \"include\":[\n\n      ],\n      \"custom\":[\n\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "RolePermission",
    "name": "getAllPermissions",
    "type": "get",
    "url": "/v1/permissions",
    "title": "Get All Permission",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "filename": "app/Containers/Authorization/UI/API/Routes/GetAllPermissions.v1.private.php",
    "groupTitle": "RolePermission",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      // same object structure of the single response\n    },\n    {\n      // ...\n    },\n    // ...\n  ],\n  \"include\": [\n    \"xxx\",\n    \"yyy\",\n  ],\n  \"custom\": [],\n  \"meta\": {\n    \"pagination\": {\n      \"total\": x,\n      \"count\": x,\n      \"per_page\": x,\n      \"current_page\": x,\n      \"total_pages\": x,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "RolePermission",
    "name": "getAllRoles",
    "type": "get",
    "url": "/v1/roles",
    "title": "Get All Roles",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "filename": "app/Containers/Authorization/UI/API/Routes/GetAllRoles.v1.private.php",
    "groupTitle": "RolePermission",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      // same object structure of the single response\n    },\n    {\n      // ...\n    },\n    // ...\n  ],\n  \"include\": [\n    \"xxx\",\n    \"yyy\",\n  ],\n  \"custom\": [],\n  \"meta\": {\n    \"pagination\": {\n      \"total\": x,\n      \"count\": x,\n      \"per_page\": x,\n      \"current_page\": x,\n      \"total_pages\": x,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "RolePermission",
    "name": "getPermission",
    "type": "get",
    "url": "/v1/permissions/:id",
    "title": "Find a Permission by ID",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "filename": "app/Containers/Authorization/UI/API/Routes/FindPermission.v1.private.php",
    "groupTitle": "RolePermission",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n      \"object\":\"Permission\",\n      \"id\":\"n9kq6345javb05je\",\n      \"name\":\"amet-ducimus\",\n      \"description\":null,\n      \"display_name\":null\n   },\n   \"meta\":{\n      \"include\":[\n\n      ],\n      \"custom\":[\n\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "RolePermission",
    "name": "getRole",
    "type": "get",
    "url": "/v1/roles/:id",
    "title": "Find a Role by ID",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "filename": "app/Containers/Authorization/UI/API/Routes/FindRole.v1.private.php",
    "groupTitle": "RolePermission",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n      \"object\":\"Role\",\n      \"id\":\"eqwja3vw94kzmxr0\",\n      \"name\":\"praesentium-aut\",\n      \"description\":null,\n      \"display_name\":null,\n      \"permissions\":{\n         \"data\":[\n            {\n               \"object\":\"Permission\",\n               \"id\":\"n9kq6345javb05je\",\n               \"name\":\"est-sit-voluptatem\",\n               \"description\":null,\n               \"display_name\":null\n            },\n            {\n               \"object\":\"Permission\",\n               \"id\":\"999q6345javb05je\",\n               \"name\":\"something-else\",\n               \"description\":null,\n               \"display_name\":null\n            }\n         ]\n      }\n   },\n   \"meta\":{\n      \"include\":[\n\n      ],\n      \"custom\":[\n\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "RolePermission",
    "name": "revokeRoleFromUser",
    "type": "post",
    "url": "/v1/roles/revoke",
    "title": "Revoke/Remove Roles from User",
    "description": "<p>Revoke existing roles from user. This endpoint does not sync the user It just revoke the passed role from the user. So make sure to never send a non assigned role since it will cause an error. To sync (update) all existing roles with the new ones use <code>/roles/sync</code> endpoint instead.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "roles_ids",
            "description": "<p>Role ID or Array of Role ID's</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Authorization/UI/API/Routes/RevokeUserFromRole.v1.private.php",
    "groupTitle": "RolePermission",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n      \"object\":\"User\",\n      \"id\":eqwja3vw94kzmxr0,\n      \"name\":\"Mahmoud Zalt\",\n      \"email\":\"x.rolllln@hotmail.com\",\n      \"confirmed\":\"0\",\n      \"created_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"updated_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"readable_created_at\":\"1 second ago\",\n      \"readable_updated_at\":\"1 second ago\",\n      \"roles\":{\n         \"data\":[\n            {\n               \"object\": \"Role\",\n               \"id\": abcderf,\n               \"name\":\"admin\",\n               \"description\":\"Super Administrator\",\n               \"display_name\":\"\"\n            },\n            {\n               \"object\": \"Role\",\n               \"id\": ascderf,\n               \"name\":\"client\",\n               \"description\":\"Special Client!\",\n               \"display_name\":\"\"\n            }\n         ]\n      }\n   },\n   \"meta\":{\n      \"include\":[\n         \"stores\",\n         \"invoices\",\n      ],\n      \"custom\":[\n\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "RolePermission",
    "name": "syncPermissionOnRole",
    "type": "post",
    "url": "/v1/permissions/sync",
    "title": "Sync Permissions on Role",
    "description": "<p>You can use this endpoint instead of <code>permissions/attach</code> &amp; <code>permissions/detach</code>. The sync endpoint will override all existing role permissions with the new one sent to this endpoint.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>Role ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "permissions_ids",
            "description": "<p>Permission ID or Array of Permissions ID's</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Authorization/UI/API/Routes/SyncPermissionOnRole.v1.private.php",
    "groupTitle": "RolePermission",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n      \"object\":\"Role\",\n      \"id\":\"eqwja3vw94kzmxr0\",\n      \"name\":\"praesentium-aut\",\n      \"description\":null,\n      \"display_name\":null,\n      \"permissions\":{\n         \"data\":[\n            {\n               \"object\":\"Permission\",\n               \"id\":\"n9kq6345javb05je\",\n               \"name\":\"est-sit-voluptatem\",\n               \"description\":null,\n               \"display_name\":null\n            },\n            {\n               \"object\":\"Permission\",\n               \"id\":\"999q6345javb05je\",\n               \"name\":\"something-else\",\n               \"description\":null,\n               \"display_name\":null\n            }\n         ]\n      }\n   },\n   \"meta\":{\n      \"include\":[\n\n      ],\n      \"custom\":[\n\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "RolePermission",
    "name": "syncUserRoles",
    "type": "post",
    "url": "/v1/roles/sync",
    "title": "Sync User Roles",
    "description": "<p>You can use this endpoint instead of <code>roles/assign</code> &amp; <code>roles/revoke</code>. The sync endpoint will override all existing user roles with the new one sent to this endpoint.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "roles_ids",
            "description": "<p>Role ID or Array of Roles ID's</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/Authorization/UI/API/Routes/SyncUserRoles.v1.private.php",
    "groupTitle": "RolePermission",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n      \"object\":\"User\",\n      \"id\":eqwja3vw94kzmxr0,\n      \"name\":\"Mahmoud Zalt\",\n      \"email\":\"x.rolllln@hotmail.com\",\n      \"confirmed\":\"0\",\n      \"created_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"updated_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"readable_created_at\":\"1 second ago\",\n      \"readable_updated_at\":\"1 second ago\",\n      \"roles\":{\n         \"data\":[\n            {\n               \"object\": \"Role\",\n               \"id\": abcderf,\n               \"name\":\"admin\",\n               \"description\":\"Super Administrator\",\n               \"display_name\":\"\"\n            },\n            {\n               \"object\": \"Role\",\n               \"id\": ascderf,\n               \"name\":\"client\",\n               \"description\":\"Special Client!\",\n               \"display_name\":\"\"\n            }\n         ]\n      }\n   },\n   \"meta\":{\n      \"include\":[\n         \"stores\",\n         \"invoices\",\n      ],\n      \"custom\":[\n\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Settings",
    "name": "createSetting",
    "type": "POST",
    "url": "/v1/settings",
    "title": "Create Setting",
    "description": "<p>Create a new setting for the application</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"object\": \"Setting\",\n        \"id\": \"aadfa72342sa\",\n        \"key\": \"hello\",\n        \"value\": \"world\"\n    },\n    \"meta\": {\n        \"include\": [],\n        \"custom\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Settings/UI/API/Routes/CreateSetting.v1.private.php",
    "groupTitle": "Settings"
  },
  {
    "group": "Settings",
    "name": "deleteSetting",
    "type": "DELETE",
    "url": "/v1/settings/:id",
    "title": "Delete Setting",
    "description": "<p>Deletes a setting entry</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Settings/UI/API/Routes/DeleteSetting.v1.private.php",
    "groupTitle": "Settings"
  },
  {
    "group": "Settings",
    "name": "getAllSettings",
    "type": "GET",
    "url": "/v1/settings",
    "title": "Get All Settings",
    "description": "<p>Get All settings for the application</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"object\": \"Setting\",\n            \"id\": \"damq35egme74k0xv\",\n            \"key\": \"foo\",\n            \"value\": \"bar\"\n        },\n        {\n            \"object\": \"Setting\",\n            \"id\": \"damq35egme74k0xv\",\n            \"key\": \"test\",\n            \"value\": \"456\"\n        },\n        {\n            \"object\": \"Setting\",\n            \"id\": \"damq35egme74k0xv\",\n            \"key\": \"logout\",\n            \"value\": \"false\"\n        }\n    ],\n    \"meta\": {\n\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Settings/UI/API/Routes/GetAllSettings.v1.private.php",
    "groupTitle": "Settings"
  },
  {
    "group": "Settings",
    "name": "updateSetting",
    "type": "PATCH",
    "url": "/v1/settings/:id",
    "title": "Update Setting",
    "description": "<p>Updates a setting entry (both key / value)</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"object\": \"Setting\",\n        \"id\": \"aadfa72342sa\",\n        \"key\": \"foo\",\n        \"value\": \"bar\"\n    },\n    \"meta\": {\n        \"include\": [],\n        \"custom\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Settings/UI/API/Routes/UpdateSetting.v1.private.php",
    "groupTitle": "Settings"
  },
  {
    "group": "SocialAuth",
    "name": "socialAuthFb",
    "type": "post",
    "url": "/v1/auth/facebook",
    "title": "",
    "description": "<p>After getting the User Token from facebook, call this Endpoint passing the user token to it in order to fetch his data and create the user in our database if not exist or return the existing one. For testing purposes use this endpoint <code>auth/facebook</code> to get the token.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "oauth_token",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"object\": \"User\",\n        \"id\": \"eqwja3vw94kzmxr1\",\n        \"name\": \"Mahmoud Zalt\",\n        \"email\": null,\n        \"confirmed\": false,\n        \"nickname\": null,\n        \"gender\": null,\n        \"birth\": null,\n        \"social_auth_provider\": \"facebook\",\n        \"social_id\": \"42719726\",\n        \"social_avatar\": {\n            \"avatar\": null,\n            \"original\": null\n        },\n        \"created_at\": {\n            \"date\": \"2017-10-20 21:45:03.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"UTC\"\n        },\n        \"updated_at\": {\n            \"date\": \"2017-10-20 21:45:03.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"UTC\"\n        },\n        \"readable_created_at\": \"48 minutes ago\",\n        \"readable_updated_at\": \"48 minutes ago\"\n    },\n    \"meta\": {\n        \"include\": [\n            \"roles\"\n        ],\n        \"custom\": {\n            \"token_type\": \"personal\",\n            \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUxI...\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/SocialAuth/UI/API/Routes/AuthenticateAll.v1.private.php",
    "groupTitle": "SocialAuth"
  },
  {
    "group": "SocialAuth",
    "name": "socialAuthTw",
    "type": "post",
    "url": "/v1/auth/twitter",
    "title": "",
    "description": "<p>After getting the User Token from twitter, call this Endpoint passing the user token to it in order to fetch his data and create the user in our database if not exist or return the existing one. For testing purposes use this endpoint <code>auth/twitter/</code> to get the token.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "oauth_token",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "oauth_secret",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"object\": \"User\",\n        \"id\": \"eqwja3vw94kzmxr0\",\n        \"name\": \"Mahmoud Zalt\",\n        \"email\": null,\n        \"confirmed\": false,\n        \"nickname\": null,\n        \"gender\": null,\n        \"birth\": null,\n        \"social_auth_provider\": \"twitter\",\n        \"social_id\": \"42719726\",\n        \"social_avatar\": {\n            \"avatar\": \"http://pbs.twimg.com/profile_images/1111111111/PENrcePC_normal.jpg\",\n            \"original\": null\n        },\n        \"created_at\": {\n            \"date\": \"2017-10-20 21:45:03.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"UTC\"\n        },\n        \"updated_at\": {\n            \"date\": \"2017-10-20 21:45:03.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"UTC\"\n        },\n        \"readable_created_at\": \"48 minutes ago\",\n        \"readable_updated_at\": \"48 minutes ago\"\n    },\n    \"meta\": {\n        \"include\": [\n            \"roles\"\n        ],\n        \"custom\": {\n            \"token_type\": \"personal\",\n            \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI...\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/SocialAuth/UI/API/Routes/AuthenticateAll.v1.private.php",
    "groupTitle": "SocialAuth"
  },
  {
    "group": "Stripe",
    "name": "createStripeAccount",
    "type": "post",
    "url": "/v1/user/payments/accounts/stripe",
    "title": "Create Stripe Account",
    "description": "<p>Before calling this endpoint make sure to call Stripe first and get the <code>customer_id</code>. You may use &quot;Stripe Checkout&quot; or &quot;Stripe.js&quot; to make your Stripe call. This Information will be used to charge the user whenever he to purchase anything on the platform.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_funding",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_last_digits",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_fingerprint",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>payment nickname for your usage</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 OK\n{\n   \"message\":\"Stripe account created successfully.\",\n   \"stripe_account_id\":1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Stripe/UI/API/Routes/CreateStripeAccount.v1.private.php",
    "groupTitle": "Stripe"
  },
  {
    "group": "Stripe",
    "name": "updateStripeAccount",
    "type": "PATCH",
    "url": "/v1/user/payments/accounts/stripe/:id",
    "title": "Update Stripe Account",
    "description": "<p>Update a stripe account.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  // Insert the response of the request here...\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Stripe/UI/API/Routes/UpdateStripeAccount.v1.private.php",
    "groupTitle": "Stripe"
  },
  {
    "group": "Tenant",
    "name": "activateTenant",
    "type": "PATCH",
    "url": "/v1/tenant/:id/activate",
    "title": "Activate Tenant",
    "description": "<p>Super admin, can activate any tenant for any possible reason.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User With Permissions"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Tenant/UI/API/Routes/ActivateTenant.v1.private.php",
    "groupTitle": "Tenant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"Tenant\",\n    \"id\":eqwja3vw94kzmxr0,\n    \"name\":\"S ALi\",\n    \"slug\":\"s-ali\",\n    \"email\":\"x.yz@hotmail.com\",\n    \"confirmed\":\"0\",\n    \"created_at\":{\n      \"date\":\"2017-06-06 05:40:51.000000\",\n      \"timezone_type\":3,\n      \"timezone\":\"UTC\"\n    },\n    \"updated_at\":{\n      \"date\":\"2017-06-06 05:40:51.000000\",\n      \"timezone_type\":3,\n      \"timezone\":\"UTC\"\n    },\n    \"readable_created_at\":\"1 second ago\",\n    \"readable_updated_at\":\"1 second ago\",\n  },\n  \"meta\":{\n    \"include\":[\n      \"owner\",\n    ],\n    \"custom\":[\n\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Tenant",
    "name": "createTenant",
    "type": "POST",
    "url": "/v1/tenants",
    "title": "Create New Tenant",
    "description": "<p>Tenant is business Identity, api allows registration of tenant (i.e. business) identities.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Tenant/UI/API/Routes/CreateTenant.v1.private.php",
    "groupTitle": "Tenant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"Tenant\",\n    \"id\":eqwja3vw94kzmxr0,\n    \"name\":\"S ALi\",\n    \"slug\":\"s-ali\",\n    \"email\":\"x.yz@hotmail.com\",\n    \"confirmed\":\"0\",\n    \"created_at\":{\n      \"date\":\"2017-06-06 05:40:51.000000\",\n      \"timezone_type\":3,\n      \"timezone\":\"UTC\"\n    },\n    \"updated_at\":{\n      \"date\":\"2017-06-06 05:40:51.000000\",\n      \"timezone_type\":3,\n      \"timezone\":\"UTC\"\n    },\n    \"readable_created_at\":\"1 second ago\",\n    \"readable_updated_at\":\"1 second ago\",\n  },\n  \"meta\":{\n    \"include\":[\n      \"owner\",\n    ],\n    \"custom\":[\n\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Tenant",
    "name": "deactivateTenant",
    "type": "PATCH",
    "url": "/v1/tenant/:id/deactivate",
    "title": "Deactivate Tenant",
    "description": "<p>Super admin can deactivate tenant for any possible reason.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User With Permissions"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Tenant/UI/API/Routes/DeactivateTenant.v1.private.php",
    "groupTitle": "Tenant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"Tenant\",\n    \"id\":eqwja3vw94kzmxr0,\n    \"name\":\"S ALi\",\n    \"slug\":\"s-ali\",\n    \"email\":\"x.yz@hotmail.com\",\n    \"confirmed\":\"0\",\n    \"created_at\":{\n      \"date\":\"2017-06-06 05:40:51.000000\",\n      \"timezone_type\":3,\n      \"timezone\":\"UTC\"\n    },\n    \"updated_at\":{\n      \"date\":\"2017-06-06 05:40:51.000000\",\n      \"timezone_type\":3,\n      \"timezone\":\"UTC\"\n    },\n    \"readable_created_at\":\"1 second ago\",\n    \"readable_updated_at\":\"1 second ago\",\n  },\n  \"meta\":{\n    \"include\":[\n      \"owner\",\n    ],\n    \"custom\":[\n\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Tenant",
    "name": "deleteTenant",
    "type": "DELETE",
    "url": "/v1/tenants/:id",
    "title": "Delete Tenant",
    "description": "<p>Api end point to delete tenant.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User With Permissions"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Tenant/UI/API/Routes/DeleteTenant.v1.private.php",
    "groupTitle": "Tenant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"Tenant\",\n    \"id\":eqwja3vw94kzmxr0,\n    \"name\":\"S ALi\",\n    \"slug\":\"s-ali\",\n    \"email\":\"x.yz@hotmail.com\",\n    \"confirmed\":\"0\",\n    \"created_at\":{\n      \"date\":\"2017-06-06 05:40:51.000000\",\n      \"timezone_type\":3,\n      \"timezone\":\"UTC\"\n    },\n    \"updated_at\":{\n      \"date\":\"2017-06-06 05:40:51.000000\",\n      \"timezone_type\":3,\n      \"timezone\":\"UTC\"\n    },\n    \"readable_created_at\":\"1 second ago\",\n    \"readable_updated_at\":\"1 second ago\",\n  },\n  \"meta\":{\n    \"include\":[\n      \"owner\",\n    ],\n    \"custom\":[\n\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Tenant",
    "name": "findTenantById",
    "type": "GET",
    "url": "/v1/tenants/:id",
    "title": "Find/Get Tenant",
    "description": "<p>Api endpoint to get tenant details.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User With Permissions"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Tenant/UI/API/Routes/FindTenantById.v1.private.php",
    "groupTitle": "Tenant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"Tenant\",\n    \"id\":eqwja3vw94kzmxr0,\n    \"name\":\"S ALi\",\n    \"slug\":\"s-ali\",\n    \"email\":\"x.yz@hotmail.com\",\n    \"confirmed\":\"0\",\n    \"created_at\":{\n      \"date\":\"2017-06-06 05:40:51.000000\",\n      \"timezone_type\":3,\n      \"timezone\":\"UTC\"\n    },\n    \"updated_at\":{\n      \"date\":\"2017-06-06 05:40:51.000000\",\n      \"timezone_type\":3,\n      \"timezone\":\"UTC\"\n    },\n    \"readable_created_at\":\"1 second ago\",\n    \"readable_updated_at\":\"1 second ago\",\n  },\n  \"meta\":{\n    \"include\":[\n      \"owner\",\n    ],\n    \"custom\":[\n\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Tenant",
    "name": "getAllTenants",
    "type": "GET",
    "url": "/v1/tenants",
    "title": "Get All Tenant",
    "description": "<p>Api endpoint to get list of all tenants.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User With Permissions"
      }
    ],
    "filename": "app/Containers/Tenant/UI/API/Routes/GetAllTenants.v1.private.php",
    "groupTitle": "Tenant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"Tenant\",\n    \"id\":eqwja3vw94kzmxr0,\n    \"name\":\"S ALi\",\n    \"slug\":\"s-ali\",\n    \"email\":\"x.yz@hotmail.com\",\n    \"confirmed\":\"0\",\n    \"created_at\":{\n      \"date\":\"2017-06-06 05:40:51.000000\",\n      \"timezone_type\":3,\n      \"timezone\":\"UTC\"\n    },\n    \"updated_at\":{\n      \"date\":\"2017-06-06 05:40:51.000000\",\n      \"timezone_type\":3,\n      \"timezone\":\"UTC\"\n    },\n    \"readable_created_at\":\"1 second ago\",\n    \"readable_updated_at\":\"1 second ago\",\n  },\n  \"meta\":{\n    \"include\":[\n      \"owner\",\n    ],\n    \"custom\":[\n\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Tenant",
    "name": "updateTenant",
    "type": "PATCH",
    "url": "/v1/tenants/:id",
    "title": "Update Tenant",
    "description": "<p>Endpoint description here..</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User With Permissions"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/Tenant/UI/API/Routes/UpdateTenant.v1.private.php",
    "groupTitle": "Tenant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":{\n    \"object\":\"Tenant\",\n    \"id\":eqwja3vw94kzmxr0,\n    \"name\":\"S ALi\",\n    \"slug\":\"s-ali\",\n    \"email\":\"x.yz@hotmail.com\",\n    \"confirmed\":\"0\",\n    \"created_at\":{\n      \"date\":\"2017-06-06 05:40:51.000000\",\n      \"timezone_type\":3,\n      \"timezone\":\"UTC\"\n    },\n    \"updated_at\":{\n      \"date\":\"2017-06-06 05:40:51.000000\",\n      \"timezone_type\":3,\n      \"timezone\":\"UTC\"\n    },\n    \"readable_created_at\":\"1 second ago\",\n    \"readable_updated_at\":\"1 second ago\",\n  },\n  \"meta\":{\n    \"include\":[\n      \"owner\",\n    ],\n    \"custom\":[\n\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "User",
    "name": "forgotPassword",
    "type": "POST",
    "url": "/v1/password/forgot",
    "title": "Forgot password",
    "description": "<p>Forgot password endpoint.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reseturl",
            "description": "<p>the reset password url</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 OK\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/User/UI/API/Routes/ForgotPassword.v1.public.php",
    "groupTitle": "User"
  },
  {
    "group": "User",
    "name": "resetPassword",
    "type": "GET/POST",
    "url": "/v1/password/reset",
    "title": "Reset Password",
    "description": "<p>Resets a password for an user.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>from the forgot password email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the new password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/User/UI/API/Routes/ResetPassword.v1.public.php",
    "groupTitle": "User"
  },
  {
    "group": "Users",
    "name": "createAdmin",
    "type": "post",
    "url": "/v1/admins",
    "title": "Create Admin type Users",
    "description": "<p>Create non client users for the Dashboard.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Containers/User/UI/API/Routes/CreateAdmin.v1.private.php",
    "groupTitle": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n      \"object\":\"User\",\n      \"id\":eqwja3vw94kzmxr0,\n      \"name\":\"Mahmoud Zalt\",\n      \"email\":\"x.rolllln@hotmail.com\",\n      \"confirmed\":\"0\",\n      \"created_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"updated_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"readable_created_at\":\"1 second ago\",\n      \"readable_updated_at\":\"1 second ago\",\n      \"roles\":{\n         \"data\":[\n            {\n               \"object\": \"Role\",\n               \"id\": abcderf,\n               \"name\":\"admin\",\n               \"description\":\"Super Administrator\",\n               \"display_name\":\"\"\n            },\n            {\n               \"object\": \"Role\",\n               \"id\": ascderf,\n               \"name\":\"client\",\n               \"description\":\"Special Client!\",\n               \"display_name\":\"\"\n            }\n         ]\n      }\n   },\n   \"meta\":{\n      \"include\":[\n         \"stores\",\n         \"invoices\",\n      ],\n      \"custom\":[\n\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Users",
    "name": "deleteUser",
    "type": "delete",
    "url": "/v1/users/:id",
    "title": "Delete User",
    "description": "<p>Delete users of any type (Admin, Client...)</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 OK\n{\n    \"message\": \"User (4) Deleted Successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/User/UI/API/Routes/DeleteUser.v1.private.php",
    "groupTitle": "Users"
  },
  {
    "group": "Users",
    "name": "findUserById",
    "type": "get",
    "url": "/v1/users/:id",
    "title": "Find User",
    "description": "<p>Find a user by its ID</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "filename": "app/Containers/User/UI/API/Routes/FindUserById.v1.private.php",
    "groupTitle": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n      \"object\":\"User\",\n      \"id\":eqwja3vw94kzmxr0,\n      \"name\":\"Mahmoud Zalt\",\n      \"email\":\"x.rolllln@hotmail.com\",\n      \"confirmed\":\"0\",\n      \"created_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"updated_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"readable_created_at\":\"1 second ago\",\n      \"readable_updated_at\":\"1 second ago\",\n      \"roles\":{\n         \"data\":[\n            {\n               \"object\": \"Role\",\n               \"id\": abcderf,\n               \"name\":\"admin\",\n               \"description\":\"Super Administrator\",\n               \"display_name\":\"\"\n            },\n            {\n               \"object\": \"Role\",\n               \"id\": ascderf,\n               \"name\":\"client\",\n               \"description\":\"Special Client!\",\n               \"display_name\":\"\"\n            }\n         ]\n      }\n   },\n   \"meta\":{\n      \"include\":[\n         \"stores\",\n         \"invoices\",\n      ],\n      \"custom\":[\n\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Users",
    "name": "getAllAdmins",
    "type": "get",
    "url": "/v1/admins",
    "title": "Get All Admin Users",
    "description": "<p>Get All Users where role <code>Admin</code>. You can search for Users by email, name and ID. Example: <code>?search=Mahmoud</code> or <code>?search=whatever@mail.com</code>. You can specify the field as follow <code>?search=email:whatever@mail.com</code> or <code>?search=id:20</code>. You can search by multiple fields as follow: <code>?search=name:Mahmoud&amp;email:whatever@mail.com</code>.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated Admin"
      }
    ],
    "filename": "app/Containers/User/UI/API/Routes/GetAllAdmins.v1.private.php",
    "groupTitle": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      // same object structure of the single response\n    },\n    {\n      // ...\n    },\n    // ...\n  ],\n  \"include\": [\n    \"xxx\",\n    \"yyy\",\n  ],\n  \"custom\": [],\n  \"meta\": {\n    \"pagination\": {\n      \"total\": x,\n      \"count\": x,\n      \"per_page\": x,\n      \"current_page\": x,\n      \"total_pages\": x,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Users",
    "name": "getAllClients",
    "type": "get",
    "url": "/v1/clients",
    "title": "Get All Client Users",
    "description": "<p>Get All Users where role <code>Client</code>. You can search for Users by email, name and ID. Example: <code>?search=Mahmoud</code> or <code>?search=whatever@mail.com</code>. You can specify the field as follow <code>?search=email:whatever@mail.com</code> or <code>?search=id:20</code>. You can search by multiple fields as follow: <code>?search=name:Mahmoud&amp;email:whatever@mail.com</code>.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "filename": "app/Containers/User/UI/API/Routes/GetAllClients.v1.private.php",
    "groupTitle": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      // same object structure of the single response\n    },\n    {\n      // ...\n    },\n    // ...\n  ],\n  \"include\": [\n    \"xxx\",\n    \"yyy\",\n  ],\n  \"custom\": [],\n  \"meta\": {\n    \"pagination\": {\n      \"total\": x,\n      \"count\": x,\n      \"per_page\": x,\n      \"current_page\": x,\n      \"total_pages\": x,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Users",
    "name": "getAllUsers",
    "type": "get",
    "url": "/v1/users",
    "title": "Get All Users",
    "description": "<p>Get All Application Users (clients and admins). For all registered users &quot;Clients&quot; only you can use <code>/clients</code>. And for all &quot;Admins&quot; only you can use <code>/admins</code>.</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "filename": "app/Containers/User/UI/API/Routes/GetAllUsers.v1.private.php",
    "groupTitle": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      // same object structure of the single response\n    },\n    {\n      // ...\n    },\n    // ...\n  ],\n  \"include\": [\n    \"xxx\",\n    \"yyy\",\n  ],\n  \"custom\": [],\n  \"meta\": {\n    \"pagination\": {\n      \"total\": x,\n      \"count\": x,\n      \"per_page\": x,\n      \"current_page\": x,\n      \"total_pages\": x,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Users",
    "name": "getAuthenticatedUser",
    "type": "GET",
    "url": "/v1/user/profile",
    "title": "Find Logged in User data (Profile Information)",
    "description": "<p>Find the user details of the logged in user from its Token. (without specifying his ID)</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "app/Containers/User/UI/API/Routes/GetAuthenticatedUser.v1.private.php",
    "groupTitle": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n      \"object\":\"User\",\n      \"id\":eqwja3vw94kzmxr0,\n      \"name\":\"Mahmoud Zalt\",\n      \"email\":\"x.rolllln@hotmail.com\",\n      \"confirmed\":\"0\",\n      \"created_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"updated_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"readable_created_at\":\"1 second ago\",\n      \"readable_updated_at\":\"1 second ago\",\n      \"roles\":{\n         \"data\":[\n            {\n               \"object\": \"Role\",\n               \"id\": abcderf,\n               \"name\":\"admin\",\n               \"description\":\"Super Administrator\",\n               \"display_name\":\"\"\n            },\n            {\n               \"object\": \"Role\",\n               \"id\": ascderf,\n               \"name\":\"client\",\n               \"description\":\"Special Client!\",\n               \"display_name\":\"\"\n            }\n         ]\n      }\n   },\n   \"meta\":{\n      \"include\":[\n         \"stores\",\n         \"invoices\",\n      ],\n      \"custom\":[\n\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Users",
    "name": "registerUser",
    "type": "post",
    "url": "/v1/register",
    "title": "Register User (create client)",
    "description": "<p>Register users as (client).</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>(optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birth",
            "description": "<p>(optional)</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/User/UI/API/Routes/RegisterUser.v1.private.php",
    "groupTitle": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n      \"object\":\"User\",\n      \"id\":eqwja3vw94kzmxr0,\n      \"name\":\"Mahmoud Zalt\",\n      \"email\":\"x.rolllln@hotmail.com\",\n      \"confirmed\":\"0\",\n      \"created_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"updated_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"readable_created_at\":\"1 second ago\",\n      \"readable_updated_at\":\"1 second ago\",\n      \"roles\":{\n         \"data\":[\n            {\n               \"object\": \"Role\",\n               \"id\": abcderf,\n               \"name\":\"admin\",\n               \"description\":\"Super Administrator\",\n               \"display_name\":\"\"\n            },\n            {\n               \"object\": \"Role\",\n               \"id\": ascderf,\n               \"name\":\"client\",\n               \"description\":\"Special Client!\",\n               \"display_name\":\"\"\n            }\n         ]\n      }\n   },\n   \"meta\":{\n      \"include\":[\n         \"stores\",\n         \"invoices\",\n      ],\n      \"custom\":[\n\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Users",
    "name": "updateUser",
    "type": "put",
    "url": "/v1/users/:id",
    "title": "Update User",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>(optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(optional)</p>"
          }
        ]
      }
    },
    "filename": "app/Containers/User/UI/API/Routes/UpdateUser.v1.private.php",
    "groupTitle": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\":{\n      \"object\":\"User\",\n      \"id\":eqwja3vw94kzmxr0,\n      \"name\":\"Mahmoud Zalt\",\n      \"email\":\"x.rolllln@hotmail.com\",\n      \"confirmed\":\"0\",\n      \"created_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"updated_at\":{\n         \"date\":\"2017-06-06 05:40:51.000000\",\n         \"timezone_type\":3,\n         \"timezone\":\"UTC\"\n      },\n      \"readable_created_at\":\"1 second ago\",\n      \"readable_updated_at\":\"1 second ago\",\n      \"roles\":{\n         \"data\":[\n            {\n               \"object\": \"Role\",\n               \"id\": abcderf,\n               \"name\":\"admin\",\n               \"description\":\"Super Administrator\",\n               \"display_name\":\"\"\n            },\n            {\n               \"object\": \"Role\",\n               \"id\": ascderf,\n               \"name\":\"client\",\n               \"description\":\"Special Client!\",\n               \"display_name\":\"\"\n            }\n         ]\n      }\n   },\n   \"meta\":{\n      \"include\":[\n         \"stores\",\n         \"invoices\",\n      ],\n      \"custom\":[\n\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Zero",
    "name": "getAppConfiguartions",
    "type": "GET",
    "url": "/v1/zeros/configurations",
    "title": "Endpoint title here..",
    "description": "<p>Endpoint description here..</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  // Insert the response of the request here...\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Zero/UI/API/Routes/GetAppConfiguartions.v1.public.php",
    "groupTitle": "Zero"
  },
  {
    "group": "Zero",
    "name": "getUserConfigurations",
    "type": "GET",
    "url": "/v1/zeros/user",
    "title": "Endpoint title here..",
    "description": "<p>Endpoint description here..</p>",
    "version": "1.0.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>here..</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  // Insert the response of the request here...\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Containers/Zero/UI/API/Routes/GetUserConfiguartions.v1.public.php",
    "groupTitle": "Zero"
  }
] });
