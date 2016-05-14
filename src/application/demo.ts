import {Component} from "angular2/core";


@Component({
	selector: "app",
	template: `
    <div align="center"><h1>Material Design with Polymer</h1></div><br />
    <div align="center"><h2>Paper Button</h2></div>
    <div align="center"><paper-button raised  style="color: white;" [style.background-color] = "color.toLowerCase()" (click) = "applyDefault()"
        (mouseover) = "showButtonHelpText()"
        (mouseleave) = "hideButtonHelpText()"
    >{{buttonText}}</paper-button></div><br/><div align="center"><span *ngIf = "buttonMouseOver"><strong>Clicking will restore defaults</strong></span><br />
    <div align="center"><h2>Paper Icon Buttons</h2></div>
    <div align="center"> 
        <paper-icon-button icon="favorite" [style.color] = "color.toLowerCase()" ></paper-icon-button>
        <paper-icon-button icon="feedback" [style.color] = "color.toLowerCase()" ></paper-icon-button>
        <paper-icon-button icon="folder-shared" [style.color] = "color.toLowerCase()" ></paper-icon-button>
        <paper-icon-button icon="flag" [style.color] = "color.toLowerCase()"  ></paper-icon-button>
        <paper-icon-button icon="help" [style.color] = "color.toLowerCase()" ></paper-icon-button>
        <paper-icon-button icon="https" [style.color] = "color.toLowerCase()" ></paper-icon-button>
    </div><br/>
    <div align="center"><strong>Set color:   </strong><input type="text" [(ngModel)] = "color"/></div><br/>
    <div align="center"><strong>Set Button Text:   </strong><input type="text" [(ngModel)] = "buttonText"/></div>
	`

})

export class PolymerComponentContainer {
    
    private color:string;
    private lexColor:string;
    private buttonText:string;
    private buttonMouseOver:boolean;
    
	constructor() {
        this.color = "green";
        this.lexColor = "green";
        this.buttonText = "Polymer Button"
        this.buttonMouseOver = false;
	}
    
    applyDefault(){
        this.color = "green";
        this.lexColor = "green";
        this.buttonText = "Polymer Button"
        this.buttonMouseOver = false;
    }
    
    showButtonHelpText(){
        this.buttonMouseOver = true;
    }
    
    hideButtonHelpText(){
        this.buttonMouseOver = false;
    }
}
