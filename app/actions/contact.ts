"use server";
import { revalidatePath } from "next/cache";
import { createContact, deleteContact, updateContact } from "../api/contact";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";

export const createContactAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  if (!formData) {
    return { error: "Form data is required" };
  }

  const user = await getSession();
  const newContact: Omit<ContactType, "id"> = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    userId: user?.id as string,
  };

  try {
    await createContact(newContact as ContactType);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("Error creating contact:", error);
    return { error: "Failed to create contact" };
  }
};

export const updateContactAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const id = formData.get("id") as string;
  const user = await getSession();
  const updatedContact: ContactType = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    userId: user?.id as string,
    id: id,
  };

  try {
    await updateContact(id, updatedContact);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("Error updating contact:", error);
    return { error: "Failed to update contact" };
  }
};

export const deleteContactAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const id = formData.get("id") as string;
  try {
    await deleteContact(id);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("Error deleting contact:", error);
    return { error: "Failed to delete contact" };
  }
};
