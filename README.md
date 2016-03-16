# ae-to-json

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

The purpose of this module is to have one After Effects JSX (After Effects JS) script to:
- Export After Effects files as JSON like Objects
- Standardize After Effects to JSON Exporters
- Keep the exporter separate from renderer
- Create a platform on which renderers can be built on top of
- Have proper unit tests to catch breaking changes in After Effects (one failure point vs many failure points)

Documentation on Adobe's After Effects scripting guide can be found here:
- [After Effects Scripting Guide](http://download.macromedia.com/pub/developer/aftereffects/scripting/After-Effects-CS6-Scripting-Guide.pdf) _(appendix of API documentation starts on Page #12)_

## Usage

[![NPM](https://nodei.co/npm/ae-to-json.png)](https://www.npmjs.com/package/ae-to-json)

## High Level Exported Format

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
              [ time, [ x, y, z ], easeInfo],
              [ time, [ x, y, z ], easeInfo],
              ...anchorPoint frames
            ],
            position: [
              [ time, [ x, y, z ], easeInfo],
              [ time, [ x, y, z ], easeInfo],
              ...position frames
            ],
            scale: [
              [ time, [ scaleX, scaleY, scaleZ ], easeInfo],
              [ time, [ scaleX, scaleY, scaleZ ], easeInfo],
              ...more scale frames
            ],
            opacity: [
              [ time, opacity, easeInfo],
              [ time, opacity, easeInfo],
              ...more opacity frames
            ],
            rotationX: [
              [ time, rotation, easeInfo],
              [ time, rotation, easeInfo],
              ...more rotation frames
            ],
            rotationY: [
              [ time, rotation, easeInfo],
              [ time, rotation, easeInfo],
              ...more rotation frames
            ],
            rotationZ: [
              [ time, rotation, easeInfo],
              [ time, rotation, easeInfo],
              ...more rotation frames
            ]
          }
        }
        ...more layers
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
