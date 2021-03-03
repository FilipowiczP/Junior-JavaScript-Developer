import react from "react";
import "./contact.scss";

interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string | null;
}
const Contact = ({ id, first_name, last_name, email, avatar }: Contact) => {
  return (
    <div className="contact" onClick={() => console.log("Id contact: " + id)}>
      {avatar !== null ? (
        <img src={avatar} alt="avatar" className="contact__avatar" />
      ) : null}
      <p className="contact__name">
        {first_name} {last_name}
      </p>

      <p className="contact__email">{email}</p>
    </div>
  );
};

export default Contact;
