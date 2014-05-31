import Controller from "./Controller";
import template from "./template.ng";

export default {
    restrict: 'E',
    replace: true,
    scope: {
        blog: '=',
    },
    controller: Controller,
    controllerAs: 'ctrl',
    template: template
};
