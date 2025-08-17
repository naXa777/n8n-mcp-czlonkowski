window.BENCHMARK_DATA = {
  "lastUpdate": 1755414949107,
  "repoUrl": "https://github.com/naXa777/n8n-mcp-czlonkowski",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baab3a02dc68c5d81e33f93bce0e5462d65a52d1",
          "message": "Merge pull request #139 from czlonkowski/feature/validation-improvements\n\nchore: update n8n to v1.106.3 and bump version to 2.10.4",
          "timestamp": "2025-08-12T08:57:47+02:00",
          "tree_id": "eb0e009eb0f4f9b2b57fab8bd3ab6b4442e72ccc",
          "url": "https://github.com/naXa777/n8n-mcp-czlonkowski/commit/baab3a02dc68c5d81e33f93bce0e5462d65a52d1"
        },
        "date": 1755414948632,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0191,
            "unit": "ms",
            "range": 0.4117,
            "extra": "52335 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.2033,
            "unit": "ms",
            "range": 0.8033999999999999,
            "extra": "312 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0048,
            "unit": "ms",
            "range": 0.31370000000000003,
            "extra": "207373 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0689,
            "unit": "ms",
            "range": 0.479,
            "extra": "14505 ops/sec"
          }
        ]
      }
    ]
  }
}