import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ContactRow from "./ContactRow";

/*
const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];*/

export default function ContactList({ setSelectedContactId }) {
    const [contacts, setContacts] = useState(null);

    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
                const result = await response.json();
                setContacts(result);
            } catch (error) {
                console.log(error);
            }
        }
        fetchContacts();
    }, []);

    console.log("Contacts: ", contacts);

    if (contacts) {
        return (<table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
                <tr> {/*Moved to thead for styling purposes */}
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => {
                    return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />;
                })}
            </tbody>
        </table>);
    } else {
        return null;
    }
}