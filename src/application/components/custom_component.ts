import {Component, OnInit} from "angular2/core";

@Component({
    selector: "custom-component-angular2",
    template: `
        <custom-component [customtext] = "customText" ></custom-component>
    `
})

export class CustomComponentAngular2 implements OnInit {
    
    private customText: string;
    constructor(){

    }
    
    ngOnInit() {
         this.customText = "Custom Polymer Element Text";  
    }
}