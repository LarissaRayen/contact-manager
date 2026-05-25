import { updateContactAction } from "@/app/actions/contact";
import { getContactById } from "@/app/api/contact";
import ContactForm from "@/app/components/ContactForm";
import React, { use } from "react";

const EditContactPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const contact = use(getContactById(id));
  console.log("contact", contact);
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Edit Contact</h1>
      <ContactForm action={updateContactAction} contact={contact} />
    </div>
  );
};

export default EditContactPage;
