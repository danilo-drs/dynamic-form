import { Validators } from "@angular/forms/forms";
import { Message } from "app/Models/message";
import { FormButtonStyle } from "app/Models/form-button-style.enum";

export class FormInput {
    title: string;
    placeHolder: string;
    validators : Array<Validators>;
    value: any;
    isValid: boolean;
    messages:Array<Message>
    errors:Array<any>
}

export class FormInputText extends FormInput{
    value: string;
}

export class FormInputTextArea extends FormInput{
    value: string;
    lines: number;
}

export class FormInputDate extends FormInput{
    value: Date;
}

export class FormInputEmail extends FormInput{
    value: string;
}

export class FormInputPassword extends FormInput{
    value: string;
}

export class FormInputSelect extends FormInput{
    value: string;
    values: Array<string>;
    options: Array<{code: any, display: string}>
    multiSelect: boolean = false;
    boxed: boolean = true;
}

export class FormGroup{
    title:string;
    children:Array<FormInput>
}

export class FormButton{
    title:string;
    style: FormButtonStyle;
    eventClick: Function;
}    
