
import { ContactsInfo } from "@/app/data/contacts";
import { PhoneNumber } from "@/app/data/phoneNumbers";

const ContactInfo: React.FC = () => {
  const { phone, email, socials } = ContactsInfo;

  return (
    <ul className="pb-[12px] ml-auto w-[280px] md:ml-[34px] md:mr-auto md:mb-16 md:pb-0 
        md:w-[525px] md:h-[96px] md:flex md:flex-col md:flex-wrap xl:m-0 xl:w-1/2 xl:h-auto xl:flex-nowrap">
      <li className="mb-6 flex flex-row-reverse gap-5 xl:mb-16">
        <span className="w-[80px] text-white text-xs font-extralight leading-5 
            md:pt-1 xl:mr-[12px] xl:w-[300px]">
          {phone.name}
        </span>

        <span className="w-[164px] flex flex-col text-white text-right text-sm font-normal leading-6 md:text-base md:leading-6">
          {phone.contacts.map(contact =>
            <a
              href={`tel:${contact}`}
              rel="noopener noreferrer"
              target="_blank"
              key={contact}>
                {PhoneNumber(contact)}
            </a>
          )}
        </span>
      </li>

      <li className="mb-[26px] flex flex-row-reverse gap-5 md:mb-0 xl:mb-[124px]">
        <span className="w-[81px] text-white text-xs font-extralight leading-5 
            md:pt-1 xl:mr-[12px] xl:w-[300px]">
          {email.name}
        </span>

        <span className="text-right text-white text-sm font-normal leading-6
            md:text-base md:leading-6">
          {email.contacts.map(contact =>
            <a
              href={`mailto:${contact}`}
              rel="noopener noreferrer"
              target="_blank"
              key={contact}>
              {contact}
            </a>
          )}
        </span>
      </li>
      
      <li className="flex gap-5 md:ml-[90px] xl:flex-row-reverse">
        <span className="w-[180px] text-white text-right text-xs font-extralight leading-5 
            md:w-auto md:pt-1 xl:mr-[12px] xl:w-[300px] xl:text-left">
          {socials.name}
        </span>

        <ul className="w-[80px] text-sm font-normal leading-6
            md:text-base md:leading-6 xl:text-end">
          {socials.contacts.map(contact =>
            <li key={contact.title}>
              <a
                href={contact.link}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={contact.title}
                className="footer-link text-white border-transparent transition-all duration-200 ease-in">
                {contact.title}
              </a>
            </li>
          )}
        </ul>
      </li>
    </ul>
  );
};

export default ContactInfo;