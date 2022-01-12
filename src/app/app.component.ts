import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'libProject';
    public formfieldrefresh: boolean = false;
    public updatetable: boolean = false;
    public formfieldrefreshdata: any = null;
    public formdata: any = {
        successmessage: "Added Successfully !!",
        submittext: "Rush Now",
        canceltext: "Cancel Now",
        resettext: "reset This",
        redirectpath: "/admindashbord1",
        submitactive: true, //optional, default true
        apiUrl: "http://localhost:3000/api/",
        endpoint: 'addformdata',
        jwttoken: "this._apiService.jwttoken",
        secret: 'nmjnwn22ssdd',
        groups: ['grp1', 'grp2', 'grp3'],
        //hidereset:true,
        //hidecancel:true,
        cancelroute: '/brand',

        custombuttons: [
            {
                name: 'save',
                label: 'Save Data',
                class: 'savecls',
                type: 'button',
                tooltip: "save"
            },
            {
                name: 'save_form_data',
                label: 'Save Value',
                class: 'savecls',
                type: 'button',
                tooltip: "save"
            }
        ],

        fields: [
            {
                label: "Hour",
                name: "hour",
                value: "",
                max: 23,
                group: 'grp1',
                type: 'number',
                validations: [
                    { rule: "required", message: "Hour is Required" },
                ],
            },
            {
                heading: "This is Name Header <h1> Fill the form Up !! </h1>",
                label: "Name",
                name: "fullname",
                group:'grp2',
                value: 'Test N',
                type: "text",
                disabled: true,
                // validations: [
                //     { rule: 'required' },
                //     { rule: 'maxLength', value: 10 },
                //     { rule: 'minLength', value: 2 }
                // ],
                prefix: "http://google.com/",
                suffix: "PM",
                customheadingflag: true,
                customheadingtitle: 'Manage Custom Section',
                custombuttonflag: true

            },
            {
                label: "Description",
                name: "desc-1",
                type: 'textarea',
                group:'grp1',
                rows: 1,
                cols: 2,
                value: "This test  desc!! test-1 ",
                hint: "Desc .... ",
                // validations: [
                //     { rule: 'required', message: "desc field Needs to be required" },
                // ]
            },
            {
                label: "Description",
                name: "desc",
                type: 'textarea',
                rows: 5,
                cols: 70,
                value: "This test  desc!!",
                hint: "Desc .... ",
                // validations: [
                //     { rule: 'required', message: "Email field Needs to be required" },
                // ]
            },
            {
                label: "Description",
                name: "desc2",
                type: 'textarea',
                // rows:5,
                // cols:70,
                value: "This test  desc 2 !!",
                hint: "Desc .... ",
                // validations: [
                //     { rule: 'required', message: "Email field Needs to be required" },
                // ]
            },
            {
                label: "Description 1",
                name: "desc1",
                type: 'textarea',
                rows: 25,
                cols: 200,
                value: "This test  desc 1 !!",
                hint: "Desc .... ",
                // validations: [
                //     { rule: 'required', message: "Email field Needs to be required" },
                // ]
            },
            {
                label: "Description Field",
                name: "htmldesc",
                type: 'editor',
                value: "This test html <b>ff</b> !!",
                hint: "Desc .... ",
                // validations: [
                //     { rule: 'required', message: "Html Desc field Needs to be required" },
                // ]
                // ckeConfig: this.ckeConfig
            },

            {
                label: "Email",
                name: "email",
                type: 'email',
                hint: "abc@gmail.com",
                // validations: [
                //     { rule: 'required', message: "Email field Needs to be required" },
                //     { rule: 'pattern', value: this.emailregex, message: "Must be a valid Email" }
                // ]
                custombuttonflag: true
            },
            // {
            //     label: "Image Choice",
            //     name: "imagechoice",
            //     type: 'image',
            //     hint: "Choose an Img",
            //     val: [{
            //         key: 1,
            //         image: "https://www.generatormix.com/images/cartoon/baloo.jpg"
            //     },
            //     {
            //         key: 2,
            //         image: "https://www.computerhope.com/jargon/r/random-dice.jpg"
            //     },
            //     {
            //         key: 3,
            //         image: "https://cdn140.picsart.com/301791105082201.jpg?type=webp&to=min&r=640"
            //     }],
       
            // },
            // {
            //     label: "Image Choice 2",
            //     name: "imagechoice2",
            //     type: 'image',
            //     hint: "Choose an Img 2",
            //     value: 2,
            //     val: [{
            //         key: 1,
            //         image: "https://www.generatormix.com/images/cartoon/baloo.jpg"
            //     },
            //     {
            //         key: 2,
            //         image: "https://www.computerhope.com/jargon/r/random-dice.jpg"
            //     },
            //     {
            //         key: 3,
            //         image: "https://cdn140.picsart.com/301791105082201.jpg?type=webp&to=min&r=640"
            //     }],
         
            // },
            {
                label: "DOB",
                name: "dob",
                type: 'date',
                value: new Date().toISOString(),
                hint: "05/05/2020",
                minDate: new Date(),
                maxDate: new Date(2024, 8, 31),
                // validations: [
                //     { rule: 'required', message: "Email field Needs to be required" }
                // ]
            }, {
                label: "DOJ",
                name: "doj",
                type: 'date',
                value: new Date(2018, 11, 24, 10, 33, 30, 0).toISOString(),
                hint: "05/05/2020",
                // validations: [
                //     { rule: 'required', message: "Email field Needs to be required" }
                // ]
            }
          ]
        }
  constructor(){

  }
  listenFormFieldChange(val:any){

  }
}
