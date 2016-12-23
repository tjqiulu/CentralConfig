"use strict";
var PageInfo = (function () {
    function PageInfo(links, title, description) {
        this.links = links;
        this.title = title;
        this.description = description;
    }
    return PageInfo;
}());
exports.PageInfo = PageInfo;
var Link = (function () {
    function Link(path, name) {
        this.path = path;
        this.name = name;
    }
    return Link;
}());
exports.Link = Link;
//# sourceMappingURL=app.model.js.map