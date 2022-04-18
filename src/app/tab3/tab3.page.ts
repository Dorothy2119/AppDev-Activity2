import { Component} from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contactlist = [
    {id: 1, name: 'Liza Espadero Avestruz', email: 'lizaavestruz09@gmail.com'  ,number: '09247563839'},
    {id: 2, name: 'Hugo Avestruz', email: 'hugoavestruz@gmail.com'  ,number: '09194237031'},
    {id: 3, name: 'Cheradee Espadero Avestruz', email: 'avestruzcheradee@gmail.com'  ,number: '09563748236'},
    {id: 4, name: 'Ismael Espadero Avestruz', email: 'avestruzismael@gmail.com'  ,number: '09774465605'},
    {id: 5, name: 'Zaira Astorga', email: 'zairaastorga@gmail.com'  ,number: '09125670253'},
    {id: 6, name: 'Mary Jane Alas Balais', email: 'maryjanebalais@gmail.com'  ,number: '09262348541'},
    {id: 7, name: 'Mark Jason Bustillo', email: 'markjasonbustillo@gmail.com'  ,number: '09549372174'},
    {id: 8, name: 'Cherry Lyn Avestruz', email: 'cherrylynavestruz@gmail.com'  ,number: '09257834925'},
    {id: 9, name: 'Erwin Astorga', email: 'erwinastorga28@gmail.com'  ,number: '09562839534'},
    {id: 10, name: 'Laila Bustillo', email: 'lailabustillo19@gmail.com'  ,number: '09275627482'},
  ]

  constructor(public alertController: AlertController, public toastController: ToastController ) {
  }
  async  confirmation(index: number) {
    const alert = await this.alertController.create({
      header: 'Are You Sure You Want To Delete?',
      buttons: [
        {
          text: 'Yes',
          role: 'destructive',
          handler: () => {

              this.contactlist.splice(index, 1);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', 
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });

    await alert.present();
  }
  async addUser() {
    let prompt = await this.alertController.create({
      
      header: 'Add Contact',
      message: "",
      
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },{
          name: 'email',
          placeholder: '@gmail  (optional)',
        },
        {
          name: 'number',
          placeholder: 'Phone number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log('Saved clicked');
            var nameLetter =/^[A-Za-z]+$/;

            if((data.name != null) && (data.number.length > 0)){
              if(data.name.length > 15){
              this.showErrorToast('<ion-text color="danger"><b>Name should be greater than 15 letters</b></ion-text>');
              return false;
              }
              else if(data.number.length != 11){
              this.showErrorToast('<ion-text color="danger"><b>Number should be 11 numbers only</b></ion-text>');
              return false;
              }
              else if(!data.name.match(nameLetter)){
              this.showErrorToast('<ion-text color="danger"><b>Name should be aphabet only</b></ion-text>');
              return false;
              }
              else{
                if(data.email.length == 0){
                  data.email = "none"
                }
              this.contactlist.push({
                id: data.id,
                name: data.name,
                email: data.email,
                number: data.number
              });
              this.showErrorToast('<ion-text color="danger"><b>Added</b></ion-text>');
            }
            }
            else{
              this.showErrorToast('<ion-text color="danger"><b>Pls fill in the blanks</b></ion-text>');
              return false;
            }
          
        
          }
        }
      ]
    });
    await prompt.present();

  }
  async showErrorToast(data: any) {
    let toast = this.toastController.create({
      message: data,
      duration: 3000,
      position: 'top'
    });

   

    (await toast).present();
  }


}
