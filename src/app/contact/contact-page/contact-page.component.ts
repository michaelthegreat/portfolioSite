import { Component, OnInit } from '@angular/core';
import { ContactFacadeService } from '@contact/contact-facade.service';
import { getContactForm } from '../contact.utils';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contactForm = getContactForm();
  resolvedCaptcha = false;
  constructor(private facade: ContactFacadeService) {}

  ngOnInit(): void {}
  submit() {
    console.log('contact-page#submit', this.contactForm.getRawValue());
    if (this.contactForm.valid) {
      if (this.resolvedCaptcha) {
        const form = this.contactForm.getRawValue();
        this.facade.sendContactRequestForm(form.name, form.email, form.message)
      }    else {
        alert('please resolve the captcha')
      }
    } else {
      this.updateControlsValidity();
    }

  }
  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`); // Write your logic here about once human verified what action you want to perform
    this.resolvedCaptcha = true;
  }

  isErrorShown(ctrlName: string): boolean {
    const ctrl = this.contactForm.get(ctrlName);

    return !ctrl?.pristine && ctrl?.invalid === true;
  }

  private updateControlsValidity() {
    const validatedControls = ['name', 'email', 'message'];
    validatedControls.forEach(ctrlName => {
      this.contactForm.get(ctrlName)?.markAsDirty();
      this.contactForm.get(ctrlName)?.updateValueAndValidity();
    });
  }
}
