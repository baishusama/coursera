(function(){
  'use strict';

  angular.module('ShoppingListCheckOffApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListService', ShoppingListService);

  ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListService){
    var buy = this;

    buy.items = ShoppingListService.getItemsToBuy();
    buy.buyItem = function (itemIndex) {
      ShoppingListService.buyItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListService'];
  function AlreadyBoughtController(ShoppingListService) {
    var bought = this;

    bought.items = ShoppingListService.getItemsBought();
  }

  function ShoppingListService() {
    var service = this;

    // pre-populated items
    var itemsToBuy = [
      {
        name: "cookies",
        quantity: 10
      },
      {
        name: "tea bags",
        quantity: 5
      },
      {
        name: "chocolates",
        quantity: 20
      },
      {
        name: "coffee",
        quantity: 7
      },
      {
        name: "cakes",
        quantity: 2
      }
    ];

    var itemsBought = [];

    service.buyItem = function (index) {
      // Note the splice method returns an array!!
      itemsBought.push(itemsToBuy.splice(index, 1)[0]);

      /* Note the below way to refresh itemsBought variable is WRONG :( */

      // Why is WRONG?:
      // Bet that it changes array itemsBought's point to an new array,
      // so that bought.items, who used getItemsBought's return - itemsBought
      // in the first place, becomes always point to the empty array,
      // which itemsBought is initialized with...

      // The WRONG way
      // itemsBought = itemsBought.concat(itemsToBuy.splice(index, 1));
    };

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };
  }
})();
