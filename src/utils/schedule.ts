import type { Appointment, Period } from "../types/appointment";

/**
 * Períodos e horários fixos da agenda, conforme o Figma:
 * Manhã 09h–12h, Tarde 13h–18h, Noite 19h–21h.
 */
export const PERIODS: Array<{
  key: Period;
  label: string;
  range: string;
  times: string[];
}> = [
  {
    key: "morning",
    label: "Manhã",
    range: "09h-12h",
    times: ["09:00", "10:00", "11:00", "12:00"],
  },
  {
    key: "afternoon",
    label: "Tarde",
    range: "13h-18h",
    times: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  },
  {
    key: "night",
    label: "Noite",
    range: "19h-21h",
    times: ["19:00", "20:00", "21:00"],
  },
];

/** Todos os horários válidos do design, na ordem cronológica. */
export const ALL_TIMES = PERIODS.flatMap((period) => period.times);

/** Filtra os agendamentos de uma data (yyyy-mm-dd). */
export function getAppointmentsForDate(
  appointments: Appointment[],
  date: string,
): Appointment[] {
  return appointments.filter((appointment) => appointment.date === date);
}

/**
 * Agrupa os agendamentos de uma data por período, já em ordem
 * cronológica crescente dentro de cada período.
 */
export function groupAppointmentsByPeriod(
  appointments: Appointment[],
  date: string,
): Record<Period, Appointment[]> {
  const forDate = getAppointmentsForDate(appointments, date);

  return PERIODS.reduce(
    (grouped, period) => {
      grouped[period.key] = forDate
        .filter((appointment) => period.times.includes(appointment.time))
        .sort((a, b) => a.time.localeCompare(b.time));
      return grouped;
    },
    { morning: [], afternoon: [], night: [] } as Record<Period, Appointment[]>,
  );
}

/** Indica se um horário já está ocupado na data informada. */
export function isTimeTaken(
  appointments: Appointment[],
  date: string,
  time: string,
): boolean {
  return appointments.some(
    (appointment) => appointment.date === date && appointment.time === time,
  );
}

/** Data de hoje no formato ISO yyyy-mm-dd (fuso local). */
export function todayISO(): string {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}
