
import Link from 'next/link';
import contacts from '../../data/contacts.json';
import social from '../../data/socials.json';

const ContactBlock = () => {
  const { tel, mail } = contacts;

  return (
    <div className="flex flex-col items-start gap-x-5 gap-y-6 my-9 md:flex-row xl:flex-col xl:w-1/2 xl:justify-center xl:gap-[124px] xl:my-0">
      <div className="flex flex-col w-full gap-y-6 md:w-1/2 xl:w-full xl:gap-y-16">
        <div className="flex gap-5 w-full justify-end">
          <ul className="text-[14px] leading-6 flex-1 text-right flex flex-col">
            {tel.map(({ id, href, text }) => (
              <li key={id}>
                
              </li>
            ))}
          </ul>
          
        </div>
        <div className="flex gap-5 w-full flex-1 justify-end md:col-start-1 md:col-end-3 md:row-start-2">
          
        </div>
      </div>
      <div className="flex gap-5 w-full flex-1 justify-end md:w-1/2 md:justify-center xl:flex-row-reverse xl:w-full xl:justify-start">
        
        <ul className="w-[32%] xl:text-right">
          {social.map(({ id, name, src }) => (
            <li key={id}>
              <Link
                href={src}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[14px] leading-6 md:text-[16px] xl:text-[18px] link"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactBlock;