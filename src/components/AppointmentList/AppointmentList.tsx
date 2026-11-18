import { useState } from "react";
import type { Appointment } from "../../types/appointment";
import { groupAppointmentsByPeriod, todayISO } from "../../utils/schedule";
import { DataInput } from "../DataInput/DataInput";
import { PeriodSection } from "../PeriodSection/PeriodSection";
import { PERIODS } from "../../utils/schedule";

type AppointmentListProps = {
  appointments: Appointment[];
  onRemove: (id: string) => void;
};

/** Agenda do dia selecionado: header com seletor de data e cards por período. */
export function AppointmentList({ appointments, onRemove }: AppointmentListProps) {
  const [agendaDate, setAgendaDate] = useState(todayISO());
  const grouped = groupAppointmentsByPeriod(appointments, agendaDate);

  return (
    <section className="flex w-full flex-col px-6 py-8 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[682px] flex-col">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl leading-8 font-bold text-gray-100">Sua agenda</h2>
            <p className="mt-1 text-sm leading-5 text-gray-300">
              Consulte os seus cortes de cabelo agendados por dia
            </p>
          </div>
          <DataInput
            id="agenda-date"
            value={agendaDate}
            onChange={setAgendaDate}
            compact
          />
        </header>

        <div className="mt-8 flex flex-col gap-3">
          {PERIODS.map((period) => (
            <PeriodSection
              key={period.key}
              period={period.key}
              appointments={grouped[period.key]}
              onRemove={onRemove}
            />
          ))}
        </div>
      </div>
    </section>
  );
}