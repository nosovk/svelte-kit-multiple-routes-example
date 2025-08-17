# multiple routes example

Illustration to https://github.com/sveltejs/kit/discussions/14240

## how to use

inside env use those variables:

```
VITE_TYPE=pages
#VITE_TYPE=static

VITE_ROUTE_SUFFIX=1
#VITE_ROUTE_SUFFIX=2
#VITE_ROUTE_SUFFIX=3
#VITE_ROUTE_BASEPATH=
```

where:
VITE_TYPE defines which adapter to use
VITE_ROUTE_SUFFIX defines the suffix of the route
VITE_ROUTE_BASEPATH defines the basepath of the route

### examples
VITE_TYPE=pages
VITE_ROUTE_SUFFIX=1

will lead to use of routes-pages-1 as entrypoint, and will be prepared for cloudflare pages deployment





VITE_TYPE=static
VITE_ROUTE_SUFFIX=2

will lead to use of routes-static-2 as entrypoint, and will be prepared for static files deployment


VITE_ROUTE_BASEPATH could be used to define a basepath for the routes, e.g. publishing lands to subroute