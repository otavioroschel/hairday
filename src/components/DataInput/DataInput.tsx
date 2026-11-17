import { useRef } from "react";
import { CalendarBlank, CaretDown } from "@phosphor-icons/react";

type DataInputProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  /** Versão compacta usada no header da agenda (152px no Figma). */
  compact?: boolean;
};

/**
 * Campo de data do design: ícone de calendário + input nativo + caret.
 * O input nativo (`type="date"`) garante acessibilidade e formatação
 * local (dd/mm/aaaa), com o seletor visual do navegador.
 */
export function DataInput({ id, value, onChange, compact = false }: DataInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function openPicker() {
    inputRef.current?.showPicker();
  }

  return (
    <div
      className={`flex h-12 items-center gap-2 rounded-lg border border-gray-600 bg-field px-4 ${
        compact ? "w-[152px]" : "w-full"
      } cursor-pointer`}
      onClick={openPicker}
    >
      <CalendarBlank size={20} weight="bold" className="shrink-0 text-yellow" />
      <input
        ref={inputRef}
        id={id}
        type="date"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onClick={(event) => event.stopPropagation()}
        className="min-w-0 flex-1 cursor-pointer bg-transparent text-sm text-gray-100 outline-none [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:hidden"
      />
      <CaretDown size={16} weight="bold" className="shrink-0 text-gray-200" />
    </div>
  );
}
