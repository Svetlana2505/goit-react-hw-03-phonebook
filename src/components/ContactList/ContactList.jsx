import { Button } from './ContactList.styled.js';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            <span>{name} : </span>
            <span>{number}</span>
            <Button type="button" onClick={() => deleteContact(id)}>
              delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
