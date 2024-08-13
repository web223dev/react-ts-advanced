import { useTimersContext } from '../store/timers-context';
import Timer from './Timer';

export default function Timers() {
  const { timers } = useTimersContext();
  return (
    <ul>
      {timers.map((timers) => (
        <li key={timers.name}>
          <Timer {...timers} />
        </li>
      ))}
    </ul>
  );
}
