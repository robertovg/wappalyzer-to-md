# wappalyzer-to-md

Simple script to extract wappalyzer information in markdown format to the clipboard

## Usage

Just simle execute

```bash
npx wappalyzer-to-md <url>
```

And then you will have in the clipboard the technology stack of the provided URL.

## Make modifications

To update the output of and execute the new package just:

```bash
npm run build; npm link
```

And then we are able to again execute it with `npx`

To check if everything is still in place

```bash
npm run test
```
