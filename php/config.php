<?php
declare(strict_types=1);

// Geodescription SDK configuration

class GeodescriptionConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Geodescription",
                "slug" => "geodescription",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://free.geodescription.com",
                "auth" => [
                    "prefix" => "",
                    "in" => "query",
                    "name" => "key",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "lonlongitude" => [],
                    "reverse_geocoding" => [],
                    "text_part" => [],
                ],
            ],
            "entity" => [
        'lonlongitude' => [
          'fields' => [
            [
              'name' => 'boundary',
              'title' => 'Boundary',
              'type' => '`$STRING`',
              'short' => 'Name of the administrative boundary',
            ],
            [
              'name' => 'level',
              'title' => 'Level',
              'type' => '`$STRING`',
              'short' => 'Administrative level of the boundary (e.g., -6, -4, -2, top)',
            ],
            [
              'name' => 'place',
              'title' => 'Place',
              'type' => '`$STRING`',
              'short' => 'Name of the place',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'short' => 'Type of place (e.g., village, city, town)',
            ],
            [
              'name' => 'wayName',
              'title' => 'Way Name',
              'type' => '`$STRING`',
              'short' => 'Name of the street or road',
            ],
            [
              'name' => 'wayRef',
              'title' => 'Way Ref',
              'type' => '`$STRING`',
              'short' => 'Reference identifier for the way (e.g., road number)',
            ],
          ],
          'name' => 'lonlongitude',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/textParts/lat={latitude}/lon={longitude}',
                  'segments' => [
                    [
                      'lit' => 'textParts',
                    ],
                    [
                      'lit' => 'lat={latitude}',
                    ],
                    [
                      'lit' => 'lon={longitude}',
                    ],
                  ],
                  'parts' => [
                    'textParts',
                    'lat={latitude}',
                    'lon={longitude}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'latitude',
                        'orig' => 'latitude',
                        'type' => '`$NUMBER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 51.3034,
                      ],
                      [
                        'name' => 'longitude',
                        'orig' => 'longitude',
                        'type' => '`$NUMBER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => -0.3063,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'key',
                        'orig' => 'key',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'key',
                      'latitude',
                      'longitude',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'reverse_geocoding' => [
          'fields' => [],
          'name' => 'reverse_geocoding',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/text',
                  'segments' => [
                    [
                      'lit' => 'text',
                    ],
                  ],
                  'parts' => [
                    'text',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'key',
                        'orig' => 'key',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'lat',
                        'orig' => 'lat',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 51.3034,
                      ],
                      [
                        'name' => 'lon',
                        'orig' => 'lon',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => -0.3063,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'key',
                      'lat',
                      'lon',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/text/lat={latitude}/lon={longitude}',
                  'segments' => [
                    [
                      'lit' => 'text',
                    ],
                    [
                      'lit' => 'lat={latitude}',
                    ],
                    [
                      'lit' => 'lon={longitude}',
                    ],
                  ],
                  'parts' => [
                    'text',
                    'lat={latitude}',
                    'lon={longitude}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'latitude',
                        'orig' => 'latitude',
                        'type' => '`$NUMBER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 51.3034,
                      ],
                      [
                        'name' => 'longitude',
                        'orig' => 'longitude',
                        'type' => '`$NUMBER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => -0.3063,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'key',
                        'orig' => 'key',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'key',
                      'latitude',
                      'longitude',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'text_part' => [
          'fields' => [
            [
              'name' => 'boundary',
              'title' => 'Boundary',
              'type' => '`$STRING`',
              'short' => 'Name of the administrative boundary',
            ],
            [
              'name' => 'level',
              'title' => 'Level',
              'type' => '`$STRING`',
              'short' => 'Administrative level of the boundary (e.g., -6, -4, -2, top)',
            ],
            [
              'name' => 'place',
              'title' => 'Place',
              'type' => '`$STRING`',
              'short' => 'Name of the place',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'short' => 'Type of place (e.g., village, city, town)',
            ],
            [
              'name' => 'wayName',
              'title' => 'Way Name',
              'type' => '`$STRING`',
              'short' => 'Name of the street or road',
            ],
            [
              'name' => 'wayRef',
              'title' => 'Way Ref',
              'type' => '`$STRING`',
              'short' => 'Reference identifier for the way (e.g., road number)',
            ],
          ],
          'name' => 'text_part',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/textParts',
                  'segments' => [
                    [
                      'lit' => 'textParts',
                    ],
                  ],
                  'parts' => [
                    'textParts',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'key',
                        'orig' => 'key',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'lat',
                        'orig' => 'lat',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 51.3034,
                      ],
                      [
                        'name' => 'lon',
                        'orig' => 'lon',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => -0.3063,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'key',
                      'lat',
                      'lon',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return GeodescriptionFeatures::make_feature($name);
    }
}
