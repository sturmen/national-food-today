# National Food Today
A website telling you what "food holiday" it is today. Written pretty much using vanilla [Preact](https://preactjs.com) via [preact-cli](https://github.com/developit/preact-cli).

## Setup
1. `git clone`
2. Populate a `data.json` file using the following format:
	```
	[
		{
			"duration": 31,
			"year": 2017,
			"month": 7,
			"day": 1,
			"scope": "National",
			"food": "Bison",
			"unit": "Month"
		},
		...
	]
	```
3. `npm run dev` to test and debug
4. `npm run build` to create a static deployment.