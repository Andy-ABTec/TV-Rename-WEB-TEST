<!-- START LOG FILES ------------------------- -->
## Log Files

The main log file (TVRename.log) can be found in: -

> \\Users\\\<username\>\\AppData\\Roaming\\TV Rename\\log\\

Log files are rotated into an "archive" folder (in the same location as TVRename.log) every time TV&nbsp;Rename is run or every 24 hours, whichever is sooner.

As with **tvdb.xml** and **settings.xml** a maximum of ten backup copies of the log file are kept (**TVRename00.log** - **TVRename09.log**) on a first-in-first-out (FIFO) basis.

Logging uses NLog. The configuration file ([NLog.config](https://github.com/TV-Rename/tvrename/blob/master/TVRename%23/NLog.config "Look at NLog.config in the TV-Rename Repo")) is stored in the TV&nbsp;Rename program folder.

You can read the [NLog Wiki](https://github.com/nlog/NLog/wiki/Configuration-file "Visit the NLog Wiki") for guidance on how to adjust the configuration file to collect more information.

When raising a bug please include a log file that illustrates the issue if you can, it will help us find a solution quickly.

{:.toplink}
[Return to Top]()
<!-- END LOG FILES --------------------------- -->
