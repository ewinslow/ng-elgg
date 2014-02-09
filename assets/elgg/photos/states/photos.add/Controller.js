define(function() {
    function Controller($stateParams) {
        this.album = {
            guid: 0,
            container: {
                guid: $stateParams.container
            },
            access_id: 0,
        };
    }

    Controller.prototype.submit = function() {
        /*elgg.action('photos/album/save', {
			guid: this.album.guid,
			container_guid: this.album.container.guid,
			title: this.album.displayName,
			description: this.album.content,
			access_id: this.album.access_id,
		}).success(function(result) {
			if (result.status == 0) {
				$location.url(result.forward_url.slice(elgg.config.wwwroot.length));
			}
			
			$rootScope.$digest();
		});*/
    };


    return Controller;
});
