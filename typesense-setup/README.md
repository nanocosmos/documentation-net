# typesense docsearch scraper

https://typesense.org/docs/guide/docsearch.html

- File `.env` typesense server configuration, where scraped index will be sent via POST

- File `config.json` template for docusaurus v2,  may need tweaking



## running the scraper via docker

 - Replace in .env var `TYPESENSE_API_KEY=TYPESENSE-ADMIN-KEY`` with a proper key


 - config.json should have start_urls set to target website, 
   - optionally update sitemap target (?)
 - set start urls
 
 - run docker:

```shell
 docker run -ti --rm --env-file=.env -e "CONFIG=$(cat config.json | jq -r tostring)" typesense/docsearch-scraper:0.7.0

```

