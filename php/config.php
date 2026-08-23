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
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://free.geodescription.com",
                "auth" => [
                    "prefix" => "",
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
              'short' => 'Name of the administrative boundary',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'level',
              'short' => 'Administrative level of the boundary (e.g., -6, -4, -2, top)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'place',
              'short' => 'Name of the place',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'Type of place (e.g., village, city, town)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wayName',
              'short' => 'Name of the street or road',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wayRef',
              'short' => 'Reference identifier for the way (e.g., road number)',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'lonlongitude',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 51.3034,
                        'kind' => 'param',
                        'name' => 'latitude',
                        'orig' => 'latitude',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => -0.3063,
                        'kind' => 'param',
                        'name' => 'longitude',
                        'orig' => 'longitude',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'key',
                        'orig' => 'key',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/textParts/lat={latitude}/lon={longitude}',
                  'parts' => [
                    'textParts',
                    'lat={latitude}',
                    'lon={longitude}',
                  ],
                  'select' => [
                    'exist' => [
                      'key',
                      'latitude',
                      'longitude',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'key',
                        'orig' => 'key',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 51.3034,
                        'kind' => 'query',
                        'name' => 'lat',
                        'orig' => 'lat',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => -0.3063,
                        'kind' => 'query',
                        'name' => 'lon',
                        'orig' => 'lon',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/text',
                  'parts' => [
                    'text',
                  ],
                  'select' => [
                    'exist' => [
                      'key',
                      'lat',
                      'lon',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 51.3034,
                        'kind' => 'param',
                        'name' => 'latitude',
                        'orig' => 'latitude',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => -0.3063,
                        'kind' => 'param',
                        'name' => 'longitude',
                        'orig' => 'longitude',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'key',
                        'orig' => 'key',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/text/lat={latitude}/lon={longitude}',
                  'parts' => [
                    'text',
                    'lat={latitude}',
                    'lon={longitude}',
                  ],
                  'select' => [
                    'exist' => [
                      'key',
                      'latitude',
                      'longitude',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
              'short' => 'Name of the administrative boundary',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'level',
              'short' => 'Administrative level of the boundary (e.g., -6, -4, -2, top)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'place',
              'short' => 'Name of the place',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'Type of place (e.g., village, city, town)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wayName',
              'short' => 'Name of the street or road',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wayRef',
              'short' => 'Reference identifier for the way (e.g., road number)',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'text_part',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'key',
                        'orig' => 'key',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 51.3034,
                        'kind' => 'query',
                        'name' => 'lat',
                        'orig' => 'lat',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => -0.3063,
                        'kind' => 'query',
                        'name' => 'lon',
                        'orig' => 'lon',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/textParts',
                  'parts' => [
                    'textParts',
                  ],
                  'select' => [
                    'exist' => [
                      'key',
                      'lat',
                      'lon',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
