/**
 * Modelo de domínio do HairDay.
 *
 * - `date` no formato ISO `yyyy-mm-dd` (o mesmo usado pelo `<input type="date">`).
 * - `time` no formato `HH:mm`, sempre entre as opções fixas do design.
 */
export type Appointment = {
  id: string;
  clientName: string;
  date: string;
  time: string;
};

/** Períodos da agenda, conforme o Style Guide / Figma. */
export type Period = "morning" | "afternoon" | "night";
