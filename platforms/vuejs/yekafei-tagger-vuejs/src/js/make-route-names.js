


function innerHasName(item) {
    let name = item.name;
    if (name == null || name == '') {
        return false;
    }
    return true;
}


function innerMakeItemName(item) {
    let name = 'route_' + item.path;
    name = name.replaceAll('/', '_');
    name = name.replaceAll('-', '_');
    return name;
}


////////////////////////////////////////////////////////////////////////////////

/***
 * @param  routes array of route-items
 * */
function makeRouteNames(routes) {
    for (let index in routes) {
        let item = routes[index];
        if (innerHasName(item)) {
            continue;
        }
        item.name = innerMakeItemName(item);
    }
}


/***
 * @param  routes array of route-items
 * */
function logRouteItems(routes) {
    const mk = '"'
    for (let index in routes) {
        let item = routes[index];
        let path = mk + item.path + mk;
        let name = mk + item.name + mk;
        let str = '[route path:' + path + ' name:' + name + ']';
        console.log(str);
    }
}


////////////////////////////////////////////////////////////////////////////////


export default {
    makeRouteNames, logRouteItems,
}
