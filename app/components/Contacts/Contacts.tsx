import Title from '../Title';

import ContactBlock from './ContactBlock';

const Contacts = () => {
  return (
    <section id="contacts" className="contacts-bg">
      <div className="container">
        <Title title="Contact" accent="Us" />
        <div className="xl:flex xl:mt-[71px]">
          <ContactBlock />
          
        </div>
      </div>
    </section>
  );
};

export default Contacts;