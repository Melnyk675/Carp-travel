import { FormContent } from "./career";

export enum SelectedPage {
    About = "about",
    Services = "services",
    Career = "career",
    Gallery = "gallery",
    Contacts = "contacts",
  }
  
  export type ButtonProps = {
    className?: string;
    onClick?: () => void;
    label: string;
    type: "button" | "submit" | "reset" | undefined;
    aria?: string;
  }
  export interface ServicesSlideInfoProps {
    item: {
      id: string;
      img: string;
      quote: string;
      title: string;
      description: string;
    };
    index?: number;
    activeSlide?: number;
    handleMenuButtonClick?: (slideIndex: number) => void;
  }

  export type GalleryProps = {
    swiperReady: boolean;
    prevBtnRef: React.RefObject<HTMLButtonElement>;
    nextBtnRef: React.RefObject<HTMLButtonElement>;
  };

  export type Contact = {
    name: string;
    contacts: string[];
  };
  
  export type Social = {
    title: string;
    link: string;
  };
  
  export type Socials = {
    name: string;
    contacts: Social[];
  };
  
  export type ContactData = {
    phone: Contact;
    email: Contact;
    socials: Socials;
  };
  
  export type ContactForm = {
    formContent: FormContent;
  };


