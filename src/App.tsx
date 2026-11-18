import { useState } from "react";
import type { Appointment } from "./types/appointment";
import { ScheduleSidebar } from "./components/ScheduleSidebar/ScheduleSidebar";
import { AppointmentList } from "./components/AppointmentList/AppointmentList";

function App() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  function addAppointment(data: Omit<Appointment, "id">) {
    const newAppointment: Appointment = {
      id: crypto.randomUUID(),
      ...data,
    };
    setAppointments((current) => [...current, newAppointment]);
  }

  function removeAppointment(id: string) {
    setAppointments((current) => current.filter((appointment) => appointment.id !== id));
  }

  return (
    <main className="flex min-h-dvh flex-col bg-container lg:flex-row">
      <ScheduleSidebar appointments={appointments} onSubmit={addAppointment} />
      <div className="min-w-0 flex-1">
        <AppointmentList appointments={appointments} onRemove={removeAppointment} />
      </div>
    </main>
  );
}

export default App;