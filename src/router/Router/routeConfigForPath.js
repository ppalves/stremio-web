const routeConfigForPath = (viewsConfig, path) => {
    for (const viewConfig of viewsConfig) {
        for (const routeConfig of viewConfig) {
            if (path.match(routeConfig.regexp)) {
                return routeConfig;
            }
        }
    }

    return null;
};

module.exports = routeConfigForPath;