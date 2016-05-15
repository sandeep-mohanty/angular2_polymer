import {Component,OnInit} from "angular2/core";
import {CustomComponentAngular2} from "./components/custom_component";


@Component({
	selector: "app",
	template: `
    <paper-material elevation="5" style = "background-color:#E9EEF0;">
        <div style = "height:40px;color:white;background-color:green;" align = "center">
            <h1>Material Design with Polymer & Angular 2</h1>
        </div> <br />
    </paper-material>
    <paper-material elevation="5" style = "height:550px;background-color:#E9EEF0;">
        
        <div align="center" *ngIf = "username !== ''" [style.color] = "color"><h2>Welcome {{username}} !</h2></div>
        <div align="center"><h3>Paper Button</h3></div>
        <div align="center">
            <paper-button raised  style="color: white;" [style.background-color] = "color.toLowerCase()" (click) = "applyDefault()"
            (mouseover) = "showButtonHelpText()"
            (mouseleave) = "hideButtonHelpText()">
                {{buttonText}}</paper-button>
        </div><br/>
        <div align="center">
            <span *ngIf = "buttonMouseOver"><strong>Click to restore default color (green)</strong></span>
        </div>
        <div align="center"><h3>Paper Icon Buttons</h3></div>
        <div align="center"> 
            <paper-icon-button icon="favorite" [style.color] = "favorite.checked ? color.toLowerCase() : 'green'" ></paper-icon-button>
            <paper-checkbox #favorite>Favorite</paper-checkbox>
            <paper-icon-button icon="feedback" [style.color] = "feedback.checked ? color.toLowerCase() : 'green'" ></paper-icon-button>
            <paper-checkbox #feedback>Feedback</paper-checkbox>
            <paper-icon-button icon="folder-shared" [style.color] = "shared.checked ? color.toLowerCase() : 'green'" ></paper-icon-button>
            <paper-checkbox #shared>Shared Folder</paper-checkbox>
            <paper-icon-button icon="flag" [style.color] = "flag.checked ? color.toLowerCase() : 'green'"  ></paper-icon-button>
            <paper-checkbox #flag>Flag</paper-checkbox>
            <paper-icon-button icon="help" [style.color] = "help.checked ? color.toLowerCase() : 'green'" ></paper-icon-button>
            <paper-checkbox #help>Help</paper-checkbox>
            <paper-icon-button icon="https" [style.color] = "https.checked ? color.toLowerCase() : 'green'" ></paper-icon-button>
            <paper-checkbox #https>Secured Connection</paper-checkbox>
        </div><br/>
        <div align = "center">
            <paper-input label="Enter Your Name" [value] = "username" style="width: 50%;" required (keyup) = "onKeyup($event.srcElement.value)"></paper-input>
        </div> <br/>
        <div align="center"><strong>Set Button Color:   </strong><input type="text" [(ngModel)] = "color"/></div><br/>
        <div align="center"><strong>Set Button Text:   </strong><input type="text" [(ngModel)] = "buttonText"/></div> <br/>
    </paper-material>
    <!--<custom-component-angular2></custom-component-angular2>-->
	`,
    directives: [CustomComponentAngular2]

})

export class PolymerComponentContainer implements OnInit{
    
    private color:string;
    private lexColor:string;
    private buttonText:string;
    private buttonMouseOver:boolean;
    private username:string;
    
	constructor() {
        this.color = "green";
        this.lexColor = "";
        this.buttonText = "Polymer Button"
        this.buttonMouseOver = false;
        this.username = "Visitor";
        this.color = "green";
        this.lexColor = "green";
        this.buttonMouseOver = false;
    }
    
    showButtonHelpText(){
        this.buttonMouseOver = true;
    }
    
    hideButtonHelpText(){
        this.buttonMouseOver = false;
    }
    
    onKeyup(name) {
        this.username = name;
    }
    
    onNgInit(){
        this.color = "green";
        this.lexColor = "green";
        this.buttonText = "Polymer Button"
        this.buttonMouseOver = false;
        this.username = "Visitor";
    }
}
