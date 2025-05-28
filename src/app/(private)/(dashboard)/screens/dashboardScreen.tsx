"use client";

import { useState } from "react";

import useToggle from "@/app/hooks/useToggle";
import type { TLink } from "@/app/repository/dashboard/types";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";

import ConfirmationDeleteModal from "../components/confirmationDeleteModal";
import EmptyLinks from "../components/emptyLinks";
import Link from "../components/link";
import LinkForm from "../components/linkForm";
import useUpdateLinks from "../hooks/useUpdateLinks";

type TProps = {
  userId: string;
  initalLinks: TLink[];
};
export default function DashboardScreen({ initalLinks, userId }: TProps) {
  const [links, setLinks] = useState<TLink[]>(initalLinks);
  const [openForm, toggleForm] = useToggle(false);
  const [openDeleteConfirmation, toggleDeleteConfirmation] = useToggle(false);
  const [editingLink, setEditingLink] = useState<TLink>();
  const [deletingLink, setDeletingLink] = useState<TLink>();

  const { mutateAsync: onUpdateLinks } = useUpdateLinks();

  const handleDragEnd = async (result: DropResult) => {
    const initialIndex = result.source.index;
    const destinationIndex = result.destination?.index;

    if (destinationIndex === undefined || destinationIndex === initialIndex)
      return;

    const newLinks = [...links];
    const [removed] = newLinks.splice(initialIndex, 1);
    newLinks.splice(destinationIndex, 0, removed);

    setLinks(newLinks);
    await onUpdateLinks({ userId, links: newLinks });
  };

  const handleAdd = (values: TLink): TLink[] => {
    const newLink = {
      ...values,
      id: crypto.randomUUID(),
    };

    return [newLink, ...links];
  };

  const handleEdit = (values: TLink): TLink[] => {
    const updatedLinks = links.map((link) =>
      link.id === values.id ? { ...values } : link,
    );
    return updatedLinks;
  };

  const handleDelete = async () => {
    if (!deletingLink) return;

    const updatedLinks = links.filter((link) => link.id !== deletingLink.id);

    await onUpdateLinks({ userId, links: updatedLinks });
    setLinks(updatedLinks);
    toggleDeleteConfirmation();
    setDeletingLink(undefined);
  };

  const handleSubmit = async (values: TLink) => {
    const updatedLinks: TLink[] = values.id
      ? handleEdit(values)
      : handleAdd(values);

    await onUpdateLinks({ userId, links: updatedLinks });
    setLinks(updatedLinks);
    toggleForm();
  };

  const onEdit = (link: TLink) => {
    setEditingLink(link);
    toggleForm();
  };

  const onDelete = (link: TLink) => {
    setDeletingLink(link);
    toggleDeleteConfirmation();
  };

  return (
    <>
      <div className="flex flex-col w-full p-4 pt-10 sm:items-center gap-4">
        <div className="flex flex-col sm:w-[50%] gap-4">
          <div className="flex justify-between">
            <h1 className="text-4xl font-semibold">My links</h1>
            <Button
              className="rounded-full w-[100px]"
              disableElevation
              onClick={toggleForm}
              startIcon={<Add />}
              style={{ textTransform: "none" }}
              variant="contained"
            >
              Add
            </Button>
          </div>
          <section>
            {
              [
                <EmptyLinks key="empty" />,
                <DragDropContext key="drag" onDragEnd={handleDragEnd}>
                  <Droppable
                    direction="vertical"
                    droppableId="links"
                    type="list"
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="flex flex-col gap-4"
                      >
                        {links.map((item, index) => (
                          <Link
                            active={item.active}
                            id={item?.id?.toString()}
                            index={index}
                            key={item.id}
                            onDelete={() => onDelete(item)}
                            onEdit={() => onEdit(item)}
                            title={item.title}
                            url={item.url}
                          />
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>,
              ][Number(Boolean(links.length))]
            }
          </section>
        </div>
      </div>
      <LinkForm
        link={editingLink}
        onClose={toggleForm}
        onSave={handleSubmit}
        open={openForm}
      />
      <ConfirmationDeleteModal
        handleCloseModal={toggleDeleteConfirmation}
        handleConfirm={handleDelete}
        open={openDeleteConfirmation}
      />
    </>
  );
}
