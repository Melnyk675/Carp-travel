
import ContactInfo from '../../components/Contacts/ContactInfo';
import ContactForm from '../../components/Contacts/ContactForm';

const Contacts = () => {
  return (
    <section className='w-full h-full md:bg-left contacts-bg py-[55px] md:py-[64px] xl:py-[104px]'
      id="contacts">
      <div className='container'>
        <h2 className='title uppercase md:leading-none leading-[56px] mb-8 xl:mb-[70px]'>Contact <span className='font-medium'>Us</span></h2>
        
        <div className='xl:flex'>
          <ContactInfo />
          <ContactForm />
        </div>

      </div>
    </section>
  )
}

export default Contacts;