import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DEFAULT_MAX_MESSAGE_LENGTH, DEFAULT_MAX_VARCHAR_LENGTH } from "../app.constants";

export const getContactForm = () => 
new FormGroup(
    {
        name: new FormControl('', [Validators.required, Validators.maxLength(DEFAULT_MAX_VARCHAR_LENGTH)]),
        email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(DEFAULT_MAX_VARCHAR_LENGTH)]),
        message: new FormControl(null, [Validators.required, Validators.maxLength(DEFAULT_MAX_MESSAGE_LENGTH)])
    }
)