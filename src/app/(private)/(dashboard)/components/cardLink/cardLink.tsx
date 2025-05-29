"use client";

import type { TLink } from "@/app/repository/dashboard/types";
import { Draggable } from "@hello-pangea/dnd";
import { Delete, DragIndicator, Edit } from "@mui/icons-material";
import { IconButton, Switch, Tooltip } from "@mui/material";

type TProps = TLink & {
  index: number;
  onEdit: VoidFunction;
  onDelete: VoidFunction;
  onToggleActive: VoidFunction;
  active: boolean;
};

export default function CardLink({
  title,
  url,
  id,
  index,
  onEdit,
  onDelete,
  onToggleActive,
  active,
}: TProps) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="px-4 py-3 rounded-xl border bg-white min-h-[100px]"
          ref={provided.innerRef}
          style={{
            ...provided.draggableProps.style,
          }}
        >
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <DragIndicator />
              <div>
                <div className="flex gap-4 items-center">
                  <Tooltip title="Active">
                    <Switch checked={active} onChange={onToggleActive} />
                  </Tooltip>
                  <p className="font-semibold">{title}</p>
                </div>
                <p className="text-xs text-text-primary mt-4">{url}</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <IconButton onClick={onEdit} size="small">
                <Edit fontSize="small" />
              </IconButton>
              <IconButton onClick={onDelete} size="small">
                <Delete fontSize="small" />
              </IconButton>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
