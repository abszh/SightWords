# Sight words

A React app to practice sight words.

## Data

Sight words are grouped into multiple pages. This data can be found in `./src/pages.json`. Each page has a name, a title, a colour and an array of words. For example the below json defines the blue page:

```json
{
  "name": "blue",
  "title": "Blue",
  "color": "blue",
  "items": [
    "an",
    "as",
    "by",
    "do",
    "go",
    "if",
    "me",
    "my",
    "no",
    "or",
    "so",
    "up"
  ]
}
```

To add new pages, only `./src/pages.json` needs to be extended.

## Screenshot

![example](./docs/red_words_example.png)

