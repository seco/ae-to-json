# ae-to-json

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

will export an After Effects project as a JSON object

## Usage

[![NPM](https://nodei.co/npm/ae-to-json.png)](https://www.npmjs.com/package/ae-to-json)

## Exported Format

```javascript
{
  compositions: [
    { 
      name: 'nameOfComp',
      layers: [
        {
          name: 'nameOfLayer',
          properties: {
            anchorPoint: [
              [ time, [ x, y, z ] ],
              [ time, [ x, y, z ] ],
              ...anchorPoint frames
            ],
            position: [
              [ time, [ x, y, z ] ],
              [ time, [ x, y, z ] ],
              ...position frames
            ],
            scale: [
              [ time, [ scaleX, scaleY, scaleZ ]],
              [ time, [ scaleX, scaleY, scaleZ ]],
              ...more scale frames
            ],
            opacity: [
              [ time, opacity ],
              [ time, opacity ],
              ...more opacity frames
            ],
            rotationX: [
              [ time, rotation ],
              [ time, rotation ],
              ...more rotation frames
            ],
            rotationY: [
              [ time, rotation ],
              [ time, rotation ],
              ...more rotation frames
            ],
            rotationZ: [
              [ time, rotation ],
              [ time, rotation ],
              ...more rotation frames
            ]
          }
        }
      ]
    }
    ...more compositions
  ]
}
```

## Testing

To run tests:

1. Open `test/testProject.aep`
2. `$ npm test`


## License

MIT, see [LICENSE.md](http://github.com/jam3/ae-to-json/blob/master/LICENSE.md) for details.
