app.directive("pushArray", function(){
	return {
		template: "push",
		restrict: "A",
		scope: {
			lista: "="
		},
		link: function(scope, element, attr){
			element.bind("click", function(){
				var checked = element[0].checked;
				var value = attr.value;
				if(scope.lista == undefined){
					console.log("lista");
					scope.lista = [];
				}
				var index = scope.lista.indexOf(value);

				if(index === -1 && checked){
					scope.lista.push(value);
				}else{
					delete scope.lista[index];
				}
			})
		}
	};
})