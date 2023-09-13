import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclose from "../hooks/useDisclosue";
import { toast } from "react-toastify";

const ContactCard = ({ key, contact }) => {
  const { isOpen, onClose, onOpen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={key}
        className="flex  bg-yellow p-2 mt-4 gap-1 rounded-md items-center"
      >
        <div className="flex gap-1">
          <BiSolidUserCircle className="text-orange text-4xl" />
          <div className="items-center p-0">
            <h3 className="font-medium">{contact.name}</h3>
            <p className="text-xs">{contact.email}</p>
          </div>
          <div className="flex ml-20 gap-4 justify-items-end text-2xl items-center">
            <FiEdit onClick={onOpen} className="font-bold cursor-pointer" />
            <AiFillDelete
              onClick={() => deleteContact(contact.id)}
              className="text-red-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
