import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  name="";
  favfood= [
    'Indian','Chinese','Italian','Mexican'
  ]
day:number=0;

isBold: boolean = true;  
fontSize: number = 18;  
isItalic: boolean = true;  

ApplyStyles() {  
    let styles = {  
        'font-weight': this.isBold ? 'bold' : 'normal',  
        'font-style': this.isItalic ? 'italic' : 'normal',  
        'font-size.px': this.fontSize  
    };  

    return styles;  
}  

applyBoldClass: boolean = true;  
    applyItalicsClass: boolean = true;  
  
    applyClasses() {  
        let classes = {  
            boldClass: this.applyBoldClass,  
            italicsClass: this.applyItalicsClass  
        };  
  
        return classes;  
    }  
}
