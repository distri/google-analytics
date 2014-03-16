(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2014 \n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "google-analytics\n================\n\nGoogle analytics for distri apps\n",
      "type": "blob"
    },
    "lib/analytics.js": {
      "path": "lib/analytics.js",
      "mode": "100644",
      "content": "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "Google Analytics\n================\n\n    module.exports =\n      init: (id) ->\n        require \"./lib/analytics\"\n\n        global.ga('create', id, 'auto')\n        global.ga('send', 'pageview')\n",
      "type": "blob"
    },
    "test/main.coffee": {
      "path": "test/main.coffee",
      "mode": "100644",
      "content": "mocha.globals(\"ga\")\n\ndescribe \"analytics\", ->\n  it \"should put analytics on the page\", ->\n    GA = require \"../main\"\n\n    GA.init(\"UA-XXXX-Y\")\n\n  it \"should be a chill bro\", ->\n    ga(\"send\", \"duder\")\n",
      "type": "blob"
    }
  },
  "distribution": {
    "lib/analytics": {
      "path": "lib/analytics",
      "content": "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n",
      "type": "blob"
    },
    "main": {
      "path": "main",
      "content": "(function() {\n  module.exports = {\n    init: function(id) {\n      require(\"./lib/analytics\");\n      global.ga('create', id, 'auto');\n      return global.ga('send', 'pageview');\n    }\n  };\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    },
    "test/main": {
      "path": "test/main",
      "content": "(function() {\n  mocha.globals(\"ga\");\n\n  describe(\"analytics\", function() {\n    it(\"should put analytics on the page\", function() {\n      var GA;\n      GA = require(\"../main\");\n      return GA.init(\"UA-XXXX-Y\");\n    });\n    return it(\"should be a chill bro\", function() {\n      return ga(\"send\", \"duder\");\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/main.coffee",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "entryPoint": "main",
  "repository": {
    "id": 17791404,
    "name": "google-analytics",
    "full_name": "distri/google-analytics",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://gravatar.com/avatar/192f3f168409e79c42107f081139d9f3?d=https%3A%2F%2Fidenticons.github.com%2Ff90c81ffc1498e260c820082f2e7ca5f.png&r=x",
      "gravatar_id": "192f3f168409e79c42107f081139d9f3",
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/google-analytics",
    "description": "Google analytics for distri apps",
    "fork": false,
    "url": "https://api.github.com/repos/distri/google-analytics",
    "forks_url": "https://api.github.com/repos/distri/google-analytics/forks",
    "keys_url": "https://api.github.com/repos/distri/google-analytics/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/google-analytics/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/google-analytics/teams",
    "hooks_url": "https://api.github.com/repos/distri/google-analytics/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/google-analytics/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/google-analytics/events",
    "assignees_url": "https://api.github.com/repos/distri/google-analytics/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/google-analytics/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/google-analytics/tags",
    "blobs_url": "https://api.github.com/repos/distri/google-analytics/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/google-analytics/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/google-analytics/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/google-analytics/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/google-analytics/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/google-analytics/languages",
    "stargazers_url": "https://api.github.com/repos/distri/google-analytics/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/google-analytics/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/google-analytics/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/google-analytics/subscription",
    "commits_url": "https://api.github.com/repos/distri/google-analytics/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/google-analytics/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/google-analytics/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/google-analytics/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/google-analytics/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/google-analytics/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/google-analytics/merges",
    "archive_url": "https://api.github.com/repos/distri/google-analytics/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/google-analytics/downloads",
    "issues_url": "https://api.github.com/repos/distri/google-analytics/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/google-analytics/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/google-analytics/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/google-analytics/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/google-analytics/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/google-analytics/releases{/id}",
    "created_at": "2014-03-16T03:39:25Z",
    "updated_at": "2014-03-16T03:39:25Z",
    "pushed_at": "2014-03-16T03:39:25Z",
    "git_url": "git://github.com/distri/google-analytics.git",
    "ssh_url": "git@github.com:distri/google-analytics.git",
    "clone_url": "https://github.com/distri/google-analytics.git",
    "svn_url": "https://github.com/distri/google-analytics",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://gravatar.com/avatar/192f3f168409e79c42107f081139d9f3?d=https%3A%2F%2Fidenticons.github.com%2Ff90c81ffc1498e260c820082f2e7ca5f.png&r=x",
      "gravatar_id": "192f3f168409e79c42107f081139d9f3",
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 2,
    "branch": "master",
    "publishBranch": "gh-pages"
  },
  "dependencies": {}
});