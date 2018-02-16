import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from "../../models/item/item.model";
import { ShoppingListService } from "../../services/shopping-list/shopping-list.service";
import { ToastService } from "../../services/toast/toast.service";



@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  item: Item;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private shoppingListServie: ShoppingListService,
    private toastService: ToastService
  ) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item) {
    this.shoppingListServie.editItem(item).then(() => {
      this.toastService.show(`${item.name} saved!`)
      this.navCtrl.setRoot('HomePage');
    })
  }

  removeItem(item: Item) {
    this.shoppingListServie.removeItem(item).then(() => {
      this.toastService.show(`${item.name} deleted!`)
      this.navCtrl.setRoot('HomePage');
    })
  }

}
