import { useState } from "react";
import { Scissors, UserSquare } from "@phosphor-icons/react";
import type { Appointment } from "../../types/appointment";
import { PERIODS, isTimeTaken, todayISO } from "../../utils/schedule";
import { DataInput } from "../DataInput/DataInput";

type ScheduleSidebarProps = {
  appointments: Appointment[];
  onSubmit: (appointment: Omit<Appointment, "id">) => void;
};

type FormErrors = {
  date?: string;
  time?: string;
  clientName?: string;
};

/**
 * Área lateral: logo, formulário de novo agendamento e grade de horários.
 * Horários já ocupados na data escolhida aparecem desabilitados.
 */
export function ScheduleSidebar({ appointments, onSubmit }: ScheduleSidebarProps) {
  const [date, setDate] = useState(todayISO());
  const [time, setTime] = useState<string | null>(null);
  const [clientName, setClientName] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!date) nextErrors.date = "Selecione uma data.";
    if (!time) nextErrors.time = "Selecione um horário.";
    if (clientName.trim() === "") {
      nextErrors.clientName = "Informe o nome do cliente.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onSubmit({ clientName: clientName.trim(), date, time: time as string });

    // Redefine o formulário; a data permanece para facilitar novos cadastros no mesmo dia.
    setTime(null);
    setClientName("");
  }

  return (
    <aside className="flex w-full flex-col lg:m-3 lg:w-[498px] lg:shrink-0">
      {/* Logo em card sobreposto ao painel: tom mais claro (gray-600) e canto inferior direito arredondado */}
      <div className="relative z-10 -mb-4 inline-flex items-center self-start gap-1 rounded-br-xl bg-gray-600 px-4 py-2 text-yellow lg:-ml-3">
        <span className="text-xl">HairDay</span>
        <Scissors size={20} className="text-yellow" aria-hidden="true" />
      </div>

      <div className="flex flex-col rounded-2xl rounded-tl-none bg-panel p-6">
        <div className="lg:px-[56px] lg:pb-[44px]">
        <h1 className="mt-8 text-xl leading-8 font-bold text-gray-100 lg:mt-11">
          Agende um atendimento
        </h1>
        <p className="mt-1 max-w-[338px] text-sm leading-5 text-gray-300">
          Selecione data, horário e informe o nome do cliente para criar o agendamento
        </p>

        <form className="mt-6 flex w-full max-w-[338px] flex-col" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="appointment-date" className="text-base font-bold text-gray-100">
            Data
          </label>
          <div className="mt-2">
            <DataInput id="appointment-date" value={date} onChange={setDate} />
          </div>
          {errors.date && (
            <p role="alert" className="mt-1 text-sm text-yellow-light">
              {errors.date}
            </p>
          )}
        </div>

        <fieldset className="mt-8">
          <legend className="text-base font-bold text-gray-100">Horários</legend>

          {PERIODS.map((period) => (
            <div key={period.key} className="mt-6 first:mt-3">
              <span className="text-sm text-gray-300">{period.label}</span>
              <div className="mt-2 flex flex-wrap gap-x-3 gap-y-2">
                {period.times.map((option) => {
                  const taken = isTimeTaken(appointments, date, option);
                  const selected = time === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={selected}
                      disabled={taken}
                      onClick={() => setTime(option)}
                      className={`h-10 rounded-lg border px-4 text-sm transition-colors ${
                        selected
                          ? "border-yellow bg-transparent text-yellow"
                          : taken
                            ? "cursor-not-allowed border-transparent bg-field text-gray-500"
                            : "border-gray-600 bg-field text-gray-100 hover:border-gray-500 hover:bg-gray-600"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          {errors.time && (
            <p role="alert" className="mt-2 text-sm text-yellow-light">
              {errors.time}
            </p>
          )}
        </fieldset>

        <div className="mt-8">
          <label htmlFor="client-name" className="text-base font-bold text-gray-100">
            Cliente
          </label>
          <div className="mt-2 flex h-12 items-center gap-2 rounded-lg border border-gray-600 bg-field px-4 focus-within:border-yellow">
            <UserSquare size={20} weight="bold" className="shrink-0 text-yellow" aria-hidden="true" />
            <input
              id="client-name"
              type="text"
              value={clientName}
              onChange={(event) => setClientName(event.target.value)}
              placeholder="Nome do cliente"
              className="min-w-0 flex-1 bg-transparent text-sm text-gray-100 placeholder:text-gray-300 outline-none"
            />
          </div>
          {errors.clientName && (
            <p role="alert" className="mt-1 text-sm text-yellow-light">
              {errors.clientName}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-12 h-14 w-full rounded-lg bg-yellow text-sm font-bold tracking-wide text-gray-900 uppercase transition-colors hover:bg-yellow-light"
        >
          Agendar
        </button>
        </form>
        </div>
      </div>
    </aside>
  );
}
