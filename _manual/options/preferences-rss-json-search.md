<!-- START PREFERENCES {RSS/JSON SEARCH TAB] - -->
### The RSS / JSON Search Tab

![Preferences - The RSS/JSON Search Tab]({{ site.baseurl }}/assets/images/options/preferences-rss-json-search-01.png){:.pic-l}
RSS and JSON Searches give TV&nbsp;Rename additional methods of looking for missing files in your media library, providing URLs for the torrent handlers to use.

**RSS Search**

The _Search RSS for missing files_ tick box enables the RSS search mechanism when ticked.

_Default: **Un-ticked**_

When enabled the "RSS Search" pane is activated.

The _Only on manual scans_ further restricts the RSS Search, stopping it from running on automatic scans.

_Default: **Ticked**_

The _Preferred Terms:_ text box acts as a filter on the RSS Search and contains a semicolon delimited list. There must be a match in the RSS feed to return a search result. The default entry will only find RSS feed results that contain 720p or 1080p in the video names.

_Default: **720p;1080p**_

_The Torrent RSS URLs:_ can be any suitable RSS-feeds provided by indexers or public RSS websites and are used to search for missing files.

`Add` and `Remove` allow you to add and remove feeds, and `Open` presents the highlighted feed in a web browser.

**JSON Search**

The JSON Search is broadly similar.

It downloads information from the web and searches for useful content.

**NOTE:**{:style="color:red;"} Please be aware that JSON Search is currently tightly tied to the EZTV API, and may not work in some countries due to ISP filtering.

Basically the JSON Search:

1. Takes the URL from the settings.
2. Appends the IMDB id.
3. Downloads the data.
4. Goes to the node indicated by the "root Note".
5. Iterates across items in that node looking for tags with "Filename Token" and "URL token".
6. If the filename token looks like it is something useful it downloads the URL token.

| _Defaults_ | | |
| | _Search JSON for missing files_ | _**Un-ticked**_ |
| | _Only on manual scans_ | _**Ticked**_ |

**If things go wrong...**

Ticking the "Detailed logging" box will greatly increase the log detail around either the RSS or JSON searches providing lots of detail - useful ifyou are having trouble setting up either of the searches.

It is recommended that you only use this option if you need to. When ticked the size of the log file will grow very quickly.

{:.toplink}
[Return to Top]()
<!-- END PREFERENCES {RSS/JSON SEARCH TAB] --- -->
