import { CloudSun, MoonStars, SunHorizon } from "@phosphor-icons/react";
import type { Appointment, Period } from "../../types/appointment";
import { AppointmentItem } from "../AppointmentItem/AppointmentItem";
import { PERIODS } from "../../utils/schedule";

const PERIOD_ICONS: Record<Period, typeof SunHorizon> = {
  morning: SunHorizon,
  afternoon: CloudSun,
  night: MoonStars,
};

const EMPTY_STATE_MESSAGE =
  "Você ainda não tem agendamentos cadastrados nesse período.";

type PeriodSectionProps = {
  period: Period;
  appointments: Appointment[];
  onRemove: (id: string) => void;
};

/** Card de um período (Manhã/Tarde/Noite) com seus agendamentos. */
export function PeriodSection({ period, appointments, onRemove }: PeriodSectionProps) {
  const meta = PERIODS.find((item) => item.key === period);
  const Icon = PERIOD_ICONS[period];

  return (
    <section className="rounded-lg border border-gray-700 bg-card">
      <header className="flex h-11 items-center gap-3 border-b border-gray-700 px-5">
        <Icon size={20} weight="bold" className="shrink-0 text-yellow" aria-hidden="true" />
        <h3 className="flex-1 text-sm font-bold text-gray-100">{meta?.label}</h3>
        <span className="text-sm text-gray-300">{meta?.range}</span>
      </header>

      {appointments.length === 0 ? (
        <p className="px-5 py-4 text-sm text-gray-300">{EMPTY_STATE_MESSAGE}</p>
      ) : (
        <ul className="space-y-0.5 px-5 py-5">
          {appointments.map((appointment) => (
            <AppointmentItem key={appointment.id} appointment={appointment} onRemove={onRemove} />
          ))}
        </ul>
      )}
    </section>
  );
}
