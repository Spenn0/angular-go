import { Component, OnInit } from '@angular/core';
import { Contact } from '../interfaces/contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [
    {
      firstName: 'Leon',
      lastName: 'Cuckovich',
      number: '248-248-2488',
    },
    {
      firstName: 'Lisa',
      lastName: 'Cuckovich',
      number: '248-248-2488',
    },
    {
      firstName: 'Tyler',
      lastName: 'Cuckovich',
      number: '248-248-2488',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
