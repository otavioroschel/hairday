import { Trash } from "@phosphor-icons/react";
import type { Appointment } from "../../types/appointment";

type AppointmentItemProps = {
  appointment: Appointment;
  onRemove: (id: string) => void;
};

/** Linha de um agendamento na agenda, com ação de exclusão individual. */
export function AppointmentItem({ appointment, onRemove }: AppointmentItemProps) {
  return (
    <li className="flex h-8 items-center gap-5">
      <span className="w-12 shrink-0 text-base text-gray-300">{appointment.time}</span>
      <span className="min-w-0 flex-1 truncate text-base text-gray-100">
        {appointment.clientName}
      </span>
      <button
        type="button"
        aria-label={`Excluir agendamento de ${appointment.clientName} às ${appointment.time}`}
        onClick={() => onRemove(appointment.id)}
        className="shrink-0 text-yellow transition-colors hover:text-yellow-light"
      >
        <Trash size={16} weight="bold" aria-hidden="true" />
      </button>
    </li>
  );
}
