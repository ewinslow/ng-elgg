define([], function() {
  "use strict";
  define(function() {
    return function($scope, elggDatabase, elgg) {
      $scope.id = 'elgg-users-' + Math.random();
      $scope.listbox = {
        currentUser: null,
        selections: {},
        rangeSelect: {
          startIndex: null,
          endIndex: null
        }
      };
      $scope.handleScroll = function($event) {
        this.hasNextItems() && !this.isLoadingNextItems() && this.loadNextItems();
      };
      $scope.getSelectedBannedUsers = function() {
        return this.getSelectedItems().filter(function(user) {
          return user.banned;
        });
      };
      $scope.banUser = function(user) {
        if (user.banned) {
          return;
        }
        elgg.action('admin/user/ban', {guid: user.guid}).then(function() {
          user.banned = true;
          $scope.$digest();
        });
      };
      $scope.unbanUser = function(user) {
        if (!user.banned) {
          return;
        }
        elgg.action('admin/user/unban', {guid: user.guid}).then(function() {
          user.banned = false;
          $scope.$digest();
        });
      };
      $scope.banSelectedUsers = function() {
        this.getSelectedItems().forEach(this.banUser.bind(this));
      };
      $scope.unbanSelectedUsers = function() {
        this.getSelectedItems().forEach(this.unbanUser.bind(this));
      };
      $scope.getSelectedUnbannedUsers = function() {
        return this.getSelectedItems().filter(function(user) {
          return !user.banned;
        });
      };
      $scope.getSelectedItems = function() {
        return this.getItems().filter(this.isSelected.bind(this));
      };
      $scope.handleAction = function(user) {
        this.listbox.currentUser = user;
        this.setSelected(user, !this.isSelected(user));
      };
      $scope.handleKeyDown = function($event) {
        var keyCode = $event.keyCode || $event.which;
        switch (keyCode) {
          case 40:
            if ($event.shiftKey) {
              this.setSelected(this.getCurrentUser(), true);
              this.setSelected(this.getNextUser(), true);
            }
            this.focusNext();
            break;
          case 38:
            if ($event.shiftKey) {
              this.setSelected(this.getCurrentUser(), true);
              this.setSelected(this.getPreviousUser(), true);
            }
            this.focusPrevious();
            break;
          case 32:
            var user = this.getCurrentUser();
            this.setSelected(user, !this.isSelected(user));
            break;
          default:
            return;
        }
        $event.preventDefault();
      };
      $scope.getCurrentUser = function() {
        return this.listbox.currentUser;
      };
      $scope.getActiveIndex = function() {
        return this.getItems().indexOf(this.getCurrentUser());
      };
      $scope.focusNext = function() {
        this.listbox.currentUser = this.getNextUser();
      };
      $scope.getNextUser = function() {
        if (!this.getItems) {
          return null;
        }
        var currentUser = this.getCurrentUser();
        if (!currentUser) {
          return this.getItems()[0];
        }
        var currentIndex = this.getItems().indexOf(currentUser);
        var nextIndex = currentIndex + 1;
        if (nextIndex >= this.getItems().length) {
          return this.getItems()[0];
        }
        return this.getItems()[$traceurRuntime.toProperty(nextIndex)];
      };
      $scope.focusPrevious = function() {
        this.listbox.currentUser = this.getPreviousUser();
      };
      $scope.getPreviousUser = function() {
        var currentUser = this.getCurrentUser();
        var itemsLength = this.getItems().length;
        if (!currentUser) {
          return this.getItems()[$traceurRuntime.toProperty(itemsLength - 1)];
        }
        var currentIndex = this.getItems().indexOf(currentUser);
        var previousIndex = currentIndex - 1;
        if (previousIndex < 0) {
          return this.getItems()[$traceurRuntime.toProperty(itemsLength - 1)];
        }
        return this.getItems()[$traceurRuntime.toProperty(previousIndex)];
      };
      $scope.setSelected = function(user, selected) {
        $traceurRuntime.setProperty(this.listbox.selections, user.guid, selected);
      };
      $scope.setAllSelections = function(selected) {
        this.getItems().forEach(function(user) {
          $traceurRuntime.setProperty(this.listbox.selections, user.guid, selected);
        }.bind(this));
      };
      $scope.allSelected = function() {
        return this.getItems().every(function(user) {
          return this.listbox.selections[$traceurRuntime.toProperty(user.guid)];
        }.bind(this));
      };
      $scope.getOptionClasses = function(user) {
        return {
          'elgg-state-selected': this.isSelected(user),
          'elgg-state-focused': this.isCurrentUser(user)
        };
      };
      $scope.isCurrentUser = function(user) {
        return this.getCurrentUser() == user;
      };
      $scope.isSelected = function(user) {
        return this.listbox.selections[$traceurRuntime.toProperty(user.guid)];
      };
      elggDatabase.getUsers({banned: 0}).then(function(collection) {
        $scope.getItems = collection.getItems.bind(collection);
        $scope.getTotalItems = collection.getTotalItems.bind(collection);
        $scope.hasNextItems = collection.hasNextItems.bind(collection);
        $scope.isLoadingNextItems = collection.isLoadingNextItems.bind(collection);
        $scope.listbox.currentUser = collection.getItems()[0];
        $scope.loadNextItems = function() {
          collection.loadNextItems().always(this.$digest.bind(this));
        };
      });
    };
  });
  return {};
});
