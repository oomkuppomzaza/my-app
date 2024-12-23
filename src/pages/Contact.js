import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn">Send</button>
      </form>
      <div className="map">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.480409056795!2d99.00593867540793!3d18.796859987159023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3177f6e8efcd%3A0xe7b9e12a2b32b41c!2z4Lit4Liy4LiE4Lij4Liw4Lih4LiB4LmJ4LiX4Lie4LijIOC4peC4o-C4seC4iuC4ouC4teC4o-C5jOC5hOC4oeC4reC5gOC4reC4meC4o-C5jCDguJ7guITguKrguLLguKPguKfguJnguJnguKPguLUg4Lia4LiU4Liy4LiY4Li04Lih4LmA4Lig4Lit4LiH4LmJ4Liy4LiZ!5e0!3m2!1sth!2sth!4v1700000000000!5m2!1sth!2sth"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;