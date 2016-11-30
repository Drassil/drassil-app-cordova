(function () {
    function Api() {

    }

    Api.prototype.appClose = function () {
        this.win.close();
    };

    // export api
    module.exports = {
        api: new Api()
    };
})();