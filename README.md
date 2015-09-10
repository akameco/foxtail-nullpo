# foxtail-nullpo
'ぬるぽ'に即座に'ガッ'するfoxtailプラグイン

## USAGE

```
npm install akameco/foxtail-nullpo.git
```

Add foxtail-script.json

```json
["foxtail-nullpo"]
```

## Development

```
# watch
npm run watch
# build
npm run build
# test
npm test
```
### How do I run test?
Create file: `config.json` at the root of the plugin folder.
like this.

```config.json
{
  "consumer_key": "...",
  "consumer_secret": "...",
  "access_token": "...",
  "access_token_secret": "..."
}
```

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
MIT
