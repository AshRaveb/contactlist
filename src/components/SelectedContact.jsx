import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`); {/*Use https, netlify won't make requests over http */}
                const result = await response.json();
                setContact(result);
            } catch (error) {
                console.log(error);
            }
        }
        fetchContact();
    }, []);
    console.log("Selected Contact", contact);

    //only display once a contact isn't null
    if (contact) {
        //use td for styling purposes
        return (
            <div>
                <table>
                    <th>Name: {contact.name}</th>
                    <tbody>
                        <tr>
                            <td>Username: {contact.username}</td>
                        </tr>
                        <tr>
                            <td>
                                Email: {contact.email}
                            </td>
                        </tr>
                        <tr>
                            <td>Phone: {contact.phone}</td>
                        </tr>
                        <tr>
                            <td>Website: {contact.website}</td>
                        </tr>
                    </tbody>

                </table>
                <br></br>
                <button onClick={() => { setSelectedContactId(null) }}>Contact List</button>
            </div>
        );
    } else {
        return null;
    }

}