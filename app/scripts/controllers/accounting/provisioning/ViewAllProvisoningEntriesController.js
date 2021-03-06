(function (module) {
    mifosX.controllers = _.extend(module, {
        ViewAllProvisoningEntriesController: function (scope, routeParams, paginatorService, resourceFactory, location, $modal) {
            resourceFactory.provisioningentries.getAll(function (data) {
                scope.entries = data;
            });

            scope.routeTo = function (id) {
                location.path('/viewprovisioningentry/' + id);
            };

            scope.viewJournals = function (id) {
                location.path('/viewprovisioningjournalentry/' + id);
            };

            scope.recreate = function (id) {
                resourceFactory.provisioningentries.reCreateProvisioningEntries({entryId: id}, this.formData, function (data) {
                    location.path('/viewprovisioningentry/'+id);
                });
            };

            var fetchFunction = function (offset, limit, callback) {
                var params = {};
                params.offset = offset;
                params.limit = limit;
                params.locale = scope.optlang.code;
                params.dateFormat = scope.df;
                scope.saveSC();
                resourceFactory.provisioningentries.getAll(params, callback);
            };
        }


    });
    mifosX.ng.application.controller('ViewAllProvisoningEntriesController', ['$scope', '$routeParams', 'PaginatorService', 'ResourceFactory', '$location', '$modal', mifosX.controllers.ViewAllProvisoningEntriesController]).run(function ($log) {
        $log.info("ViewAllProvisoningEntriesController initialized");
    });
}(mifosX.controllers || {}));
