define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"modal\" en-modal ng-controller=\"addpage_controller\">\n	<form class=\"modal-body\" ng-submit=\"addpage()\">\n		<div class=\"close-button\" ng-click=\"close()\"></div>\n\n"
    + ((stack1 = container.invokePartial(partials["@partial-block"],depth0,{"name":"@partial-block","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n	</form>\n</div></div>\n";
},"usePartial":true,"useData":true}); });