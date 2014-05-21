# flexget-config

My useful Flexget configuration files.

## Installation

- Copy 'private/sample/' config files in 'private/' and rename files without "_sample".
- Fill all your config settings (Email, Transmission, T411 cookie...)

- Copy HTML mail Template from templates/email/html.template to your '(flexget install location)/templates/email/'
- flexget is usually installed somewhere like `/usr/local/lib/python2.7/dist-packages/flexget/`   
- HTML template is based on https://github.com/DSchau/flexget-config/blob/master/README.md repository

## All task informations

### TV-SHOWS
- Simply series plugin usage

### Movies Watchlist
- Populate queue movies with IMDB watchList (RSS feeds)
- Search in Movies RSS/HTML Inputs if watchList entries are mentionned.

### Movies Discover
- Search in Movies RSS/HTML Inputs if movies matches all Discover template conditions.

### Subtitles
- Check paths and search if FR subtitles are available.

### Email Notifications
- Daily notifications from RSS generated with accepted entries.

### Transmission Cleanup
- Clean Transmission queue